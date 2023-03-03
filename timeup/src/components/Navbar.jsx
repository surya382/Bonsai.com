import {Link} from "react-router-dom"
import "./nav.css"
import {ChevronDownIcon,ChevronRightIcon} from "@chakra-ui/icons"
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Workflow from "./sideitem/bonsaiwork"
import Tempcont from "./sideitem/tempcont"
import {Box,Image,Flex,HStack,Spacer,Text,Heading,Divider,VStack, Button} from "@chakra-ui/react"

function Navbar(){
const logo="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg"

const { colorMode, toggleColorMode } = useColorMode();

    return(
        <Box id="nav" p={2}>

            <Flex justifyContent="space-around">

                <Box id="logo"  w="160px" h="80px">
                <Image src={logo} w="100%" h="100%" />
                </Box> 

                <HStack spacing={10} >
                  
                  <Box className="product">
                  <Box>
                    <Text fontSize="20px">Product  <ChevronDownIcon/></Text>
                    </Box>

                    <Box id="pcontent" >

                        <VStack spacing={5} backgroundColor={colorMode=="dark"?"#26262f":"white"}>
                            <Box >

                                <Box  id="onhoverside" >

                                    <Flex>
                        <Box className="box">
                     <Text fontWeight="5px" fontSize="22px">Bonsai Workflow</Text>
                     <Text mt={2}>Look professional, win more clients and manage your business from one place</Text>
                     </Box>
                      <Box id="icon"> <ChevronRightIcon/></Box>

                     <Box id="sidecont">
                         <Workflow />

                      </Box>

                      </Flex>

                      </Box>
                     
                     </Box>

                      <Divider/>
                       
                       <Box className="box">
                     <Text fontWeight="5px" fontSize="22px">Bonsai Tax</Text>
                     <Text mt={2}>Track expenses, maximize tax write-offs, and estimate taxes without the headache</Text>
                     </Box>
                     
                     <Divider/>

                     <Box className="box">
                     <Text fontWeight="5px" fontSize="22px">Bonsai Cash</Text>
                     <Text mt={2}>Bonsai’s all-in-one financial hub: No fees and lightning fast payouts</Text>
                     </Box>

                     </VStack>
                     

                    </Box>


                  </Box>


                  <Box id="template" >
                    <Box >
                    <Text fontSize="20px">Template <ChevronDownIcon/></Text>
                    
                    </Box>

                    <Box id="tempcontent" >
                     <Tempcont />
                    </Box>
                    </Box>

                  <Link to="/price"><Text fontSize="20px">Price</Text></Link>

                  <Link to="/review"><Text fontSize="20px">Reviews</Text></Link>

                </HStack>

                <HStack spacing={8}>

                    <Link to="/login"><Button id="log" colorScheme='teal' variant='outline'>LOG IN</Button></Link>
                    <Box><Button colorScheme="teal">Start Free</Button></Box>

                    <Button  onClick={() => toggleColorMode()}>{colorMode === "dark" ? (
             <SunIcon color="orange.200" />
              ) : (
            <MoonIcon color="blue.700" />
             )}</Button>
                </HStack>


            </Flex>

           
        </Box>
    )
}

export default Navbar;