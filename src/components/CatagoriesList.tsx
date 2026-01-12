import useCategories from "@/hooks/useCategories";
import { Box, Heading, Link } from "@chakra-ui/react";

const CatagoriesList = () => {
  const { data: catagories } = useCategories();
  console.log(catagories);
  return (
    <>
      <Box>
        <Heading fontSize={28} mb={5}>
          Categories
        </Heading>
        {catagories?.map((catagory) => (
          <Link key={catagory.slug} mb={2} display="block">
            {catagory.name}
          </Link>
        ))}
      </Box>
    </>
  );
};

export default CatagoriesList;
