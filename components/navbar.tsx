import { Box, Divider, Flex } from "@chakra-ui/react";
import Image from "next/image";

const Navbar = () => {
  return (
    <Box marginBottom="10px" paddingY="24px">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        paddingBottom="5px"
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
          <Image
            src="/images/shopping-cart.svg"
            width={54}
            height={54}
            alt="cart icon"
          />
        </Box>
      </Flex>
      <Divider color="#E4E4E4" />
    </Box>
  );
};

export default Navbar;
