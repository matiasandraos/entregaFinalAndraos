import {useEffect, useState} from 'react'
import { Card, CardBody,  CardFooter,  ButtonGroup, Stack, Heading, Text, Divider, Button, Image, Flex, Box, Spacer} from '@chakra-ui/react'
const UseEffect = () => {
    const [mensaje, setMensaje]= useState('mensaje inicial')
    const [contador, setContador]= useState(0)
    useEffect(()=>{
    
        console.log("efecto secundario");
    },[contador])

    const sumar =()=>{
        setContador(contador+1)
    }

    const restar =()=>{
        if (contador != 0){
            setContador(contador - 1)
        } else
        setContador (contador - 0)
    }  
    
    const reset =()=>{
        setContador (0)
    }
  return (

  
    <div>
       
        <p> {mensaje}</p>
        <button onClick={()=>setMensaje("mensaje cambiado")}>Cambiar</button>
      
        <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
  <Flex>
  <Box p='4' bg='white'>
    <button onClick={restar}>-</button>
  </Box>
  <Spacer />
  <Box p='4' bg='white'>
    {contador}
  </Box>
  <Spacer/>
  <Box p='4' bg='white'>
    <button onClick={sumar}>+</button>
  </Box>
</Flex>
    <Divider/>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>


        </div>
  )
}

export default UseEffect