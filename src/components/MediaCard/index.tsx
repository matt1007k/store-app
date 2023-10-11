import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

type CardProps = {
  image: string;
  title: string;
  price: number;
  id: number;
};

const MediaCard: React.FC<CardProps> = ({ image, title, price, id }) => {
  return (
    <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center">
      <Card
        sx={{
          maxWidth: 345,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <CardMedia sx={{ height: 240 }} image={image} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${price}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/product/${id}`}>
            <Button variant="outlined" size="small">
              Learn More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default MediaCard;
