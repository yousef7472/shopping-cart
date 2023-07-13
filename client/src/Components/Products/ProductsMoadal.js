import Modal from "react-modal" 
const ProductsModal = (props) => {
    const {product, closeModal} = props
    return ( 
        <Modal isOpen={product} onRequestClose={closeModal}>
            <span className="close-icon" onClick={closeModal}>&times;</span>
            <div className="product-info">
                <img src={product.imageUrl} alt="product.title" srcset="" />
                <p>{product.title}</p>
                <p>{product.desc}</p>
                <p>{product.price}</p>
            </div>
        </Modal>
     );
}
 
export default ProductsModal;