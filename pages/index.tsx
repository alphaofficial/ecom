import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Select,
  Spinner,
  Text,
  useDisclosure,
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
import { BsSliders } from "react-icons/bs";
import { SWRConfig, useSWRConfig } from "swr";
import { useProduct } from "../lib/hooks";
import BottomFilters from "../components/bottomFilters";
import { getArrayChunks } from "../utils";

type PageProps = {
  fallback: {
    [key: string]: IProduct[];
  };
};

const Home = () => {
  const PageSize = 6;
  const { mutate } = useSWRConfig();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [categoryFilter, setCategoryFilter] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<number>(1);
  const [sortValue, setSortValue] = useState<string>("price");
  const [priceFilter, setPriceFilter] = useState<string>("none");
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
    // .filter((product) => {
    //   if (priceFilter === "none") {
    //     return true;
    //   } else if (priceFilter?.includes("-")) {
    //     console.log({ priceFilter });
    //     let filter = priceFilter.split("-");
    //     switch (filter[0]) {
    //       case "gt":
    //         return product.price > parseInt(filter[1]);
    //       case "lt":
    //         return product.price < parseInt(filter[1]);
    //       default:
    //         return (
    //           product.price <= parseInt(filter[0]) &&
    //           product.price >= parseInt(filter[1])
    //         );
    //     }
    //   }
    //   return true;
    // });
  }, [products, categoryFilter, priceFilter]);

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
  }, [products, currentPage, categoryFilter, priceFilter]);

  const priceRanges = useMemo(() => {
    const sortedProducts = products.sort((a, b) => a.price - b.price);
    const chunks = getArrayChunks(sortedProducts, 4);
    return {
      //@ts-ignore
      lowerThan: parseInt(chunks[0][chunks[0]?.length - 1].price),
      //@ts-ignore
      betweenMin: parseInt(chunks[0][chunks[0]?.length - 1].price),
      //@ts-ignore
      betweenMax: parseInt(chunks[1][chunks[1]?.length - 1].price),
      //@ts-ignore
      higherThan: parseInt(chunks[3][0].price),
    };
  }, [products]);

  const onCategorySelect = (params: IParams | IParams[]) => {
    if (Array.isArray(params)) {
      //filter for unique categories and checked is true
      const newCategoryFilter = params
        .filter((param) => param.checked)
        .map((param) => param.category);

      setCategoryFilter(newCategoryFilter);
    } else {
      if (params.checked) {
        return setCategoryFilter((prevState) => [
          ...prevState,
          params.category,
        ]);
      }
      return setCategoryFilter((prevState) =>
        prevState.filter((category) => category !== params.category)
      );
    }
  };

  const onPriceFilterChange = (value: string) => setPriceFilter(value);

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
          <Flex justifyContent="space-between" alignItems="center">
            <Box>
              <HStack>
                <Heading fontSize="lg">Photography / </Heading>
                <Text fontSize="lg" color="gray.400">
                  Premium photos
                </Text>
              </HStack>
            </Box>
            <Box display={{ base: "none", sm: "none", md: "block" }}>
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
            <Box display={{ base: "block", sm: "block", md: "none" }}>
              <IconButton
                aria-label="sort button"
                bg="white"
                border="1px solid #000000"
                onClick={onOpen}
              >
                <BsSliders size={25} />
              </IconButton>
            </Box>
          </Flex>
        </Box>
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row", lg: "row" }}
        >
          <Box
            width="30%"
            marginRight="20px"
            display={{ base: "none", md: "block" }}
          >
            <Sidebar
              categories={categories}
              onCategorySelect={onCategorySelect}
              categoryFilter={categoryFilter}
              priceRanges={priceRanges}
              onPriceFilterChange={onPriceFilterChange}
            />
          </Box>
          <Box>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              gap={6}
            >
              {currentProductList.map((product) => (
                <GridItem key={product._id}>
                  <ProductItem product={product} />
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
      <BottomFilters
        isOpen={isOpen}
        onClose={onClose}
        categories={categories}
        onCategorySelect={onCategorySelect}
        categoryFilter={categoryFilter}
        priceRanges={priceRanges}
        onPriceFilterChange={onPriceFilterChange}
      />
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
