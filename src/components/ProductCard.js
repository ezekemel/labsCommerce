import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';



const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    border: "black .5px solid",
    display: "flex",
    margin: "18px auto",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
   
  },
  media: {
    media: {
        minHeight: 150,
        maxHeight: 150,
      },
  },
});

export default function ({ product }) {
  const { img, title, id, stock , price, ticker, link} = product;


  var name = title;
  const classes = useStyles();


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
            <Typography gutterBottom variant="h6" component="h3">
              {name}
            </Typography>
            <Typography gutterBottom variant="h6" component="h3">
              {}
            </Typography>
            <Typography gutterBottom variant="h7" component="h3" marginTop="100px">
              {price} {ticker} - {stock === 0 ? "SIN STOCK" : stock === 1 ? "1 Disponible" : stock + " Disponibles"}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button color="primary">
          <Link href={link} target="_blank">
            Ver más
          </Link>
        </Button>
        </CardActions>
      </Card>
    </div>
  
  );
}