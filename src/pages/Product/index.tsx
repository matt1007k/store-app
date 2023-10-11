import { useEffect, useState } from "react";
import { Header } from "../../layout";
import { ProductService } from "../../services/products.service";
import { useParams } from "react-router-dom";
import { Grid, styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TypeCharacter } from "../../components/Products/interface/character.interface";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  width: "370px",
  maxWidth: "100%",
});

type QuizParams = {
  id: string;
};

const ProductPage = () => {
  const { id } = useParams<QuizParams>();
  const [product, setProduct] = useState<TypeCharacter | null>(null);

  useEffect(() => {
    const getProductID = async (id: string | undefined) => {
      const product = await ProductService.getProductID(id);
      setProduct(product);
    };
    getProductID(id);
  }, [id]);

  return (
    <>
      <Header />
      <Grid container>
        <Grid container margin={3} spacing={2}>
          <Grid item sm={12} md={10}>
            <Typography variant="h2" component="h3">
              {product?.title}
            </Typography>
          </Grid>
          <Grid
            item
            sm={12}
            md={2}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="end"
          >
            <p>category: {product?.category}</p>
            <Button variant="contained">See More</Button>
          </Grid>
        </Grid>

        <Grid container spacing={3} margin={3}>
          <Grid
            item
            md={4}
            sm={12}
            display="flex"
            flexDirection="column"
            gap={2}
          >
            <Typography variant="h4">Price: ${product?.price}</Typography>
            <Typography>{product?.description}</Typography>
          </Grid>
          <Grid item md={4} sm={12}>
            <Img alt="imgdd" src={product?.image} />
          </Grid>
          <Grid item md={4} sm={12}>
            <Typography>rating: {product?.rating.rate}✌</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductPage;
