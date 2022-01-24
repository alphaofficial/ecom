import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { MdClose } from "react-icons/md";
import { IProduct } from "../types";

const Cart = () => {
  const cartItems = useStoreState((store: any) => store.cartItems);
  const isCartOpen = useStoreState((store: any) => store.isCartOpen);
  const hideCart = useStoreActions((store: any) => store.hideCart);
  const clearCart = useStoreActions((store: any) => store.clearCart);

  return (
    <Box
      width={{ base: "100%", md: "443px" }}
      minHeight="200px"
      border="4px solid #E4E4E4"
      boxSizing="border-box"
      bg="white"
      sx={{
        display: isCartOpen ? "block" : "none",
      }}
    >
      <Box paddingX="10px" textAlign="right">
        <Box>
          <IconButton
            variant="ghost"
            aria-label="close cart"
            _hover={{ bg: "transparent" }}
            onClick={hideCart}
          >
            <MdClose size={25} />
          </IconButton>
        </Box>
      </Box>
      <Box paddingX="20px" paddingY="10px">
        {cartItems.map((item: IProduct, index: number) => (
          <Box key={index} paddingY="5px">
            <Flex justifyContent="space-between" alignItems="center">
              <Box>
                <Heading fontSize="md">{item.name}</Heading>
                <Text fontSize="lg" color="gray.500">
                  {item.currency} {item.price}
                </Text>
              </Box>
              <Box width="30%">
                <Image src={item.image.src} alt={item.image.alt} />
              </Box>
            </Flex>
          </Box>
        ))}
        <Box marginTop="10px">
          <Divider color="#C2C2C2" />
        </Box>
      </Box>
      <Box paddingX="20px" paddingY="10px">
        <Button
          bg="white"
          border="3px solid #000000"
          textTransform="uppercase"
          borderRadius="0px"
          width="100%"
          onClick={clearCart}
        >
          Clear
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;
