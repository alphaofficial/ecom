import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useStoreActions } from "easy-peasy";
import { FC } from "react";
import Image from "next/image";
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
        <Box
          display={{
            base: "none",
            md: "block",
          }}
        >
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
      <Box marginTop="20px" paddingY="10px" position="relative">
        <Box width="100%" height="auto">
          <Image
            layout="responsive"
            src={product.image.src}
            alt={product.image.alt}
            width={800}
            height={500}
          />
        </Box>
        <Box
          position="absolute"
          left="0"
          bottom="0px"
          bg="white"
          paddingY="10px"
          paddingX="56px"
        >
          <Text color="black" fontWeight="bold">
            Photo of the day
          </Text>
        </Box>
      </Box>
      <Box
        display={{
          base: "block",
          md: "none",
        }}
      >
        <Button
          type="button"
          bg="black"
          color="white"
          size="lg"
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
          width="100%"
          marginTop="10px"
          onClick={() => onAddToCart(product)}
        >
          Add to cart
        </Button>
      </Box>
      <Box marginTop="20px">
        <Flex
          justifyContent="space-between"
          width="100%"
          flexDirection={{ base: "column", md: "row", lg: "row" }}
        >
          <Box
            width={{ base: "100%", sm: "100%", md: "40%", lg: "40%" }}
            marginBottom="20px"
          >
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
            <Box
              textAlign={{ base: "left", sm: "left", md: "right", lg: "right" }}
              marginBottom="20px"
            >
              <Heading fontSize="xl">People also buy</Heading>
            </Box>

            <Box marginBottom="20px">
              <Grid templateColumns={"repeat(3, 1fr)"} gap={2}>
                {product.details?.recommendations?.map((recommendation) => (
                  <GridItem>
                    <Box
                      w={[97, 117]}
                      h={[122, 147]}
                      backgroundImage={recommendation.src}
                      backgroundSize="cover"
                      aria-label={recommendation.alt}
                    ></Box>
                  </GridItem>
                ))}
              </Grid>
            </Box>
            <Box
              textAlign={{ base: "left", sm: "left", md: "right", lg: "right" }}
            >
              <Heading fontSize="xl">Details</Heading>
            </Box>
            <Box
              textAlign={{ base: "left", sm: "left", md: "right", lg: "right" }}
            >
              <Text fontSize="small" color="#656565" marginY="5px">
                Size:{" "}
                {`${product.details?.dimensions?.width} x ${product.details?.dimensions?.height} pixels`}
              </Text>
              <Text fontSize="small" color="#656565" marginY="5px">
                Size: {`${product.details?.size} mb`}
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default FeaturedProduct;
