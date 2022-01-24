import { Box, Divider, Flex, IconButton, Text } from "@chakra-ui/react";
import { useStoreActions, useStoreState } from "easy-peasy";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from "./cart";

const Navbar = () => {
  const cartItems = useStoreState((store: any) => store.cartItems);
  const openCart = useStoreActions((store: any) => store.openCart);

  return (
    <Box marginBottom="10px" paddingY="24px" position="relative">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        paddingBottom="10px"
      >
        <Box>
          <Image
            src="/images/logo.svg"
            height={25.22}
            width={159}
            alt="bejamas logo"
          />
        </Box>
        <Box>
          <Box position="relative">
            <IconButton
              onClick={openCart}
              variant="ghost"
              aria-label="shopping cart button"
            >
              <AiOutlineShoppingCart size={40} />
            </IconButton>

            <Box
              position="absolute"
              bg="black"
              width="15px"
              height="15px"
              right="-10px"
              bottom="-5px"
            >
              <Text fontSize="x-small" color="white" textAlign="center">
                {cartItems.length}
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>
      <Divider color="#E4E4E4" />
    </Box>
  );
};

export default Navbar;
