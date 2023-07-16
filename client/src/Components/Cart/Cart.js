import { useState } from "react";
import "../../css/Cart/Cart.css"
import Checkout from "../Checkout/Checkout";
const Cart = (props) => {
    const [showForm, setShowForm] = useState(false)
    const [value, setValue] = useState("")

    const submitOrder = (e) => {
        e.preventDefault();
        const order = {
            name: value.name,
            email: value.email
        }
        console.log(order);
    }
    const handleChange = (e) => {
        setValue((prevState) => ({...prevState, [e.target.name] : e.target.value}))
    }
    return ( 
        <div className="cart-wrapper">
            <h4 className="cart-title">
                {props.cartItems.length === 0 ? "Cart is Empty" : 
                 <p>There is {props.cartItems.length} Products in Cart</p>
                }
            </h4>
            <div className="cart-items">
                    {props.cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.imageUrl} alt=""/>
                            <div className="cart-info">
                                <p>title: {item.title}</p>
                                <p>qty: {item.qty}</p>
                                <p>price: $ {item.price}</p>
                            </div>
                            <button onClick={() => props.removeFromCart(item)}>Remove</button>   
                        </div>
                    ))}
            </div>
            {props.cartItems.length !== 0 && (
                <div className="cart-footer">
                    <div className="total">Total Price is: ${
                        props.cartItems.reduce((acc, p) => {
                            return acc + p.price
                        }, 0)
                    }</div>
                    <button onClick={() => setShowForm(true)}>select product</button>
                </div>
            )}
            {/* checkout form */}
            <Checkout
                showForm={showForm}
                submitOrder={submitOrder}
                setShowForm={setShowForm}
                handleChange={handleChange}
            />
            
        </div>
     );
}
 
export default Cart;