import { Box, Heading, Text } from "@chakra-ui/react";
import Reviews from "../components/reviews";
import Navbar from "../components/Navbar";

function Review(){

    return(
        <div>
            <Navbar/>
           
           <Box bg="#F0FFF4">
            <Heading as="h2" size="xl" mt={20} fontFamily="sans-serif">Bonsai Reviews</Heading>
            <Text fontSize="xl">200,000+ Freelancers Love Bonsai. Here's why.</Text>
            <Text fontSize="sm">Last Updated April 21,2021</Text>

                <Reviews/>
                </Box>
        </div>
    )
}

export default Review;