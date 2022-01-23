import { Box, Checkbox, Divider, Heading, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";

type SidebarProps = {
  categories: string[];
};
const Sidebar: FC<SidebarProps> = ({ categories }) => {
  return (
    <Box>
      <Box marginBottom="20px">
        <Heading fontSize="lg">Category</Heading>
      </Box>
      <Box>
        <Stack spacing={5} direction="column" textTransform="capitalize">
          {categories.map((category) => (
            <Box key={category}>
              <Checkbox colorScheme="red" defaultChecked>
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
        <Heading fontSize="lg">Category</Heading>
      </Box>
      <Box marginBottom="20px">
        <Stack spacing={5} direction="column" textTransform="capitalize">
          {categories.map((category) => (
            <Box key={category}>
              <Checkbox colorScheme="red" defaultChecked>
                {category}
              </Checkbox>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Sidebar;
