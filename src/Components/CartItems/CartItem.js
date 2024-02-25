import './CartItem.css'
import { FaTrash } from "react-icons/fa6";
import { removeCart } from '../../Store/AddToCart';
import { useSelector, useDispatch } from 'react-redux';

const CartItem = () => {
    const dispatch = useDispatch()
    const cartProduct = useSelector((state) => state.addToCart)
    console.log(cartProduct.length)

    const removeCartItemsHandler = (productSize) => {
        dispatch(removeCart(productSize))
    }
    let total = 0;
    const calculateTotalPrice = () => {

        cartProduct.forEach((data) => {
            total += data.price;
        });
        return total;
    };
    return (
        <>

            <div id="cart-container">
                <div id="cart-items-container">
                    {

                        cartProduct && cartProduct.map((data) => (

                            <div id="cart-items" key={data.id}>
                                <div id="cart-image">
                                    <input type="checkbox" id='items-include' checked />
                                    <img src={data.image} alt="" />
                                </div>
                                <div id="cart-details">
                                    <div>
                                        <div id='cart-title'><b>title:</b> {data.name}</div>
                                        <div id='cart-quantity'><b>qty:</b>  {data.quantity}</div>
                                        <div id='cart-size'><b>size:</b> {data.size}</div>
                                    </div>
                                    <div id="cart-price">
                                        <span>price: {data.price}$</span>
                                        <span id='cart-delete' onClick={() => removeCartItemsHandler(data.name)}><FaTrash /></span>
                                    </div>
                                </div>
                            </div>

                        ))}
                </div>

                <div id="total-cart-items">
                    <div className="order-summary-header">
                        <span>order summary</span>
                    </div>
                    <div className="order-summary-row">
                        <div className='order-summary-label'>subtotal {`(items ${cartProduct.length})`}</div>
                        <div className='order-summary-value'>Rs {calculateTotalPrice()}</div>
                    </div>
                    <div className="order-summary-row">
                        <div className='order-summary-label'>shipping fee</div>
                        <div className='order-summary-value'>Rs 100</div>
                    </div>
                    <div className="order-summary-row">
                        <div className='order-summary-label'>total amount</div>
                        <div className='order-summary-value'>Rs {Math.floor(total+100)}</div>
                    </div>
                    <div className="palce-order">
                        <button>proceed to checkout </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CartItem