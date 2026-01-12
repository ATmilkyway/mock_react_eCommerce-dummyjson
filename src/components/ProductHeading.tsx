import { Box, Heading } from "@chakra-ui/react";
const ProductHeading = () => {
  return (
    <Box mb={12} position="sticky" top="62px" zIndex={50} bg="white" _dark={{bg:'black'}}>
      <Heading fontSize={48} fontWeight="bold" paddingY={5}>
        Products
      </Heading>
    </Box>
  );
};

export default ProductHeading;
