import { Box, HStack,Heading, Text, Flex,Image, Button,Switch} from "@chakra-ui/react";

import "./nav.css"
 
 function Montyhly({plan,changeplan}){

    return(
        <Box>

<Flex  mt={10} p={55} justifyContent="space-around" gap={4}>

<Heading as="h1" fontFamily="'Proximanova opt,sans-serif'">Plans & Pricing</Heading>

<Box display="flex" gap="25px">
<Text fontSize="20px" color={plan?"gray.400":"gray.800"}>Monthly</Text>
<Switch colorScheme='teal'  size='lg' mt={1} onChange={()=>changeplan()}/>

<Text fontSize="20px" color={plan?"gray.800":"gray.400"}>Yearly</Text>
<Box position="relative" right="140px" bottom="27px"> <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e9d7255d3886a6103fb12a9_FREE-text.svg"/></Box>

</Box>




</Flex>


        <Box p={20}>
            <HStack spacing={10}>

                <Box className="pribox">
                  <Heading as="h3" size='md'> Starter</Heading>
                  <Text>Ideal for freelancers and contractors just starting out.</Text>

                  <Flex mt={10}><span className="dollar">$</span> <Heading as="h1" size="2xl">{plan?"17":"24"}</Heading><span className="month">/MONTH</span> {plan && <Text fontSize={12} position="relative" left="10px" top="40px">Billed Yearly</Text>}</Flex>
                    
                    <Box border="1px solid teal" mt={4}></Box>


                    <Box mt={20}>
                        <Flex className="checks"><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg" boxSize={4}/> <Text>All Templates</Text></Flex>

                        <Flex className="checks"><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg" boxSize={4}/> <Text>Unlimited Clients & Projects</Text></Flex>
                        <Flex className="checks"><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg" boxSize={4}/> <Text>Invoicing & Payments</Text></Flex>
                        <Flex className="checks"><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg" boxSize={4}/> <Text>Proposals & Contracts</Text></Flex>
                        <Flex className="checks"><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg" boxSize={4}/> <Text>Tasks & Time Tracking</Text></Flex>
                        <Flex className="checks"><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg" boxSize={4}/> <Text>Client CRM</Text></Flex>
                        <Flex className="checks"><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg" boxSize={4}/> <Text>Expense Tracking</Text></Flex>
                        <Flex className="checks"><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg" boxSize={4}/> <Text>Up to 5 Project Collaborators</Text></Flex>
                    </Box>
                    


                  <Box className="start">  <Button w="full" colorScheme="teal" >START FREE </Button></Box>


                </Box>





                <Box className="pribox">
                  <Heading as="h3" size='md'> Professional</Heading>
                  <Text>Everything a growing independent business needs to thrive.</Text>

                  <Flex mt={10}><span className="dollar">$</span> <Heading as="h1" size="2xl">{plan?"32":"39"}</Heading><span className="month">/MONTH</span> {plan && <Text fontSize={12} position="relative" left="10px" top="40px">Billed Yearly</Text>}</Flex>
                    
                    <Box border="1px solid teal" mt={4}></Box>


                    <Box mt={20}>
                        <Flex className="checks"><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg" boxSize={4}/> <Text>Everything in Starter plus...</Text></Flex>

                        <Flex className="checks"><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg" boxSize={4}/> <Text>Custom Branding</Text></Flex>
                        <Flex className="checks"><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg" boxSize={4}/> <Text>Forms & Questionnaires</Text></Flex>
                        <Flex className="checks"><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg" boxSize={4}/> <Text>Workflow Automations</Text></Flex>
                        <Flex className="checks"><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg" boxSize={4}/> <Text>Client Portal</Text></Flex>
                        <Flex className="checks"><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg" boxSize={4}/> <Text>QuickBooks Integration</Text></Flex>
                        <Flex className="checks"><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg" boxSize={4}/> <Text>Calendly Integration</Text></Flex>
                        <Flex className="checks"><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg" boxSize={4}/> <Text>Zapier Integration</Text></Flex>
                        <Flex className="checks"><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg" boxSize={4}/> <Text>Up to 15 Project Collaborators</Text></Flex>
                    </Box>
                    


                  <Box className="start" mt={28}>  <Button w="full" colorScheme="teal" >START FREE </Button></Box>


                </Box>




                <Box className="pribox">
                  <Heading as="h3" size='md'> Business</Heading>
                  <Text>The perfect package for small businesses and agencies.</Text>

                  <Flex mt={10}><span className="dollar">$</span> <Heading as="h1" size="2xl">{plan?"52":"79"}</Heading><span className="month">/MONTH</span> {plan && <Text fontSize={12} position="relative" left="10px" top="40px">Billed Yearly</Text>}</Flex>
                    
                    <Box border="1px solid teal" mt={4}></Box>


                    <Box mt={20}>
                        <Flex className="checks"><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg" boxSize={4}/> <Text>Everything in Starter and Professional plus...</Text></Flex>

                        <Flex className="checks"><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg" boxSize={4}/> <Text>Subcontractor Management</Text></Flex>
                        <Flex className="checks"><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg" boxSize={4}/> <Text>Hiring Agreement Templates (1099 contracts)</Text></Flex>
                        <Flex className="checks"><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg" boxSize={4}/> <Text>Subcontractor Onboarding</Text></Flex>
                        <Flex className="checks"><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg" boxSize={4}/> <Text>Talent Pool</Text></Flex>
                        <Flex className="checks"><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg" boxSize={4}/> <Text>3 Team Seats (additional seats $9/month)</Text></Flex>
                        <Flex className="checks"><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg" boxSize={4}/> <Text>Accountant Access</Text></Flex>
                        <Flex className="checks"><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg" boxSize={4}/> <Text>Connect Multiple Bank Accounts</Text></Flex>
                        <Flex className="checks"><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg" boxSize={4}/> <Text>Unlimited Subcontractors</Text></Flex>
                    </Box>
                    


                  <Box className="start" mt={10}>  <Button w="full" colorScheme="teal" >START FREE </Button></Box>


                </Box>
            </HStack>
            
        </Box>

        </Box>
    )
 }




   
 


 export {Montyhly};