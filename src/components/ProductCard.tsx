import { Button, Card, Image, Text } from "@chakra-ui/react";
import type Product from "@/entities/Product";

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
        <Image src={product.images[0]} alt={product.images[0]} />
        <Card.Body gap="2">
          <Card.Title fontSize={16} fontWeight="400">
            {product.title}
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
        </Card.Body>
        <Card.Footer gap="2">
          <Button variant="solid">Buy now</Button>
          <Button variant="ghost">Add to cart</Button>
        </Card.Footer>
      </Card.Root>
    </>
  );
};

export default ProductCard;
