import { Box, HStack, Text, useColorMode } from "@chakra-ui/react";
import "./nav.css"

function Footer(){

    const { colorMode, toggleColorMode } = useColorMode();
    return(
        <Box  id="foot" backgroundColor={colorMode=="dark"?"#20202e":"white"}>
          
          <HStack spacing="300px">

            <Box>
                <Text fontWeight="bold">PRODUCT</Text>

                <Text mt="40px">Proposals</Text>
                <Text mt={1}>Contracts</Text>
                <Text mt={1}>Invoicing</Text>
                <Text mt={1}>Client CRM</Text>
                <Text mt={1}>Time Tracking</Text>
                <Text mt={1}>Task Tracking</Text>
                <Text mt={1}>Forms</Text>
                <Text mt={1}>Accounting</Text>
                

            </Box>




            <Box>
                <Text fontWeight="bold">FREE RESOURCES</Text>

                <Text mt="40px">Freelance Resources</Text>
                <Text mt={1}>Freelance Blog by Bonsai</Text>
                <Text mt={1}>How to Write a Contract</Text>
                <Text mt={1}>Online Signature Maker</Text>
                <Text mt={1}>Self-Employed Taxes Hub</Text>
                <Text mt={1}>Self-Employed Tax Calculator</Text>
                <Text mt={1}>Self-Employed Tax Deductions</Text>
                <Text mt={1}>Estimate Templates</Text>
                
                

            </Box>


            <Box>
                <Text fontWeight="bold">BONSAI</Text>

                <Text mt="40px">About</Text>
                <Text mt={1}>Careers</Text>
                <Text mt={1}>Support</Text>
                <Text mt={1}>LinkedIn</Text>
                <Text mt={1}>Twitter</Text>
                <Text mt={1}>Privacy policy</Text>
                <Text mt={1}>Legal</Text>
                <Text mt={1}>Affiliates</Text>
                
                

            </Box>

          </HStack>

        </Box>
    )
}

export default Footer;