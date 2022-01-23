import { Box, Divider, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import FeaturedProduct from "../components/featuredProduct";
import Layout from "../components/layout";
import { product } from "../db";
import { IProduct } from "../types";
import { serialize } from "../lib/serialize";
import Sidebar from "../components/sidebar";
import ProductItem from "../components/productItem";
import { useMemo, useState } from "react";
import Pagination from "../components/pagination";

type HomeProps = {
  products: IProduct[];
  categories: string[];
};

const Home: NextPage<HomeProps> = ({ products, categories }) => {
  const featuredProduct = products.find(
    (product) => product.featured
  ) as IProduct;

  const PageSize = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const currentProductList = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return products.slice(firstPageIndex, lastPageIndex);
  }, [products, currentPage]);

  return (
    <Layout>
      <FeaturedProduct product={featuredProduct} />
      <Divider color="gray.300" />
      <Box paddingY="20px">
        <Box marginBottom="20px">
          <Flex justifyContent="space-between">
            <Box>
              <Text>Photography / Premium photos</Text>
            </Box>
            <Box>
              <Text>Sort by Price</Text>
            </Box>
          </Flex>
        </Box>
        <Flex justifyContent="space-between">
          <Box width="250px">
            <Sidebar categories={categories} />
          </Box>
          <Box>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              {currentProductList.map((product) => (
                <GridItem key={product.name}>
                  <ProductItem product={product} onAddToCart={() => null} />
                </GridItem>
              ))}
            </Grid>
            <Box>
              <Pagination
                currentPage={currentPage}
                totalCount={products.length}
                pageSize={PageSize}
                onPageChange={(page: number) => setCurrentPage(page)}
              />
            </Box>
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  let products;
  let categories;
  try {
    const _products = await product.getProducts();
    products = serialize(_products);
    categories = products.reduce((acc, product) => {
      if (!acc.includes(product.category)) {
        acc.push(product.category);
      }
      return acc;
    }, [] as string[]);
  } catch (error) {
    console.error(error);
  }
  return {
    props: {
      products,
      categories,
    },
  };
};

export default Home;
