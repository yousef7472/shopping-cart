import "../../css/Products/Products.css"

const Products = (props) => {
    
    return ( 
        <div className="products-wrapper">
            {props.products.map((product) => (
                <div key={product.id} className="product-item">
                    <img src={product.imageUrl} alt={product.title} />
                    <div className="desc">
                        <p>{product.title}</p>
                        <span>{product.price}</span>
                    </div>
                    <button>Add to cart</button>
                </div>
            ))}
        </div>
     );
}
 
export default Products;