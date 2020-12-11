import './App.css';
import Searchbar from "./components/Searchbar.js"
import ProductCard from "./components/ProductCard"
import Catalog from "./components/Catalog"
import products from "./data/products.json"


function App() {

  return (

    <div >
      <Searchbar/>
      <Catalog />
     
    </div>
  );
}

export default App;
