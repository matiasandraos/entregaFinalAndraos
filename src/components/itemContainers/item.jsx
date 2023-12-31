import React from 'react'
import { Heading,Card, CardHeader, CardFooter, CardBody, Button, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const item = ({
  id, 
    nombre, 
    precio, 
    description,
    categoria,
    stock
}) => {
  console.log(id);
  console.log("prueba");
  return (
    <>
        <Card>
    <CardHeader>
      <Heading size='md'> {nombre} </Heading>
    </CardHeader>
    <CardBody>
      <Text>{description}</Text>
      <Text>{categoria}</Text>
    </CardBody>
    <CardFooter>
      <Link to={`/item/${id}`}>
       <Button>Detail </Button>
      </Link>
    </CardFooter>
  </Card>
  
    </>
  )
}

export default item