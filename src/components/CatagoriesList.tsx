import useCategories from "@/hooks/useCategories";
import useProductsQueryStore from "@/store/useProductsQueryStore";
import { Box, Heading, Link } from "@chakra-ui/react";

const CatagoriesList = () => {
  const { data: catagories } = useCategories();
  const setCategory = useProductsQueryStore((s) => s.setCategory);
  const currentcategory = useProductsQueryStore((s) => s.productQuery.category);
  const reset = useProductsQueryStore((s) => s.reset);
  console.log(catagories);
  return (
    <>
      <Box>
        <Heading fontSize={28} mb={5}>
          Categories
        </Heading>
        <Link onClick={() => reset()} mb={2}>
          All Products
        </Link>
        {catagories?.map((catagory) => (
          <Link
            key={catagory.slug}
            mb={2}
            display="block"
            onClick={() => {
              setCategory(catagory.slug);

              console.log("catagory.name:", catagory.name);
              console.log("currentcategory:", currentcategory);
            }}
            transition='all 0.15s ease'
            fontWeight={catagory.slug === currentcategory ? "bold" : ""}
            fontSize={catagory.slug === currentcategory ? "18px" : ""}
          >
            {catagory.name}
          </Link>
        ))}
      </Box>
    </>
  );
};

export default CatagoriesList;
