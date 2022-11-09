import {Box,Grid,Text,Image, Flex, VStack} from "@chakra-ui/react"

function Workflow(){

    return(
        <div>
            

                <Grid templateColumns="repeat(2,1fr)" gap={5}>
                  
                  <Box textAlign="left">
                    <Flex>
                     <Box pt={1}><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618ce1898e7b44dfb4b5207e_Vector%20(11).svg" width={4}/></Box>
                       <Box pl={4}>
                        
                        <Text  fontSize="16px" >Invoices</Text>
                        <Text fontSize="14px">Get paid faster with automatic invoicing, online payments and more</Text>
                       
                        </Box>
                    </Flex>

                  </Box>



                  <Box textAlign="left">
                    <Flex>
                     <Box pt={1}><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e49eff7f1e27dd1b5326d_Proposals%20icon.svg" width={4}/></Box>
                       <Box pl={4}>
                        
                        <Text  fontSize="16px" >Proposals</Text>
                        <Text fontSize="14px">Create client-winning proposals with open receipts, custom packages and electronic approvals</Text>
                       
                        </Box>
                    </Flex>

                  </Box>



                  <Box textAlign="left">
                    <Flex>
                     <Box pt={1}><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a088d6d0a054fe41abb_contracts%20icon.svg" width={4}/></Box>
                       <Box pl={4}>
                        
                        <Text  fontSize="16px" >Contracts</Text>
                        <Text fontSize="14px">Protect your business with fully-customizable contract templates. Edit and e-sign hassle free.</Text>
                       
                        </Box>
                    </Flex>

                  </Box>

                  <Box textAlign="left">
                    <Flex>
                     <Box pt={1}><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a4997730241155789ee_people-outline.svg" width={4}/></Box>
                       <Box pl={4}>
                        
                        <Text  fontSize="16px" >Client CRM</Text>
                        <Text fontSize="14px">Add leads, manage existing clients and track projects easily from one place</Text>
                       
                        </Box>
                    </Flex>

                  </Box>


                  <Box textAlign="left">
                    <Flex>
                     <Box pt={1}><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a1b40e761565e4cb27c_reader-outline.svg" width={6}/></Box>
                       <Box pl={4}>
                        
                        <Text  fontSize="16px" >Forms & Automations</Text>
                        <Text fontSize="14px">Boost client intake and automate feedback with custom web forms and questionnaires</Text>
                       
                        </Box>
                    </Flex>

                  </Box>


                  <Box textAlign="left">
                    <Flex>
                     <Box pt={1}><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e49352788d2281046f7be_time%20tracking%20icon.svg" width={4}/></Box>
                       <Box pl={4}>
                        
                        <Text  fontSize="16px" >Time Tracking</Text>
                        <Text fontSize="14px">Stay organized with Bonsai’s all-in-one time tracker, automated timesheets and billing system</Text>
                       
                        </Box>
                    </Flex>

                  </Box>


                  <Box textAlign="left">
                    <Flex>
                     <Box pt={1}><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a38c319414c2fd3345a_accpunting.svg" width={4}/></Box>
                       <Box pl={4}>
                        
                        <Text  fontSize="16px" >Accounting</Text>
                        <Text fontSize="14px">Manage your finances easily with income reports, expense tracking, tax reminders and more</Text>
                       
                        </Box>
                    </Flex>

                  </Box>


                  <Box textAlign="left">
                    <Flex>
                     <Box pt={1}><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618ce1898e7b44dfb4b5207e_Vector%20(11).svg" width={4}/></Box>
                       <Box pl={4}>
                        
                        <Text  fontSize="16px" >Task Tracking</Text>
                        <Text fontSize="14px">Stress-free task management with project templates and integrated timesheets</Text>
                       
                        </Box>
                    </Flex>

                  </Box>

                </Grid>
            

        </div>
    )
}

export default Workflow;