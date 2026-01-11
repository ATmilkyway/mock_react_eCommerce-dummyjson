import useProducts from "@/hooks/useProducts";
import { SimpleGrid, Text } from "@chakra-ui/react";

const ProductsGrid = () => {
  const { data: products, isLoading, error } = useProducts();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  console.log(products);
  return (
    <>
      <SimpleGrid columns={3} gap={4}>
        {products?.products?.map((product) => (
          <Text key={product.id}>{product.title}</Text>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ProductsGrid;
