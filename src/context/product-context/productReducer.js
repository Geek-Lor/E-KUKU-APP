const productReducer = (state, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }
        case 'FILTER_PRODUCT':
            return {
                ...state,
                sortedProducts: action.payload === 'All' ?
                                state.products :
                                state.products.filter(
                                    item => item.product === action.payload
                                )
            }
        case 'FILTER_PRICE':
            return {
                ...state,
                sortedProducts: state.sortedProducts.filter(
                    item => item.price <= action.payload
                )
            }
        case 'FILTER_GRADE':
            return {
                ...state,
                sortedProducts: action.payload === true ? 
                state.sortedProducts.filter(
                    item => item.type === 'grade' 
                ): state.sortedProducts
            }
        case 'FILTER_KIENYEJI':
            return {
                ...state,
                sortedProducts: action.payload === true ?
                state.sortedProducts.filter(
                    item => item.type === 'kienyeji'
                ) : state.sortedProducts
            } 
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...new Set([...state.cart, action.payload])] 
            }  
        case 'REMOVE_FROME_CART':
            return {
                ...state,
                cart: state.cart.filter(
                    item => item.id !== action.payload)
            } 
        case 'UPDATE_QUANTITY':
            return {
                ...state,
                cart: action.payload
            }                  
        default:
            return state;
    }
}

export default productReducer;