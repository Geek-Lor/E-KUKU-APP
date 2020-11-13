import React from "react";

/**Routing */
import { Link } from 'react-router-dom';

//Import Components
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import ProductsContainer from '../components/ProductsContainer';

const Market = () => {
  return (
    <>
      <Hero hero='marketHero'>
        <Banner title='E-kuku market'>
          <Link to='/' className='btn-primary'>
            return home
          </Link>
        </Banner>
      </Hero>
      <ProductsContainer />
    </>
  );
};

export default Market;
