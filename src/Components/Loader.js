import React from 'react';
import { CircularProgress } from '@material-ui/core';

function Loader() {
  return ( 
    <div className="flex justify-center items-center">
      <CircularProgress />
    </div>
   );
}
 
export default Loader;