import { usePagination, DOTS } from "../lib/hooks";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Box, Button, Flex, IconButton, Text } from "@chakra-ui/react";

const Pagination = (props: any) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const lastPage = paginationRange
    ? paginationRange[paginationRange.length - 1]
    : 0;
  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  const onNext = () => {
    if (currentPage < lastPage) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const isActive = (page: number) => {
    return currentPage === page;
  };
  return (
    <Box marginTop="100px" marginBottom="20px">
      <Flex justifyContent="center" alignItems="center">
        <Box onClick={onPrevious} hidden={currentPage === 1}>
          <IconButton variant="ghost" aria-label="left arrow">
            <FiChevronLeft size={25} />
          </IconButton>
        </Box>
        {paginationRange?.map((pageNumber, index) => {
          return (
            <Box
              key={index}
              paddingX="10px"
              onClick={() => onPageChange(pageNumber)}
            >
              <Button variant="ghost">
                <Text
                  fontWeight="bold"
                  color={isActive(index + 1) ? "black" : "gray.300"}
                >
                  {pageNumber}
                </Text>
              </Button>
            </Box>
          );
        })}

        <Box onClick={onNext} hidden={currentPage === lastPage}>
          <IconButton variant="ghost" aria-label="right arrow">
            <FiChevronRight size={25} />
          </IconButton>
        </Box>
      </Flex>
    </Box>
  );
};

export default Pagination;
