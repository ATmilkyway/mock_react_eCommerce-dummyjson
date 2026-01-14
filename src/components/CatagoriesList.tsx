import useCategories from "@/hooks/useCategories";
import useProductsQueryStore from "@/store/useProductsQueryStore";
import { Box, Heading, Link } from "@chakra-ui/react";

const CatagoriesList = () => {
  const { data: catagories } = useCategories();
  const setCategory = useProductsQueryStore((s) => s.setCategory);
   return (
    <>
      <Box>
        <Heading fontSize={28} mb={5}>
          Categories
        </Heading>
        {catagories?.map((catagory) => (
          <Link
            key={catagory.slug}
            mb={2}
            display="block"
            onClick={() => setCategory(catagory.slug)}
          >
            {catagory.name}
          </Link>
        ))}
      </Box>
    </>
  );
};

export default CatagoriesList;
