import React from "react";

//Import Components
import Product from "./Product";

const ProductList = () => {
  
  return (
    <section className='productlist'>
      <div className='productlist-center'>
        <Product />  
      </div>
    </section>
  );
};

export default ProductList;