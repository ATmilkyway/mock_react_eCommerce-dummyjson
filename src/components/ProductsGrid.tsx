import useProducts from "@/hooks/useProducts";
import { SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import ProductHeading from "./ProductHeading";
import CardSkeletons from "./CardSkeletons";

const ProductsGrid = () => {
  const { data: products, isLoading, error } = useProducts();
  const skeletonNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
  if (error) return <p>{error.message}</p>;
  return (
    <>
      <ProductHeading />
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 4,
          xl: 4,
          "2xl": 6,
        }}
        gap={4}
      >
        {isLoading
          ? skeletonNumbers.map(() => <CardSkeletons />)
          : products?.products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </SimpleGrid>
    </>
  );
};

export default ProductsGrid;
