import "./App.css";
import Searchbar from "./components/Searchbar.js";
import Catalog from "./components/Catalog";
import React, { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState([]);

  return (
    <div>
      <Searchbar setProducts={setProducts} setSearch={setSearch} />
      <Catalog products={products} search={search} />
    </div>
  );
}

export default App;
