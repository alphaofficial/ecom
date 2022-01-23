import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Select,
  Spinner,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import FeaturedProduct from "../components/featuredProduct";
import Layout from "../components/layout";
import { product } from "../db";
import { IParams, IProduct } from "../types";
import { serialize } from "../lib/serialize";
import Sidebar from "../components/sidebar";
import ProductItem from "../components/productItem";
import { useEffect, useMemo, useState } from "react";
import Pagination from "../components/pagination";
import { BiSortAlt2 } from "react-icons/bi";
import { SWRConfig, useSWRConfig } from "swr";
import { useProduct } from "../lib/hooks";

type PageProps = {
  fallback: {
    [key: string]: IProduct[];
  };
};

const Home = () => {
  const { mutate } = useSWRConfig();
  const PageSize = 6;
  const [categoryFilter, setCategoryFilter] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<number>(1);
  const [sortValue, setSortValue] = useState<string>("price");
  const [filterChanged, setFilterChanged] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const queryParams = useMemo(() => {
    setFilterChanged(true);
    return `sortOrder=${sortOrder}&sortValue=${sortValue}`;
  }, [sortOrder, sortValue]);

  const { products, isLoading } = useProduct(queryParams);

  const workingProducts = useMemo(() => {
    return products.filter((product) => {
      if (categoryFilter.length === 0) {
        return true;
      }
      setCurrentPage(1);
      return categoryFilter.includes(product.category);
    });
  }, [products, categoryFilter]);

  const categories = products?.reduce((acc, product) => {
    if (!acc.includes(product.category)) {
      acc.push(product.category);
    }
    return acc;
  }, [] as string[]);

  const featuredProduct = products.find(
    (product: any) => product.featured
  ) as IProduct;

  const currentProductList = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return workingProducts
      .filter((product) => !product.featured)
      .slice(firstPageIndex, lastPageIndex);
  }, [products, currentPage, categoryFilter]);

  const onCategorySelect = (params: IParams) => {
    if (params.checked) {
      return setCategoryFilter((prevState) => [...prevState, params.category]);
    }
    return setCategoryFilter((prevState) =>
      prevState.filter((category) => category !== params.category)
    );
  };

  const toggleSortOrder = () => {
    setSortOrder((prevState) => (prevState === 1 ? -1 : 1));
  };
  const toggleSortValue = (e: any) => {
    const { value } = e.target;
    setSortValue(value);
  };

  useEffect(() => {
    if (filterChanged) {
      mutate("products");
      setFilterChanged(false);
    }
  }, [filterChanged]);

  if (isLoading) {
    return (
      <Box>
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <Layout>
      <FeaturedProduct product={featuredProduct} />
      <Divider color="gray.300" />
      <Box paddingY="20px">
        <Box marginBottom="20px">
          <Flex justifyContent="space-between">
            <Box>
              <HStack>
                <Heading fontSize="lg">Photography / </Heading>
                <Text fontSize="lg" color="gray.400">
                  Premium photos
                </Text>
              </HStack>
            </Box>
            <Box>
              <Flex alignItems="center">
                <HStack w="150px" color="gray.400">
                  <Box cursor="pointer" onClick={toggleSortOrder}>
                    <BiSortAlt2 />
                  </Box>
                  <Text fontSize="small">Sort By</Text>
                </HStack>
                <Select variant="unstyled" size="xs" onChange={toggleSortValue}>
                  <option value="price">Price</option>
                  <option value="name">Alphabetical</option>
                </Select>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Flex justifyContent="space-between">
          <Box width="250px">
            <Sidebar
              categories={categories}
              onCategorySelect={onCategorySelect}
            />
          </Box>
          <Box>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              {currentProductList.map((product) => (
                <GridItem key={product._id}>
                  <ProductItem product={product} onAddToCart={() => null} />
                </GridItem>
              ))}
            </Grid>
            <Box>
              <Pagination
                currentPage={currentPage}
                totalCount={workingProducts.length}
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

export const Page: NextPage<PageProps> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Home />
    </SWRConfig>
  );
};

export const getServerSideProps = async () => {
  let products = [];
  try {
    const _products = await product.getProducts({
      sortOrder: "1",
      sortValue: "price",
    });
    products = serialize(_products);
  } catch (error) {
    console.error(error);
  }
  return {
    props: {
      fallback: {
        products,
      },
    },
  };
};

export default Page;
