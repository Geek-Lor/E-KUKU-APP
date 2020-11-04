import React from 'react'

import henImage from '../img/hen/hen_1.jpg'

const Product = () => {

    // if (rooms.length === 0) {
    //     return (
    //       <div className='empty-search'>
    //         <h3>unfortunately no rooms matched your search parameters</h3>
    //       </div>
    //     );
    //   }
    return (
        <article className='product'>
        <div className='img-container'>
          <img src={henImage} alt='product_img' />
          <div className='price-top'>
            <h6>{'500 Ksh'}</h6>
            <p>per Hen</p>
          </div>
          <button className='btn-primary product-link'>
            Add to cart
          </button>
        </div>
        <p className='product-info'>
            Lorem ipsum dolor sit, amet consectetur
        </p>
      </article>
    )
}

export default Product