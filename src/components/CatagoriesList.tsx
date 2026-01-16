import useCategories from "@/hooks/useCategories";
import useProductsQueryStore from "@/store/useProductsQueryStore";
import { Box, Heading, Link } from "@chakra-ui/react";

const CatagoriesList = () => {
  const { data: catagories } = useCategories();
  const setCategory = useProductsQueryStore((s) => s.setCategory);
  const currentCategory = useProductsQueryStore((s) => s.productQuery.category);
  const reset = useProductsQueryStore((s) => s.reset);
  return (
    <>
      <Box>
        <Heading fontSize={28} mb={5}>
          Categories
        </Heading>
        <Link
          onClick={() => reset()}
          mb={2}
          fontWeight={!currentCategory ? "bold" : "normal"}
          transition="all 0.15s ease"
          fontSize={!currentCategory ? "18px" : ""}
        >
          All Products
        </Link>
        {catagories?.map((catagory) => (
          <Link
            key={catagory.slug}
            mb={2}
            display="block"
            onClick={() => setCategory(catagory.slug)}
            transition="all 0.15s ease"
            fontWeight={catagory.slug === currentCategory ? "bold" : ""}
            fontSize={catagory.slug === currentCategory ? "18px" : ""}
          >
            {catagory.name}
          </Link>
        ))}
      </Box>
    </>
  );
};

export default CatagoriesList;
