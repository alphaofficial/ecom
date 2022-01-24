import { Box, Radio, RadioGroup, Stack } from "@chakra-ui/react";
/**
 * Functionality not working at the moment. Need more time to perfect this feature
 */
const PriceRange = ({
  onPriceFilterChange,
  priceRanges,
}: {
  onPriceFilterChange: (value: string) => void;
  priceRanges: any;
}) => {
  return (
    <RadioGroup onChange={onPriceFilterChange}>
      <Stack spacing={5} direction="column" textTransform="capitalize">
        <Box>
          <Radio borderColor="black" value={`lt-${priceRanges["lowerThan"]}`}>
            {`Lower than $${priceRanges["lowerThan"]}`}
          </Radio>
        </Box>
        <Box>
          <Radio
            borderColor="black"
            value={`${priceRanges["betweenMin"]}-${priceRanges["betweenMax"]}`}
          >
            {`$${priceRanges["betweenMin"]} - $${priceRanges["betweenMax"]}`}
          </Radio>
        </Box>
        <Box>
          <Radio borderColor="black" value={`gt-${priceRanges["higherThan"]}`}>
            {`More than $${priceRanges["higherThan"]}`}
          </Radio>
        </Box>
      </Stack>
    </RadioGroup>
  );
};

export default PriceRange;
