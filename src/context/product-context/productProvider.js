import { createContext, useReducer, useContext, useEffect } from 'react';

import productReducer from './productReducer';

import data from '../../data'

const ProductContext = createContext();

export const useProduct = () => useContext(ProductContext);

const ProductProvider = ({children}) => {

    let featuredProducts = [];

    function randomItems (dataArray) {

        let randomIndex = Math.floor(Math.random() * dataArray.length);
        
        featuredProducts.push(dataArray[randomIndex]);

        if(featuredProducts.length < 3){
           return randomItems(dataArray);
        }

        return featuredProducts;
    }

   featuredProducts = randomItems(data);

   /**Get Unique Values */
    const getUnique = (items, value) => [
    ...new Set(items.map(item => item[value]))
    ]

    const priceArray = getUnique(data, 'price');
    const maxPrice = Math.max(...priceArray);
    const minPrice = Math.min(...priceArray);


    const initialState = {
        products: [],
        featuredProducts,
        sortedProducts: data,
        maxPrice,
        minPrice,
        cart: []
    }

    const [state, dispatch] = useReducer(productReducer, initialState);

    /**Get Products */
    const getProducts = (products) => {
        products.forEach(product => {
            product.Incart = false;
            product.quantity = 1;
        });

        dispatch({
            type:'GET_PRODUCTS',
            payload: products
        })
    }

    useEffect(() => {
        getProducts(data);
        // eslint-disable-next-line
    }, []);

    /**Filter by Product Type */
    const filterProduct = (productType) => {
        dispatch({
            type: 'FILTER_PRODUCT',
            payload: productType
        });
    }

    /**Filter by Price */
    const filterPrice = (price) => {
        dispatch ({
            type: 'FILTER_PRICE',
            payload: price
        });
    }

    /**Filter by Kienyeji */
    const filterKienyeji = (kienyeji) => {
        dispatch ({
            type: 'FILTER_KIENYEJI',
            payload: kienyeji
        })
    }

    /**Filter by Grade */
    const filterGrade = (grade) => {
        dispatch ({
            type: 'FILTER_GRADE',
            payload: grade
        })
    }

    /**Add to Cart */
    const addToCart = (product) => {
        product.Incart = true;
        dispatch({
            type: 'ADD_TO_CART',
            payload: product
        })
    }


    /**Remove from Cart */
    const removeFromCart = (product) => {
        product.Incart = false;
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: product.id
        })
    }

    return (
        <ProductContext.Provider 
            value = {{
                products: state.products,
                featuredProducts: state.featuredProducts,
                sortedProducts: state.sortedProducts,
                maxPrice: state.maxPrice,
                minPrice: state.minPrice,
                cart:state.cart,
                filterProduct,
                filterPrice,
                filterKienyeji,
                filterGrade,
                addToCart,
                removeFromCart
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;