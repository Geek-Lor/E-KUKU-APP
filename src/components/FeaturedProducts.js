import React from "react";

//Components Import
import Title from "./Title";
import ProductList from './ProductList';


const FeaturedProducts = () => {
 
  return (
    <section className='featured-products'>
      <Title title='featured products' />
      <div className='featured-products-center'>
        <ProductList />
      </div>
    </section>
  );
};

export default FeaturedProducts;
