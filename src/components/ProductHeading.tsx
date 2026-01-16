import useProductsQueryStore from "@/store/useProductsQueryStore";
import { Box, Heading } from "@chakra-ui/react";

const ProductHeading = () => {
  const category = useProductsQueryStore((s) => s.productQuery.category);
  const searchText = useProductsQueryStore((s) => s.productQuery.searchText);

  const title = searchText
    ? `"${searchText}"`
    : category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : "All";

  return (
    <Box
      mb={12}
      position="sticky"
      top="62px"
      zIndex={50}
      bg="white"
      _dark={{ bg: "black" }}
    >
      <Heading fontSize={48} fontWeight="bold" paddingY={5}>
        {title} Products
      </Heading>
    </Box>
  );
};

export default ProductHeading;
