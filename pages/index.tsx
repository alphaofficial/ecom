import { Box, Divider, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { connectToDB } from "../db/connect";
import FeaturedProduct from "../components/featuredProduct";
import Layout from "../components/layout";
import { product } from "../db";
import { IProduct } from "../types";

const Home: NextPage<{ products: IProduct[] }> = ({ products }) => {
  console.log({ products });
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
  let products;
  try {
    products = await product.getProducts();
  } catch (error) {
    console.error(error);
  }
  return {
    props: {
      products,
    },
  };
};

export default Home;
