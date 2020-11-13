import React from 'react';

/**Routing */
import { Link } from 'react-router-dom';

/**Import Global State */
import { useProduct } from '../context/product-context/productProvider';

/**Components Import */
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Title from '../components/Title';
import CartItem from '../components/CartItem';

export const Cart = () => {

    const {cart} = useProduct();

    return (
        <>
        <Hero hero='marketHero'>
            <Banner title='e-kuku shopping cart'>
                <Link to='/market' className='btn-primary'>
                    continue shopping
                </Link>
            </Banner>    
        </Hero> 
        <div className="container mt-4">
            <Title title= 'shopping cart' />
            <div className="row">
                <div className="col-sm-12">
                    <table className="table table-striped table-border checkout-table">
                        <tbody>
                            <tr>
                                <th className="hidden-xs">Item</th>
                                <th>Description</th>
                                <th className="hidden-xs">Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                            {
                                cart.map(product => 
                                <CartItem 
                                    key={product.id} product={product} 
                                />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        {/* <hr className="divider-w" />
        <div className="row mt-70">
            <div className="col-sm-5 col-sm-offset-7">
            <div className="shop-Cart-totalbox">
                <h4 className="font-alt">Cart Totals</h4>
                <table className="table table-striped table-border checkout-table">
                <tbody>
                   
                </tbody>
                </table>
                <button className="btn-primary" type="submit">
                      Proceed to Checkout
                </button>
            </div>
            </div>
        </div> */}
    </>        
    )
}

export default Cart