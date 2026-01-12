import { GridItem, SimpleGrid } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ProductsGrid from "./components/ProductsGrid";
import CatagoriesList from "./components/CatagoriesList";

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
      <GridItem
        area="nav"
        position="sticky"
        top="0"
        _dark={{ bg: "black" }}
        bg="white"
        zIndex={100}
      >
        <NavBar />
      </GridItem>
      <GridItem
        area="side"
        display={{ base: "none", md: "block" }}
        position="sticky"
        top="100px"
        height="80dvh"
        overflowY="scroll"
        paddingX={5}
        paddingBottom={5}
        paddingTop={5}
        scrollbarWidth="thin"
      >
        <CatagoriesList />
      </GridItem>
      <GridItem area="main" padding={5} position="relative">
        <ProductsGrid />
      </GridItem>
    </SimpleGrid>
  );
};

export default App;
