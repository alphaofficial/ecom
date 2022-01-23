import { Box, Divider, Flex, IconButton, Text } from "@chakra-ui/react";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <Box marginBottom="10px" paddingY="24px">
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
            <IconButton variant="ghost>" aria-label="shopping cart button">
              <AiOutlineShoppingCart size={40} />
            </IconButton>

            <Box
              position="absolute"
              bg="black"
              padding="4px"
              width="21px"
              height="21px"
              right="-14px"
              bottom="-11px"
            >
              <Text fontSize="x-small" color="white" textAlign="center">
                1
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
