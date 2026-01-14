import useProductsQueryStore from "@/store/useProductsQueryStore";
import { Box, Heading } from "@chakra-ui/react";
const ProductHeading = () => {
  const category = useProductsQueryStore((c) => c.productQuery.category);
  const formattedCategory = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : "";
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
        {category ? formattedCategory : "All"} Products
      </Heading>
    </Box>
  );
};

export default ProductHeading;
