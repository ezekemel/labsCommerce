import ProductCard from "./ProductCard";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
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

export default function Catalog({ products, search }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {products.length > 0 ? (
        <Typography variant="h5" component="h4">
          Resultados para {search}
        </Typography>
      ) : (
        <Typography variant="h1" component="h2"></Typography>
      )}
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
