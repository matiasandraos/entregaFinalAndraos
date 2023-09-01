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
import { Link, useParams } from "react-router-dom";


const navBar = () => {
  const {categoria} = useParams()
  console.log(categoria);

  return (
    <Flex>
      <Box p="4" bg="black" color="white">
        <Link to={"/"}>
          Nails
        <img src="" alt="" />
        </Link>
       
      </Box>
      <Spacer /> 
      <Menu>
       
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Menu
        </MenuButton>

        <MenuList>
        
          <MenuItem>
          <Link to={`/categoria/${'categoriaA'}`}>
          Categoria A
          </Link>
          </MenuItem>

          <MenuItem>
          <Link to={`/categoria/${'categoriaB'}`}> 
          Categoria B
          </Link>
          </MenuItem>

          <MenuItem>
          <Link to={`/categoria/${'categoriaC'}`}>
          Categoria C
          </Link>
         </MenuItem>

        </MenuList>

      </Menu>
      <Spacer />
      <Box p="4" bg="black" color="white">
        <Link to={"/cart"}>
            <CarWidget/>
        </Link>
    
      </Box>
     
    </Flex>
  );
};

export default navBar;
