import React  from "react";

//Import Components
import ProductsFilter from './ProductsFilter';
import ProductList from './ProductList';

const RoomsContainer = () => {
// //   const { loading, rooms, sortedRooms } = useContext(GlobalContext);
// //   if (loading) {
// //     return <Loading />;
//   }
  return (
    <div>
      <ProductsFilter />
      <ProductList />
    </div>
  );
};
export default RoomsContainer;
