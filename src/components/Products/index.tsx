import { useEffect, useState, useMemo, useRef, useCallback } from "react";
import { ProductService } from "../../services/products.service";
import { MediaCard } from "..";
import { TypeCharacter } from "./interface/character.interface";
import { useObserver } from '../../utils'
import { Grid } from "@mui/material";


const Products = () => {
  const [products, setProducts] = useState<TypeCharacter[] | null>(null);
  const boxWrapper = useRef(null)
  // const [ isObserverChild ] = useObserver({ rootMargin : '30px', boxElement : boxWrapper?.current })
  const [ isLoading, setIsLoading ] = useState(false)
  // useEffect(() => {
  //   const getAllsProducts = async () => {
  //     const productsAll = await ProductService.getAllProducts();
  //     setProducts(productsAll);
  //   };
  //   getAllsProducts();
  // }, []);

  const [ limitProduct, setLimitProduct ] = useState(4)

  useMemo(async () => {
    try {
      setIsLoading(true)
      // await new Promise((resolve) => setTimeout(() => {
      //   resolve(true)
      // }, 1000))

      const productsAll = await ProductService.getAllProducts({ limit : limitProduct});
      setProducts(productsAll);  
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }
  , [limitProduct])

  // useEffect(() => {
  //   if (isObserverChild) {
  //     setLimitProduct(prevlimitProduct => prevlimitProduct + 4)
  //   }
  //   console.log(isObserverChild)
  // }, [isObserverChild])


  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect);
    if (boxWrapper && boxWrapper.current) {
      observer.observe(boxWrapper.current);
    }

    return () => {
      observer.disconnect()
    }
  }, [])
  
  const handleIntersect = ( entries: IntersectionObserverEntry[] ) => {
    if (entries[0].isIntersecting) {
      setLimitProduct(prevlimitProduct => prevlimitProduct + 4)
    }
    console.log(entries[0].isIntersecting)
  }

  return (
    <Grid container spacing={2} >
      {isLoading ? <div>Loading...</div> : (
        <>
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
          <div ref = {boxWrapper}>
            <p>ladfasdf asdfa  adfafasf a fdf</p>
          </div>
        </>
      )}

    </Grid>

  );
};

export default Products;
