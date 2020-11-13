import React, { Fragment } from "react";

/**Routing */
import { Link } from 'react-router-dom';

/**Import Components */
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import FeaturedProducts from '../components/FeaturedProducts';


const Home = () => {
  return (
    <Fragment>
      <Hero hero='defaultHero'>
        <Banner
          title='welcome to e-kuku'
          subTitle='chicken market in your pocket'
        >
          <Link to='/market' className='btn-primary'>
            {" "}
            market
          </Link>
        </Banner>
      </Hero>
      <FeaturedProducts />
    </Fragment>
  );
};

export default Home;
