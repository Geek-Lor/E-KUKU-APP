import React from "react";

//Import Components
import Product from "./Product";

const ProductList = ({products}) => {

  if (products.length === 0) {
        return (
          <div className='empty-search'>
            <h3>unfortunately no products matched your search parameters</h3>
          </div>
        );
      }
  
  return (
    <section className='productlist'>
      <div className='productlist-center'>
        {
          products.map(product => <Product key={product.id} product={product} />)
        } 
      </div>
    </section>
  );
};

export default ProductList;