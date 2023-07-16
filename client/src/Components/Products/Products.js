/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import "../../css/Products/Products.css"
import ProductsModal from "./ProductsMoadal";
import { Bounce } from "react-reveal";

const Products = (props) => {
    const [product, setProduct] = useState('')
    const openModal = (product) => {
        setProduct(product)
    }
    const closeModal = () => {
        setProduct(false)
    }
    return ( 
        <Bounce left cascade>
        <div className="products-wrapper">
            {props.products.map(product => (
                <div key={product.id} className="product-item">
                    <a href="#" onClick={() => openModal(product)}>
                        <img src={product.imageUrl} alt={product.title} />
                        <div className="desc">
                            <p>{product.title}</p>
                            <span>$ {product.price}</span>
                        </div>
                    </a>
                    <button onClick={() => props.addToCart(product)}>Add to cart</button>
                </div>
            ))}
            <ProductsModal product={product} closeModal={closeModal}/>
        </div>
        </Bounce>
     );
}
 
export default Products;