import React  from "react";


//Import Components
import Title from "./Title";

// //get Unique value
// const getUnique = (items, value) => [
//   ...new Set(items.map((item) => item[value])),
// ];

const ProductsFilter = ({ rooms }) => {
//   //Get Unique Room Types
//   let types = getUnique(rooms, "type");
//   //Add the value All
//   types = ["all", ...types];

  let types = ['all, rooster, hen, eggs'];
  
 


//   const [roomType, setRoomtype] = useState(type);
 
//   const [roomPrice, setRoomPrice] = useState(price);



//   useEffect(
//     () => {
//       filterByType(roomType);
//       filterByPrice(roomPrice);
//     },
//     //eslint-disable-next-line
//     [
//       roomType,
//       roomPrice,
//     ]
//   );

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
            value={''}
            // onChange={handleRoom}
            className='form-control'
          > 
            {types.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>))}
          </select>
        </div>
        {/**End of Select Type */}
        {/**Price */}
        <div className='form-group'>
          <label htmlFor='price'>Room Price {'500'} Ksh </label>
          <input
            type='range'
            name='price'
            id='price'
            // min={minPrice}
            // max={maxPrice}
            // value={roomPrice}
            // onChange={handlePrice}
            className='form-control'
          />
        </div>
        {/**End of Price */}
      </form>
    </section>
  );
};

export default ProductsFilter;
