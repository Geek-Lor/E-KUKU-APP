import React from "react";

//Components Import
import Title from "./Title";
import Product from './Product';

//Import Global State
import { useProduct } from '../context/product-context/productProvider'


const FeaturedProducts = () => {

  const { featuredProducts } = useProduct();
 
  return (
    <section className='featured-products'>
      <Title title='featured products' />
      <div className='featured-products-center'>
        {
          featuredProducts.map(product => <Product key={product.id} product={product} />)
        }
      </div>
    </section>
  );
};

export default FeaturedProducts;
