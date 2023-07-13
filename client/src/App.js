import { useState } from "react"
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
// import { Words } from './Words';
import Data from "./Data.json"
import Filter from "./Components/Filter/Filter";

function App() {
  const [products, setProducts] = useState(Data)

  console.log(products);
  return (
    <div className="layout">
      <Header />
      <main className="wrapper">
        <Products className="products" products={products}/>
        <Filter/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
