import { Box, Divider, Text } from "@chakra-ui/react";
import { Product } from "@prisma/client";
import type { NextPage } from "next";
import FeaturedProduct from "../components/featuredProduct";
import Layout from "../components/layout";
import prisma from "../lib/prisma";
import { IProduct } from "../types";

const Home: NextPage<{ products: any[] }> = ({ products }) => {
  const featuredProduct = products.find((product: Product) => product.featured);

  return (
    <Layout>
      <FeaturedProduct product={featuredProduct} />
      <Divider />
      <Box>
        <Text>Product List</Text>
      </Box>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  let products: Product[] = [];
  try {
    products = await prisma.product.findMany({
      include: {
        details: true,
        image: true,
      },
    });
    console.log({ products });
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      products,
    },
  };
};

export default Home;
