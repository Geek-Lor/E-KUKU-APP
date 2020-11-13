import React from 'react';
import {Link} from 'react-router-dom';

/**Components Import */
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Title from '../components/Title';
import Cart from './Cart';


const Checkout = () => {
    return (
    <>   
    <Hero hero='marketHero'>
        <Banner title='checkout'>
            <Link to='/cart' className='btn-primary'>
                back to cart
            </Link>
        </Banner>    
    </Hero>   
    <div className="container mt-4">
    <Title title= 'checkout' />    
    <Cart />
    </div>        
    </>        
    )
}

export default Checkout