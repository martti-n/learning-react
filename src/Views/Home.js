import React from "react";
import Loader from "../Components/Loader";
import ErrorDialog from "../Components/ErrorDialog";
import ProductCard from '../Components/ProductCard' ;
import { useAxiosGet } from "../hooks/HttpRequests";

function Home() {
  let content = null;

  const url = `https://5f630ac4363f0000162d7f89.mockapi.io/products`;

  let products = useAxiosGet(url) 

  if (products.error) {
    content = (
      <div>
        <ErrorDialog />
      </div>
    );
  }

  if (products.loading) {
    content = (
      <div>
        <Loader />
      </div>
    );
  }
  if (products.data) {
    content = products.data.map((product, key) => (
      <div key={key}>
        <ProductCard product={product}/>
      </div>
    ));
  }
  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Best Sel-Sellers</h1>
      {content}
    </div>
  );
}

export default Home;
