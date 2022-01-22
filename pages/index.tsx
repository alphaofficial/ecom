import { Box, Divider, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import FeaturedProduct from "../components/featuredProduct";
import Layout from "../components/layout";
import { IProduct } from "../types";

const Home: NextPage<{ products: IProduct[] }> = ({ products }) => {
  const featuredProduct = products.find(
    (product) => product.featured
  ) as IProduct;

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
  let products: IProduct[] = [];
  try {
  } catch (error) {}
  return {
    props: {
      products,
    },
  };
};

export default Home;
