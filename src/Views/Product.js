import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import ErrorDialog from "../Components/ErrorDialog";
import { useAxiosGet } from "../hooks/HttpRequests";

function Product() {
  const { id } = useParams();
  const url = `https://5f630ac4363f0000162d7f89.mockapi.io/products/${id}`;

  const product = useAxiosGet(url);

  let content = null;

  if (product.error) {
    content = (
      <div>
        <ErrorDialog />
      </div>
    );
  }

  if (product.loading) {
    content = (
      <div>
        <Loader />
      </div>
    );
  }
  if (product.data) {
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
        <div>
          <img src={product.data.image} alt={product.data.name} />
        </div>
        <div className="font-bold text-xl mb-3">$ {product.data.price}</div>
        <div>{product.data.description}</div>
      </div>
    );
  }
  return <div>{content}</div>;
}

export default Product;
