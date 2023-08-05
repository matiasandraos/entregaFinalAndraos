import React from "react";
import {
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Box,
  Spacer
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import CarWidget from "./CarWidget";

const navBar = () => {
  return (
    <Flex>
      <Box p="4" bg="black" color="white">
        Nails
      </Box>
      <Spacer /> 
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Menu
        </MenuButton>
        <MenuList>
          <MenuItem>Categoria A</MenuItem>
          <MenuItem>Categoria B</MenuItem>
          <MenuItem>Categoria C</MenuItem>
        </MenuList>
      </Menu>
      <Spacer />
      <Box p="4" bg="black" color="white">
         <CarWidget />
      </Box>
     
    </Flex>
  );
};

export default navBar;
