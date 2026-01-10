import { Box, Heading, HStack, Text } from "@chakra-ui/react";

const NavBarLogo = () => {
  return (
    <>
      <Box
        bg="black"
        height="60px"
        width="60px"
        borderRadius="50%"
        position="absolute"
        top={2}
        left={4}
      />
      <HStack gap={0} zIndex={10}>
        <Heading fontSize={48} color="white">
          24
        </Heading>
        <Text fontSize={24}>Shop</Text>
      </HStack>
    </>
  );
};

export default NavBarLogo;
