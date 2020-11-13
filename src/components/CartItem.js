import React, {useState} from 'react';

/**Import Global State */
import { useProduct } from '../context/product-context/productProvider';

const CartItem = ({product}) => {

    const {img,productName,price,description} = product

    const [quantity, setQuantity] = useState(1);

    const handleChange = (e) => setQuantity(e.target.value);

    const {removeFromCart} = useProduct();


    return (
        <>
        <tr>
            <td className="hidden-xs">
            <img src={img} 
                alt="Item"
                width='60px'
                height='60px'
            />
            </td>
            <td>
                <h5>
                    {productName}
                </h5>
                <p style={{
                    marginBottom:'0'
                     }}>
                    {description}
                </p>
            </td>
            <td className="hidden-xs">
                <h5>{price}</h5>
            </td>
            <td>
                <input className="form-control" 
                    type="number" 
                    value={quantity} 
                    onChange={handleChange} 
                    min="1"
                />
            </td>
            <td>
                <h5>{price * quantity}</h5>    
            </td>
            <td >
                <button style={{
                    border:'none', 
                    outline:'none',
                    background:'transparent'
                    }}
                    onClick={() => removeFromCart(product)}
                >
                <i className="fas fa-times"></i>
                </button>
            </td>
        </tr>  
         {/* <tr>
         <th>Cart Subtotal :</th>
         <td>£40.00</td>
     </tr>
     <tr>
         <th>Delivery Total :</th>
         <td>£2.00</td>
     </tr>
     <tr className="shop-Cart-totalprice">
         <th>Total :</th>
         <td>£42.00</td>
     </tr> */}
     </>   
    )
}

export default CartItem; 