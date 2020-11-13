import React from 'react';

/**Import Global State */
import { useProduct } from '../context/product-context/productProvider';


const Product = ({product}) => {

  const { img, price,description, productName, Incart } = product;

  const { addToCart } = useProduct();

  const handleClick = () => {
    addToCart(product);
  }
    
    return (
        <article className='product'>
        <div className='img-container'>
          <img src={img} alt='product_img' />
          <div className='price-top'>
            <h6>{price}{'Ksh'} </h6>
            <p> {description} </p>
          </div>
          <button 
            className='btn-primary product-link'
            onClick={handleClick }
            disabled={Incart}
            >
              {Incart ? 'Product Added' : 'Add to cart'}
          </button>
        </div>
        <p className='product-info'>
            {productName}
        </p>
      </article>
    )
}

export default Product