import {
  Badge,
  Box,
  Button,
  Card,
  HStack,
  Image,
  RatingGroup,
  Text,
} from "@chakra-ui/react";
import type Product from "@/entities/Product";
import { FaDollarSign, FaStar } from "react-icons/fa";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <>
      <Card.Root
        maxW="sm"
        overflow="hidden"
        _hover={{
          cursor: "pointer",
          transform: "scale(1.02)",
        }}
        transition="transform 0.15s ease-in-out"
      >
        <Image src={product.thumbnail} alt={product.images[0]} />
        <Card.Body gap="2">
          <Card.Title fontSize={16} fontWeight="400" maxW="300px">
            <Text truncate fontWeight="500">
              {product.title}
            </Text>
          </Card.Title>
          {/* <Card.Description>
           {product.description}
          </Card.Description> */}
          {/* <Text
            textStyle="2xl"
            fontWeight="medium"
            letterSpacing="tight"
            mt="2"
          >
            $450
          </Text> */}
          <HStack justifyContent="space-between" mb={2}>
            <Badge colorPalette="green">
              <HStack>
                <FaDollarSign color="red" />
                {product.price}
              </HStack>
            </Badge>
            <Badge colorPalette="red">
              <HStack>
                <FaStar color="red" /> {product.rating}
              </HStack>
            </Badge>
          </HStack>
          <HStack mb={2}>
            <Text fontSize={14}>Category:</Text>
            <Badge colorPalette="yellow">{product.category}</Badge>
          </HStack>

          <HStack>
            <Text fontSize={14}>Tags:</Text>
            {product.tags.map((t) => (
              
                <Badge colorPalette="navy" key={t}>
                  {t}
                </Badge>
               
            ))}
          </HStack>
        </Card.Body>
        <Card.Footer gap="2">
          <Button variant="solid">Add to Cart</Button>
          <Button
            variant="ghost"
            border="1px solid black"
            _dark={{
              border: "1px solid white",
            }}
          >
            Read More
          </Button>
        </Card.Footer>
      </Card.Root>
    </>
  );
};

export default ProductCard;
