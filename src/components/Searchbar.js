import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
    display: "none",
    position: "relative",
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    textAlign: "center",
    margin: "auto",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.2),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.3),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar({ setProducts, setSearch }) {
  const classes = useStyles();

  const [query, setQuery] = useState("");

  function handleRequestSearch() {
    setSearch(query);
    axios.get("/search/?query=" + query).then((response) => {
      var productsArray = response.data;
      setProducts(productsArray);
    });
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#36486b" }}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Lite-MeLi
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Buscar..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button
              variant="outlined"
              color="inherit"
              onClick={handleRequestSearch}
            >
              <Typography style={{ color: "white" }}>Buscar</Typography>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
