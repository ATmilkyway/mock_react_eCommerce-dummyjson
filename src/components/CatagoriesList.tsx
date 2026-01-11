import useCategories from "@/hooks/useCategories";
import { Text } from "@chakra-ui/react";

const CatagoriesList = () => {
  const { data: catagories } = useCategories();
  console.log(catagories);
  return (
    <>
      {catagories?.map((catagory) => (
        <Text key={catagory.slug}>{catagory.name}</Text>
      ))}
    </>
  );
};

export default CatagoriesList;
