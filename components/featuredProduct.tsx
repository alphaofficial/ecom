import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import { IProduct } from "../types";

const FeaturedProduct: FC<{
  product: IProduct;
  recommendation?: IProduct[];
}> = ({ product }) => {
  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Heading fontWeight="bold" fontSize="3xl">
            {product.name}
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
          >
            Add to cart
          </Button>
        </Box>
      </Flex>
      <Box paddingY="10px" position="relative">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          width="100%"
          height="auto"
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
                {product.details.description}
              </Text>
            </Box>
          </Box>
          <Box>
            <Box>
              <Heading fontSize="xl">People also buy</Heading>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

FeaturedProduct.defaultProps = {
  product: {
    name: "Playstation 4",
    category: "games",
    price: 79.73,
    currency: "USD",
    image: {
      src: "https://images.unsplash.com/photo-1590845947376-2638caa89309?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      alt: "playstaion 4",
    },
    bestseller: false,
    featured: true,
    details: {
      dimensions: {
        width: 1020,
        height: 1020,
      },
      size: 1020,
      description:
        "commodo ipsum excepteur cillum pariatur proident officia non sint irure deserunt eiusmod sunt ullamco Lorem ullamco quis Lorem ea eiusmod",
    },
  },
};

export default FeaturedProduct;
