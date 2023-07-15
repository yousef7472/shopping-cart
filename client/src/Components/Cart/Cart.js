import "../../css/Cart/Cart.css"
const Cart = (props) => {
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
        </div>
     );
}
 
export default Cart;