import { Button, Card, Image, RatingGroup } from "@chakra-ui/react";
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
        <Image src={product.thumbnail} alt={product.images[0]} />
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
          <RatingGroup.Root
            allowHalf
            count={5}
            value={product.rating}
            size="sm"
            colorPalette="red"
          >
            <RatingGroup.HiddenInput />
            <RatingGroup.Control />
          </RatingGroup.Root>
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
