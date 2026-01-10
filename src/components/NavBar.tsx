import {
  Avatar,
  Flex,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import { MdOutlineShoppingCart } from "react-icons/md";
import NavBarLogo from "./NavBarLogo";
import { LuSearch } from "react-icons/lu";

const NavBar = () => {
  return (
    <>
      <Flex
        position="relative"
        padding={5}
        justifyContent="space-between"
        alignItems="center"
      >
        <NavBarLogo />
        {/* search */}
        <InputGroup startElement={<LuSearch />} maxW="80%">
          <Input placeholder="Search products" borderRadius="full" />
        </InputGroup>
        <HStack justifyContent="center">
          <IconButton aria-label="Search database" rounded="full" size="xs">
            <MdOutlineShoppingCart />
          </IconButton>
          <Avatar.Root size="xs">
            <Avatar.Fallback name="24Shop" />
            <Avatar.Image src="https://bit.ly/sage-adebayo" />
          </Avatar.Root>
        </HStack>
      </Flex>
    </>
  );
};

export default NavBar;
