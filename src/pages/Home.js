import React, { Fragment } from "react";

/**Import Components */
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import FeaturedProducts from '../components/FeaturedProducts'


const Home = () => {
  return (
    <Fragment>
      <Hero hero='defaultHero'>
        <Banner
          title='welcome to e-kuku'
          subTitle='chicken market in your pocket'
        >
          <button to='/rooms' className='btn-primary'>
            {" "}
            market
          </button>
        </Banner>
      </Hero>
      <FeaturedProducts />
    </Fragment>
  );
};

export default Home;
