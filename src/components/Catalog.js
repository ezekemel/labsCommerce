import ProductCard from "./ProductCard";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import React, { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  image: {
    maxWidth: "100%",
  },
}));

export default function Catalog({ products }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        {products.length > 0 ? (
          products.map((product) => (
            <Grid item lg={3}>
              <ProductCard
                title={product.title}
                price={product.price}
                ticker={product.ticker}
                stock={product.stock}
                img={product.img}
                condition={product.condition}
                link={product.link}
              />
            </Grid>
          ))
        ) : (
          <React.Fragment>
            <Grid item>
              <img
                className={classes.image}
                src="/tuBuscador.png"
                alt="Buscador"
              />
              ;
            </Grid>
          </React.Fragment>
        )}
      </Grid>
    </div>
  );
}
