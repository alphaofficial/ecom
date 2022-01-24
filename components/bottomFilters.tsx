import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

type CategoryParams = {
  category: string;
  checked: boolean;
};
const BottomFilters = ({
  onClose,
  isOpen,
  categories,
  onCategorySelect,
  categoryFilter,
}: {
  onClose: () => void;
  isOpen: boolean;
  categories: string[];
  onCategorySelect: (params: CategoryParams | CategoryParams[]) => void;
  categoryFilter: string[];
}) => {
  const [categoryParams, setCategoryParams] = useState<CategoryParams[]>([]);

  const handleCategorySelect = (e: any) => {
    const { value, checked } = e.target;
    let _categoryParams = categoryParams || [];
    const newCategoryParams: CategoryParams = {
      category: value,
      checked,
    };

    // if newCategoryParams is already in the array, replace it
    const index = _categoryParams.findIndex(
      (categoryParam: CategoryParams) => categoryParam.category === value
    );
    if (index !== -1) {
      _categoryParams[index] = newCategoryParams;
    }
    // if newCategoryParams is not in the array, add it
    else {
      _categoryParams.push(newCategoryParams);
    }
    console.log({ _categoryParams });
    setCategoryParams(_categoryParams);
  };

  const onSave = () => {
    onCategorySelect(categoryParams);
    onClose();
  };

  const onClear = () => {
    setCategoryParams([]);
    onCategorySelect([]);
    onClose();
  };

  return (
    <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent maxH="75vh">
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">Filters</DrawerHeader>
        <DrawerBody>
          <Box position="relative">
            <Box marginBottom="40px">
              <Box>
                <Stack
                  spacing={5}
                  direction="column"
                  textTransform="capitalize"
                >
                  {categories.map((category: string) => (
                    <Box key={category}>
                      <Checkbox
                        borderColor="black"
                        onChange={handleCategorySelect}
                        value={category}
                        defaultChecked={categoryFilter.includes(category)}
                      >
                        {category}
                      </Checkbox>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Box>
        </DrawerBody>
        <DrawerFooter>
          <Box width="100%">
            <ButtonGroup variant="outline" spacing="3" width="100%">
              <Button
                width="100%"
                colorScheme="blue"
                onClick={onClear}
                bg="white"
                color="black"
                borderRadius="0px"
                textTransform="uppercase"
                borderWidth="3px"
              >
                Clear
              </Button>
              <Button
                width="100%"
                onClick={onSave}
                bg="black"
                color="white"
                borderRadius="0px"
                textTransform="uppercase"
              >
                Save
              </Button>
            </ButtonGroup>
          </Box>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default BottomFilters;
