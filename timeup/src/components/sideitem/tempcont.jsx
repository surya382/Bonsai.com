import {Flex,Box,Image,Text,HStack,Heading} from "@chakra-ui/react"
import "./side.css"

function Tempcont(){

    return(
        <Box p={5}>

            <HStack spacing={6}>
                <Box display="flex" flexDirection="column" gap={6}>

                    <Box className="contract">
                           <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a088d6d0a054fe41abb_contracts%20icon.svg" w={4}/>
                           <Text>Contract Templates</Text>

                    </Box>

                    <Box className="contract">
                           <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a088d6d0a054fe41abb_contracts%20icon.svg" w={4}/>
                           <Text>Proposal Templates</Text>

                    </Box>

                    <Box className="contract">
                           <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618ce1898e7b44dfb4b5207e_Vector%20(11).svg" w={4}/>
                           <Text>Invoice Templates</Text>

                    </Box>

                    <Box className="contract">
                           <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a088d6d0a054fe41abb_contracts%20icon.svg" w={4}/>
                           <Text>Agreement Templates</Text>

                    </Box>

                    <Box className="contract">
                           <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e49eff7f1e27dd1b5326d_Proposals%20icon.svg" w={4}/>
                           <Text>Quote Templates</Text>

                    </Box>

                    <Box className="contract">
                           <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e49352788d2281046f7be_time%20tracking%20icon.svg" w={4}/>
                           <Text>Scope of Work Templates</Text>

                    </Box>

                    <Box className="contract">
                           <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e49eff7f1e27dd1b5326d_Proposals%20icon.svg" w={4}/>
                           <Text>Breif Templates</Text>

                    </Box>

                </Box>

                <Box display="flex" flexDirection="column" gap={2}>
                    <Text fontSize="20px" fontWeight="2px">Featured Contract Templates</Text>
                    <Box className="featured"><Text>Free Contract Maker</Text></Box>
                    <Box className="featured"><Text>Social Media Contract Maker</Text></Box>
                    <Box className="featured"><Text>Graphic Design Contract Maker</Text></Box>
                    <Box className="featured"><Text> Buisness Proposal Template</Text></Box>
                    <Text color="teal" fontWeight="bold">See All Templates</Text>
                    </Box>


            </HStack>
        </Box>
    )
}

export default Tempcont;