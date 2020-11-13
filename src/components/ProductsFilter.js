import React, {useState, useEffect}  from "react";

//Import Global State
import { useProduct } from '../context/product-context/productProvider';

//Import Components
import Title from "./Title";

const ProductsFilter = () => {
  const { 
    maxPrice, 
    minPrice, 
    filterProduct, 
    filterPrice,
    filterKienyeji,
    filterGrade 
  } = useProduct();

  /**Filter By Products */
  let products = ['All', 'Rooster', 'Hen', 'Eggs'];
  
  const [product, setProduct] = useState('All');

  const handleProduct = (e) => setProduct(e.target.value);

  /**Filter By Price */
  const [price, setPrice] = useState(maxPrice);

  const handlePrice = (e) => setPrice(e.target.value);

  /**Kienyeji or Grade */
  const [grade, setGrade] = useState(false);
  const handleGrade = () => setGrade(!grade);
  const [kienyeji, setKienyeji] = useState(false);
  const handleKienyeji = () => setKienyeji(!kienyeji);

 useEffect(() => {
    filterProduct(product);
    filterPrice(price);
    filterGrade(grade);
    filterKienyeji(kienyeji);
    // eslint-disable-next-line
 }, [product,price,grade,kienyeji]);



  return (
    <section className='filter-container'>
      <Title title='search products' />
      <form className='filter-form'>
        {/** Select Type */}
        <div className='form-group'>
          <label htmlFor='type'>room type</label>
          <select
            name='type'
            id='type'
            value={product}
            onChange={handleProduct}
            className='form-control'
          > 
            {products.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>))}
          </select>
        </div>
        {/**End of Select Type */}
        {/**Price */}
        <div className='form-group'>
          <label htmlFor='price'>Product Price {price} Ksh </label>
          <input
            type='range'
            name='price'
            id='price'
            min= {minPrice}
            max= {maxPrice}
            value={price}
            onChange={handlePrice}
            className='form-control'
          />
        </div>
        {/**End of Price */}
        {/**Product Type */}
        <div className='form-group'>
          <div className='single-extra'>
            <input
              type='checkbox'
              name='grade'
              id='grade'
              checked={grade}
              onChange={handleGrade}
            />
            <label htmlFor='grade'> Grade </label>
          </div>
          <div className='single-extra'>
            <input
              type='checkbox'
              name='kienyeji'
              id='kienyeji'
              checked={kienyeji}
              onChange={handleKienyeji}
            />
            <label htmlFor='kienyeji'> Kienyeji </label>
          </div>
        </div>
        {/**End of Type */}
      </form>
    </section>
  );
};

export default ProductsFilter;
