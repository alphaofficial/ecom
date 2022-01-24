import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useStoreActions } from "easy-peasy";
import { FC } from "react";
import { IProduct } from "../types";

const FeaturedProduct: FC<{ product: IProduct }> = ({ product }) => {
  const addToCart = useStoreActions((store: any) => store.addToCart);
  const openCart = useStoreActions((store: any) => store.openCart);

  const onAddToCart = (product: IProduct) => {
    addToCart(product);
    openCart();
  };

  return (
    <Box marginBottom="80px">
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Heading fontWeight="bold" fontSize="3xl">
            {product?.name}
          </Heading>
        </Box>
        <Box>
          <Button
            type="button"
            bg="black"
            color="white"
            size="sm"
            borderRadius="0"
            paddingX="39px"
            paddingY="13px"
            textTransform="uppercase"
            _hover={{
              bg: "white",
              borderColor: "black",
              borderWidth: "1px",
              color: "black",
              transition: "all 0.2s",
            }}
            onClick={() => onAddToCart(product)}
          >
            Add to cart
          </Button>
        </Box>
      </Flex>
      <Box paddingY="10px" position="relative">
        <Box
          width="100%"
          height="500px"
          backgroundImage={product.image.src}
          backgroundSize="cover"
        />
        <Box
          position="absolute"
          left="0"
          bottom="10px"
          bg="white"
          paddingY="10px"
          paddingX="56px"
        >
          <Text color="black" fontWeight="bold">
            Photo of the day
          </Text>
        </Box>
      </Box>

      <Box marginTop="20px">
        <Flex justifyContent="space-between" width="100%">
          <Box width="40%">
            <Box>
              <Heading fontSize="2xl">{`About the ${product.name}`}</Heading>
            </Box>
            <Box marginTop="10px">
              <Heading
                fontSize="lg"
                color="gray.600"
                textTransform="capitalize"
              >
                {product.category}
              </Heading>
            </Box>
            <Box>
              <Text fontSize="normal" color="gray.600">
                {product?.details?.description}
              </Text>
            </Box>
          </Box>
          <Box>
            <Box>
              <Heading fontSize="xl">People also buy</Heading>
            </Box>

            <Box></Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default FeaturedProduct;
