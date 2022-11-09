import { Flex, Heading,Switch,Text,Box } from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "../components/Navbar";

function Price(){

    const [plan,setplan]=useState(false);

    console.log(plan);

    return (
        <div>
  <Navbar/>

  <Flex border='1px solid black' mt={10} p={55} justifyContent="space-around" gap={4}>

    <Heading as="h1" fontFamily="'Proximanova opt,sans-serif'">Plans & Pricing</Heading>

    <Box display="flex" gap="25px">
    <Text fontSize="20px" color={plan?"gray.400":"gray.800"}>Monthly</Text>
    <Switch colorScheme='teal'  size='lg' mt={1} onChange={()=>setplan(!plan)}/>
    <Text fontSize="20px" color={plan?"gray.800":"gray.400"}>Yearly</Text>

    </Box>




  </Flex>

        </div>
    )
}

export default Price;