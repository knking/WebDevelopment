import products from "./products.json";
import "./App2.css";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App2() {
  return (
    <div className="App">
       <Cart />
      <div className="main-container">
      <div className="products">
        {products.map((product) => (
          <Product {...product} />
        ))}
      </div>
      </div>
      
    </div>
  );
}

export default App2;
