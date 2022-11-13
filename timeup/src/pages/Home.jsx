import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import {Box, Button, Flex, Heading, Image, Input, Text} from "@chakra-ui/react"
import { Link } from "react-router-dom";

function Home(){

    return(
        <div>
            <Navbar/>
         
         <Box id="bghome">


         <Box id="first" >
          
          <Box  w="700px" pt={10} pb={2} textAlign="left">
             <Flex gap={4}>
                <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c8e88feb67d_time-tracking%20colour.svg"/>
                <Text color="teal" fontWeight="bold">Time Tracking</Text>
             </Flex>

             <Heading as="h1" size="2xl" mt={5}>The robust time tracker made for your workflow.</Heading>

             <Text mt={5} fontWeight="bold" w="500px" fontSize={20}>Manage your hours with ease with an all-in-one time tracker, timesheets and billing system.</Text>

             <Flex><Input mt={8} borderColor="teal" h="60px" placeholder="Enter your email" /><Link to="/signup"><Button h="60px" colorScheme="teal" w="200px" mt={8}>START FREE</Button></Link></Flex>
               

          </Box>

          <Box ><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e6bbbc1e37d0b57e90a317c_time-tracking-img-min-p-800.png" w="90%" /></Box>

         </Box>


            
            <Heading as="h2" size="lg"  m="auto" mt="100px" w="65%">A fully-featured time tracker that’s built specifically for  <span style={{color:"teal"}}>  online contract </span> work and invoicing clients.</Heading>

            <Box id="threediv">

             <Box  textAlign="left" w="250px">
                   <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fde3f8e28c14c3d1e8b33_ill_Easily%20Billable.svg"/>
                   <Heading as="h2" mt={5} size="md">Easily Billable</Heading>

                   <Text mt={5}>Set an hourly rate per-project for tracking time and automatically invoicing the completed timesheet.</Text>

             </Box>


             <Box  textAlign="left" w="250px">
                   <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fde3f8e28c1031b1e8b34_ill_Project-Based.svg"/>
                   <Heading as="h2" mt={5} size="md">Project-Based</Heading>

                   <Text mt={5}>Track time on projects with your collaborators and see how many hours still need to be billed.</Text>

             </Box>

             <Box  textAlign="left" w="250px">
                   <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fde3f8e28c122ac1e8b35_ill_Cross-Platform.svg"/>
                   <Heading as="h2" mt={5} size="md">Cross-Platform</Heading>

                   <Text mt={5}>Use the Bonsai time tracker on the web, mobile apps, macOS app and Chrome Extension.</Text>

             </Box>

            </Box>

            <Flex  justifyContent="space-between" w="90%" m="auto" mt="100px">
              
              <Box textAlign="left"  w="400px">
                <Heading as="h2" size="lg" mt="150px">Invoice Hours</Heading>
                <Text mt={5}>Set a project’s hourly rate, start tracking time and bill time to your client with a click. Round the time up to make the billing even smoother.</Text>

              </Box>

             <Box w="600px"> <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e6bc77f7724a02f0a97e5e1_create%20an%20invoice-min%20(2).png" w="full"/></Box>

            </Flex>



            <Flex  justifyContent="space-between" w="90%" m="auto" mt="100px">
              
            <Box w="600px"> <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e6bc8038569d7612605c001_invoice%20timesheet-min.png" w="full"/></Box>

              <Box textAlign="left"  w="400px">
                <Heading as="h2" size="lg" mt="150px">Centralize Timesheets</Heading>
                <Text mt={5}>Whether you’re tracking time as a team on a project or working solo, you can keep all your project’s timesheets in the same place to see the hours billed and to-be paid.</Text>

              </Box>

             

            </Flex>


            <Flex  justifyContent="space-between" w="90%" m="auto" mt="100px">
              
              <Box textAlign="left"  w="400px">
                <Heading as="h2" size="lg" mt="150px">Use It Anywhere</Heading>
                <Text mt={5}>Download the app on iOS, Android, Mac and Chrome so the time tracker works the way you do. Use a time tracker that supports your workflow.</Text>

              </Box>

             <Box w="600px"> <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e6bc84f8569d7c4cc05c0a2_timer%20graphic-min.png" w="full"/></Box>

            </Flex>

            <Heading as="h1" size="lg" m="auto" mt="40px" w="45%">Trusted by 500K+ self-employed workers and small businesses</Heading>
                <Text fontSize="xl" m="auto" mt="20px" w="45%">Whether you’re just getting started or your business is booming, Bonsai has you covered.</Text>

                    <Flex  justifyContent="space-between" m="auto" mt="20px" w="50%">

                      <Box  w="300px" textAlign="left">
                               
                     <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7ca8ebfeb662_ill_Built%20for_4%20block.svg"/>

                     <Heading as="h2" size="md" mt="20px">Built for All Work Types</Heading>
                     <Text mt="20px">We proudly back people with wide-ranging businesses—from design and marketing to development, writing, and photography.</Text>
                      </Box>



                      <Box  w="300px" textAlign="left">
                               
                     <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c967efeb661_ill_Global%20Support_4%20block.svg"/>

                     <Heading as="h2" size="md" mt="20px">Built for Global Businesses</Heading>
                     <Text mt="20px">Bonsai has international coverage across the United States, Canada, UK, Australia and more, with 180 currencies supported.</Text>
                      </Box>

              

                    </Flex>


                    <Footer/>

         </Box>
        </div>
    )
}

export default Home;