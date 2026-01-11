import useProducts from "@/hooks/useProducts";
import { SimpleGrid, Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

const ProductsGrid = () => {
  const { data: products, isLoading, error } = useProducts();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  console.log(products);
  return (
    <>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 4,
          xl: 4,
          "2xl": 8,
        }}
        gap={4}
        padding={5}
      >
        {products?.products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default ProductsGrid;
