import './App.css';
import Searchbar from "./components/Searchbar.js"
import ProductCard from "./components/ProductCard"
import product from "./data/product.json"

function App() {
  return (

    <div >
      <Searchbar/>
      <ProductCard product={product}/>
    </div>
  );
}

export default App;
