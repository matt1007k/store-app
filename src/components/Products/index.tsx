import { useEffect, useState } from "react";
import { ProductService } from "../../services/products.service";
import { MediaCard } from "..";
import { TypeCharacter } from "./interface/character.interface";

const Products = () => {
  const [products, setProducts] = useState<TypeCharacter[] | null>(null);

  useEffect(() => {
    const getAllsProducts = async () => {
      const productsAll = await ProductService.getAllProducts();
      setProducts(productsAll);
    };
    getAllsProducts();
  }, []);

  return (
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
    </>
  );
};

export default Products;
