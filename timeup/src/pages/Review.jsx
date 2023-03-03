import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";
import Reviews from "../components/reviews";
import Navbar from "../components/Navbar";

function Review(){

    const { colorMode, toggleColorMode } = useColorMode();
    
    return(
        <div>
            <Navbar/>
           
           <Box bg="#F0FFF4" backgroundColor={colorMode=="dark"?"#26262f":"white"}>
            <Heading as="h2" size="xl" mt={20} fontFamily="sans-serif">Bonsai Reviews</Heading>
            <Text fontSize="xl">200,000+ Freelancers Love Bonsai. Here's why.</Text>
            <Text fontSize="sm">Last Updated April 21,2021</Text>

                <Reviews/>
                </Box>
        </div>
    )
}

export default Review;