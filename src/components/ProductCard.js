import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    border: "black .5px solid",
    display: "flex",
    margin: "20px auto",
    maxHeight: 400,

    alignItems: "center",
    flexDirection: "column",
  },
  media: {
    media: {
      height: 140,
    },
  },
});

export default function ProductCard({
  title,
  id,
  stock,
  condition,
  price,
  ticker,
  img,
  link,
}) {
  const classes = useStyles();
  if (condition === "new") {
    condition = "nuevo";
  } else {
    condition = "usado";
  }

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Img producto"
            height="140"
            image={img}
          />
          <CardMedia src={img} alt="imagen de producto" />
          <CardContent>
            <Typography noWrap gutterBottom variant="h6" component="h3">
              {title}
            </Typography>
            <Typography gutterBottom variant="h6" component="h3">
              {condition}
            </Typography>
            <Typography gutterBottom variant="h6" component="h3">
              {price} {ticker} - {stock === 0 ? "0 stock" : "Disponible"}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button color="primary">
            <Link href={link} target="_blank">
              Comprar
            </Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
