import ProductCard from './ProductCard';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Catalog() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    axios.get("/search?q=iphone").then(response => {
      var productsArray = response.data;
      setProducts(productsArray);
    })
  });
 

  return (
    <div className={classes.root}>
      <Grid container >
      { products.length > 0 ? products.map((product) => (            
              <Grid item lg={3} >
                <ProductCard
                  title={product.title}
                  price={product.price}
                  ticker={product.ticker}                 
                  stock={product.stock}
                  img={product.img}
                  condition = {product.condition}
                  link={product.link}
                />
              </Grid> )):(
            <React.Fragment>
              <Grid item>
                No products
              </Grid>
            </React.Fragment>
          ) }
      </Grid>
    </div>
  );
}