import { Box, Container } from "@chakra-ui/layout";
import { useStoreState } from "easy-peasy";
import React, { ReactNode } from "react";
import Cart from "./cart";
import Navbar from "./navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  const isCartOpen = useStoreState((store: any) => store.isCartOpen);
  console.log({ isCartOpen });

  return (
    <Box>
      <Container maxW="container.xl">
        <Box position="relative">
          <Navbar />
          <Box
            position="absolute"
            right="0"
            top="80px"
            zIndex="9999"
            bg="white"
            sx={{
              display: isCartOpen ? "block" : "none",
            }}
          >
            <Cart />
          </Box>
          <Box>{children}</Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Layout;
