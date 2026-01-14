import { Card, HStack, Skeleton, Box } from "@chakra-ui/react";
 
const CardSkeletons = () => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      {/* 1. Image Skeleton */}
      <Skeleton height="200px" width="100%" />

      <Card.Body gap="3">
        {/* 2. Title Skeleton */}
        <Skeleton height="20px" width="80%" />

        {/* 3. Badges/Stats Row */}
        <HStack justifyContent="space-between" mb={2}>
          <Skeleton height="25px" width="60px" borderRadius="full" />
          <Skeleton height="25px" width="60px" borderRadius="full" />
        </HStack>

        {/* 4. Category & Tags Row */}
        <Box spaceY={2}>
          <Skeleton height="15px" width="40%" />
          <HStack>
            <Skeleton height="15px" width="30px" />
            <Skeleton height="15px" width="30px" />
            <Skeleton height="15px" width="30px" />
          </HStack>
        </Box>
      </Card.Body>

      <Card.Footer gap="2">
        {/* 5. Button Skeletons */}
        <Skeleton height="35px" width="100px" />
        <Skeleton height="35px" width="100px" />
      </Card.Footer>
    </Card.Root>
  );
};

export default CardSkeletons;
