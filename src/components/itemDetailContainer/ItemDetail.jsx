import React from 'react'
import { Card, CardBody, CardFooter, Text, Heading, Stack, Image,Divider, Button, ButtonGroup } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

const ItemDetail = ({productos}) => {


 

  return (
    
    <>



        <div key={productos.id}>
          <Card maxW='sm'>
            <CardBody>
              <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{productos.nombre}</Heading>
                <Text>{productos.description}</Text>
                <Text color='blue.600' fontSize='2xl'>
                  {productos.precio}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
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
      

    </>
  )
}

export default ItemDetail