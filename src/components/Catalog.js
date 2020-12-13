import ProductCard from "./ProductCard";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React, { useState, useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

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

export default function Catalog({ products, search, buscador }) {
  const classes = useStyles();

  const [list, setList] = useState(products);
  const [value, setValue] = useState("notOrdered");
  const [filter, setFilter] = useState("notFiltered");

  useEffect(() => {
    setList(products);
    console.log(list);
  }, [products]);

  const lowHigh = [...products].sort((a, b) => a.price - b.price);
  const highLow = [...lowHigh].reverse();
  const newProd = [...list].filter((e) => e.condition === "new");
  const usedProd = [...list].filter((e) => e.condition === "used");

  function handleChange(e) {
    setValue(e.target.value);
    if (e.target.value === "highLow") {
      setList(highLow);
    } else {
      setList(lowHigh);
    }
  }

  function handleFilterChange(e) {
    setFilter(e.target.value);
    if (e.target.value === "newProd") {
      setList(newProd);
    } else {
      setList(usedProd);
    }
  }

  return (
    <div className={classes.root}>
      {list.length > 0 ? (
        <div>
          <Typography variant="h5" component="h4">
            Resultados para {search}
          </Typography>
          <div className={classes.paper}>
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="Ordenar por"
                name="position"
                defaultValue="top"
                value={value}
              >
                <FormControlLabel
                  value="highLow"
                  control={<Radio color="primary" />}
                  label="Precio mayor a menor"
                  labelPlacement="top"
                  onChange={handleChange}
                />
                <FormControlLabel
                  value="lowHigh"
                  control={<Radio color="primary" />}
                  label="Precio menor a mayor"
                  labelPlacement="top"
                  onChange={handleChange}
                />
              </RadioGroup>
            </FormControl>

            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="Filtrar por"
                name="position"
                defaultValue="top"
                value={filter}
              >
                <FormControlLabel
                  value="newProd"
                  control={<Radio color="primary" />}
                  label="Nuevo"
                  labelPlacement="top"
                  onChange={handleFilterChange}
                />
                <FormControlLabel
                  value="usedProd"
                  control={<Radio color="primary" />}
                  label="Usado"
                  labelPlacement="top"
                  onChange={handleFilterChange}
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      ) : (
        <Typography variant="h1" component="h2"></Typography>
      )}
      <Grid container>
        {list.length > 0 ? (
          list.map((product) => (
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
        ) : buscador === 0 ? (
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
        ) : (
          <React.Fragment>
            <Grid item>
              <Typography>No hay resultados</Typography>
            </Grid>
          </React.Fragment>
        )}
      </Grid>
    </div>
  );
}
