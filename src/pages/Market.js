import React from "react";


//Import Components
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import ProductsContainer from '../components/ProductsContainer';

const Market = () => {
  return (
    <>
      <Hero hero='marketHero'>
        <Banner title='E-kuku market'>
          <button to='/' className='btn-primary'>
            return home
          </button>
        </Banner>
      </Hero>
      <ProductsContainer />
    </>
  );
};

export default Market;
