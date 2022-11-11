import {Link} from "react-router-dom"
import "./nav.css"
import {ChevronDownIcon,ChevronRightIcon} from "@chakra-ui/icons"
import Workflow from "./sideitem/bonsaiwork"
import Tempcont from "./sideitem/tempcont"
import {Box,Image,Flex,HStack,Spacer,Text,Heading,Divider,VStack, Button} from "@chakra-ui/react"

function Navbar(){
const logo="https://document-export.canva.com/Nl5vY/DAFRXdNl5vY/4/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20221108%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221108T131355Z&X-Amz-Expires=6950&X-Amz-Signature=ce115259bea4df4c565581cfc5d50aa4ff1c530de920d07ae89b9d662dc3f0f3&X-Amz-SignedHeaders=host&response-expires=Tue%2C%2008%20Nov%202022%2015%3A09%3A45%20GMT"

    return(
        <Box id="nav" p={2}>

            <Flex justifyContent="space-around">

                <Box id="logo"  w="160px" h="80px">
                <Image src={logo} w="100%" h="100%" />
                </Box> 

                <HStack spacing={10}>
                  
                  <Box className="product">
                  <Box>
                    <Text fontSize="20px">Product  <ChevronDownIcon/></Text>
                    </Box>

                    <Box id="pcontent">

                        <VStack spacing={5}>
                            <Box>

                                <Box  id="onhoverside">

                                    <Flex>
                        <Box className="box">
                     <Text fontWeight="5px" fontSize="22px">Bonsai Workflow</Text>
                     <Text mt={2}>Look professional, win more clients and manage your business from one place</Text>
                     </Box>
                      <Box id="icon"> <ChevronRightIcon/></Box>

                     <Box id="sidecont">
                         <Workflow/>

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


                  <Box id="template">
                    <Box >
                    <Text fontSize="20px">Template <ChevronDownIcon/></Text>
                    
                    </Box>

                    <Box id="tempcontent">
                     <Tempcont/>
                    </Box>
                    </Box>

                  <Link to="/price"><Text fontSize="20px">Price</Text></Link>

                  <Link to="/review"><Text fontSize="20px">Reviews</Text></Link>

                </HStack>

                <HStack spacing={8}>

                    <Link to="/login"><Button id="log" colorScheme='teal' variant='outline'>LOG IN</Button></Link>
                    <Box><Button colorScheme="teal">Start Free</Button></Box>
                </HStack>


            </Flex>

           
        </Box>
    )
}

export default Navbar;