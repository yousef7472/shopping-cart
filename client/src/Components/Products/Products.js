import { useState } from "react";
import "../../css/Products/Products.css"
import ProductsModal from "./ProductsMoadal";

const Products = (props) => {
    const [product, setProduct] = useState('')
    const openModal = (product) => {
        setProduct(product)
    }
    const closeModal = () => {
        setProduct(false)
    }
    return ( 
        <div className="products-wrapper">
            {props.products.map((product) => (
                <div key={product.id} className="product-item">
                    <a href="#" onClick={() => openModal(product)}>
                        <img src={product.imageUrl} alt={product.title} />
                        <div className="desc">
                            <p>{product.title}</p>
                            <span>$ {product.price}</span>
                        </div>
                    </a>
                    <button>Add to cart</button>
                </div>
            ))}
            <ProductsModal product={product} closeModal={closeModal}/>
        </div>
     );
}
 
export default Products;