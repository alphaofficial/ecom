import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useStoreActions } from "easy-peasy";
import { FC } from "react";
import { IProduct } from "../types";

type ProductItemProps = {
  product: IProduct;
};

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const addToCart = useStoreActions((store: any) => store.addToCart);
  const openCart = useStoreActions((store: any) => store.openCart);

  const onAddToCart = (product: IProduct) => {
    addToCart(product);
    openCart();
  };
  return (
    <Box>
      <Box position="relative" w={["100%", 282]} height={[402, 398]}>
        <Box
          position="absolute"
          bg="white"
          paddingX="10px"
          hidden={product.bestseller}
        >
          <Text fontSize="small">Best seller</Text>
        </Box>
        <Box
          w={["100%", 282]}
          height={[402, 398]}
          backgroundImage={product.image.src}
          backgroundSize="cover"
          aria-label={product.image.alt}
        ></Box>
        <Box position="absolute" left="0" bottom="0px" width="100%">
          <Button
            bg="black"
            color="white"
            sx={{
              "&:hover": {
                bg: "black",
              },
            }}
            width="100%"
            borderRadius="0px"
            onClick={() => onAddToCart(product)}
          >
            Add to cart
          </Button>
        </Box>
      </Box>
      <Box marginTop="10px">
        <Heading color="gray.500" fontSize="md" textTransform="capitalize">
          {product.category}
        </Heading>
        <Heading fontSize="xl">{product.name}</Heading>
        <Text color="gray.400">{`${product.currency} ${product.price}`}</Text>
      </Box>
    </Box>
  );
};

export default ProductItem;
