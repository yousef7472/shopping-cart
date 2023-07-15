import { useEffect, useState } from "react"
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
// import { Words } from './Words';
import Data from "./Data.json"
import Filter from "./Components/Filter/Filter";
import Cart from "./Components/Cart/Cart";

function App() {
  const [products, setProducts] = useState(Data)
  const [size, setSize] = useState("")
  const [sort, setSort] = useState("")
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || [])

  const handleFilterBySize = (e) => {
    setSize(e.target.value)
    if (e.target.value == "All") {
      setProducts(Data)
    }
    else {
      let productClone = [...products];
      // eslint-disable-next-line eqeqeq
      let newProducts = productClone.filter(p => p.sizes.indexOf(e.target.value) != -1);
      setProducts(newProducts)
    }
  }
  const handleFilterByOrder = (e) => {
    let order = e.target.value;
    setSort(order);
    let productClone = [...products];
    let newProducts = productClone.sort(function (a,b){
      if(order === "lowest") {
        return a.price - b.price
      } else if(order === "highest") {
        return b.price - a.price
      } else {
         return a.id < b.id ? 1 : -1
      }
    });
    setProducts(newProducts)
    console.log(products);

  }
  console.log(products);
  const addToCart = (product) => {
    const cartItemsClone = [...cartItems];
    let isProductExist = false;
    cartItemsClone.forEach(p => {
      if (p.id === product.id) {
        p.qty++;
        isProductExist = true;
      }
  })
  if (!isProductExist) {
    cartItemsClone.push({...product, qty: 1})
  }
  setCartItems(cartItemsClone)
  }
  const removeFromCart = (product) => {
    const cartItemsClone = [...cartItems]
    setCartItems(cartItemsClone.filter(p => p.id !== product.id))
  }
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
}, [cartItems])
  return (
    <div className="layout">
      <Header />
      <main className="wrapper">
        <Products className="products" products={products} addToCart={addToCart} cartItems={cartItems}/>
        <Filter 
        size={size}
        sort={sort}
        handleFilterBySize={handleFilterBySize}
        handleFilterByOrder={handleFilterByOrder}
        />
      </main>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
      <Footer/>
    </div>
  );
}

export default App;
