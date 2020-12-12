import './App.css';
import Searchbar from "./components/Searchbar.js"
import Catalog from "./components/Catalog"
import React, { useState, useEffect } from 'react';


function App() {

  const [products, setProducts] = useState([]);

  return (

    <div >
      <Searchbar setProducts={setProducts}/>
      <Catalog products={products}/>
     
    </div>
  );
}

export default App;
