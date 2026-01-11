import { GridItem, SimpleGrid } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ProductsGrid from "./components/ProductsGrid";

const App = () => {
  return (
    <SimpleGrid
      templateAreas={{
        base: `"nav"
               "main"`,
        md: `"nav nav"
               "side main"`,
      }}
      templateColumns={{
        base: "1fr",
        md: "200px 1fr",
      }}
      height="100dvh"
      // bg="gray.800"
      overflow="auto"
      position="relative"
    >
      <GridItem area="nav" position="sticky" top="0" bg="white" zIndex={100}>
        <NavBar />
      </GridItem>
      <GridItem
        area="side"
        bg="blue.200"
        display={{ base: "none", md: "block" }}
      >
        SideBar
      </GridItem>
      <GridItem area="main" bg="green.100">
        <ProductsGrid />
      </GridItem>
    </SimpleGrid>
  );
};

export default App;
