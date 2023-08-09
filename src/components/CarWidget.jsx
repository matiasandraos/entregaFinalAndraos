import { PlusSquareIcon } from '@chakra-ui/icons'
import { Box, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import shoppingCart from '../assets/carrito-de-compras.png/'

const CarWidget = () => {
  return (
    <Flex>
        
        <Box>
            <img src={shoppingCart} alt="" width='50px' height='50px' />
        </Box>
        <Box>
        3
        
        </Box>
     
    </Flex>
  )
}

export default CarWidget