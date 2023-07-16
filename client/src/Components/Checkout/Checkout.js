import { Zoom } from "react-reveal";
import "../../css/Checkout/Checkout.css"
import Input from "../Input/Input";
const Checkout = (props) => {
    return ( 
        <>
        {props.showForm && <div className="checkout-form">
                <span className="close-icon" onClick={() => props.setShowForm(false)}>&times;</span>
                <Zoom left>
                    <form onSubmit={props.submitOrder}>
                            <Input
                            label="Name"
                            type="text" 
                            name="name" 
                            onChange={props.handleChange}
                            />
                            <Input 
                            label="Email"
                            type="text" 
                            name="email" 
                            onChange={props.handleChange}
                            />
                        <div>
                            <button type="submit">Checkout</button>
                        </div>
                    </form>
                </Zoom>
            </div>
        }
        </>
     );
}
 
export default Checkout;