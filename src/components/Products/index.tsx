import { CircularProgress, Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { MediaCard } from "..";
import { ProductService } from "../../services/products.service";
import { useIntersectionObserver } from "../../utils";
import { TypeCharacter } from "./interface/character.interface";
import { InfinityLoadingFooter } from "./styles";

const Products = () => {
  const [products, setProducts] = useState<TypeCharacter[] | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const [isLoading, setIsLoading] = useState(false);

  const entry = useIntersectionObserver(ref, { threshold: 0.0 });
  const isVisible = !!entry?.isIntersecting;

  const [limitProduct, setLimitProduct] = useState(4);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(true);
        }, 1000)
      );

      const productsAll = await ProductService.getAllProducts({
        limit: limitProduct,
      });
      setProducts(productsAll);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [limitProduct]);

  useEffect(() => {
    if (isVisible) {
      console.log("isVisible");

      setLimitProduct((prevlimitProduct) => prevlimitProduct + 4);
    }
  }, [isVisible]);

  return (
    <Grid container spacing={2}>
      {products?.length !== 0
        ? products?.map((product) => (
            <MediaCard
              image={product.image}
              title={product.title}
              price={product.price}
              id={product.id}
              key={product.id}
            />
          ))
        : ""}
      <InfinityLoadingFooter ref={ref}>
        {isLoading ? <CircularProgress /> : null}
      </InfinityLoadingFooter>
    </Grid>
  );
};

export default Products;
