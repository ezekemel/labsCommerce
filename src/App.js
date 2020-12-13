import "./App.css";
import Searchbar from "./components/Searchbar.js";
import Catalog from "./components/Catalog";
import React, { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState([]);
  const [buscador, setBuscador] = useState(0);

  return (
    <div>
      <Searchbar
        setProducts={setProducts}
        setSearch={setSearch}
        setBuscador={setBuscador}
      />
      <Catalog products={products} search={search} buscador={buscador} />
    </div>
  );
}

export default App;
