import { Box, Container } from "@chakra-ui/layout";
import React, { ReactNode } from "react";
import Navbar from "./navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box>
      <Container maxW="container.xl">
        <Box>
          <Navbar />
          <Box>{children}</Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Layout;
