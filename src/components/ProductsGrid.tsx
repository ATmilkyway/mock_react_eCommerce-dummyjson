import useProducts from "@/hooks/useProducts";
import { SimpleGrid, Spinner, Box, Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import ProductHeading from "./ProductHeading";
import CardSkeletons from "./CardSkeletons";
import InfiniteScroll from "react-infinite-scroll-component";

const ProductsGrid = () => {
  const {
    data,
    isLoading,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useProducts();

  const skeletonNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

  const allProducts = data?.pages.flatMap((page) => page.products) ?? [];

  if (error) return <Text color="red.500">Error: {error.message}</Text>;

  return (
    <>
      <ProductHeading />

      <Box
        id="scrollableDiv"
        height="calc(100vh - 120px)"
        overflowY="auto"
        overflowX="hidden"
      >
        <InfiniteScroll
          dataLength={allProducts.length}
          next={fetchNextPage}
          hasMore={!!hasNextPage}
          loader={
            <Box textAlign="center" py={4}>
              <Spinner size="lg" />
            </Box>
          }
          endMessage={
            <Box textAlign="center" py={4}>
              <Text color="gray.500">All products loaded</Text>
            </Box>
          }
          scrollableTarget="scrollableDiv"
          style={{ overflow: "visible" }}
        >
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
              ? skeletonNumbers.map((s) => <CardSkeletons key={s} />)
              : allProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}

            {isFetchingNextPage &&
              skeletonNumbers.map((s) => <CardSkeletons key={`next-${s}`} />)}
          </SimpleGrid>
        </InfiniteScroll>
      </Box>
    </>
  );
};

export default ProductsGrid;
