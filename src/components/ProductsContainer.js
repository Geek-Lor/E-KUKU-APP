import React  from "react";

//Import Global State
import { useProduct } from '../context/product-context/productProvider';

//Import Components
import ProductsFilter from './ProductsFilter';
import ProductList from './ProductList';

const ProductsContainer = () => {
// //   const { loading, rooms, sortedRooms } = useContext(GlobalContext);
// //   if (loading) {
// //     return <Loading />;
//   }

  const {sortedProducts} = useProduct();

  return (
    <div>
      <ProductsFilter />
      <ProductList products = {sortedProducts} />
    </div>
  );
};
export default ProductsContainer;
