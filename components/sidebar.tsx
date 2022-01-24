import {
  Box,
  Checkbox,
  Divider,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { IParams } from "../types";

type SidebarProps = {
  categories: string[];
  onCategorySelect: (params: IParams) => void;
  categoryFilter: string[];
};
const Sidebar: FC<SidebarProps> = ({
  categories,
  onCategorySelect,
  categoryFilter,
}) => {
  const handleCategorySelect = (e: any) => {
    const { value, checked } = e.target;
    onCategorySelect({
      category: value,
      checked,
    });
  };
  return (
    <Box>
      <Box marginBottom="20px">
        <Heading fontSize="lg">Category</Heading>
      </Box>
      <Box>
        <Stack spacing={5} direction="column" textTransform="capitalize">
          {categories.map((category) => (
            <Box key={category}>
              <Checkbox
                borderColor="black"
                onChange={handleCategorySelect}
                defaultChecked={categoryFilter.includes(category)}
                value={category}
              >
                {category}
              </Checkbox>
            </Box>
          ))}
        </Stack>
      </Box>
      <Box paddingY="20px">
        <Divider />
      </Box>
      <Box marginBottom="20px">
        <Heading fontSize="lg">Price</Heading>
      </Box>
      <Box marginBottom="20px">
        <RadioGroup>
          <Stack spacing={5} direction="column" textTransform="capitalize">
            {categories.map((category) => (
              <Box key={category}>
                <Radio borderColor="black" value={category}>
                  {category}
                </Radio>
              </Box>
            ))}
          </Stack>
        </RadioGroup>
      </Box>
    </Box>
  );
};

export default Sidebar;
