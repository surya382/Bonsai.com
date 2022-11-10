import { Box, Grid, Image, Text } from "@chakra-ui/react";
import "./nav.css"

function Reviews(){

    return(
        <div>
            <Grid templateColumns="repeat(2,1fr)"  p={5} gap={5}>
           
           <Box className="revbox">
            
            <Box className="imgbox"> <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e9ef0355118204b690a5297_KevinT_0096rt1.jpg" borderRadius="0px 30px 0px 30px" w="full"/></Box>
             
             <Box className="coma"><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c29a9feb660_quote-icon.svg" w="full"/></Box>

                  <Text>"I did a lot of research before switching to Bonsai from another invoicing service. 
                    The ability to send and sign contracts was a game changer for me. 
                    No one else offers such a seamless process from proposal to contract to invoice. 
                    It has saved me a lot of time and lets me focus on creative work."</Text>


                    <Text mt={5} fontSize="lg" fontWeight="bold">Kevin Tudball</Text>
                    <Text>Illustrator</Text>
           </Box>


                   
           <Box className="revbox">
            
            <Box className="imgbox"> <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e9ef23d8229a8676579c19f_JasonCuray.jpg" borderRadius="0px 30px 0px 30px" w="full" h="210px"/></Box>
             
             <Box className="coma"><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c29a9feb660_quote-icon.svg" w="full"/></Box>

                  <Text>"My #1 most used and favourite feature is the contracts,
                     it has everything that I need, easy to customise and it automates invoice creation which saves me time.
                       Bonsai is an efficient, effective, affordable, easy to use and empowering tool that allows me to do more important tasks."</Text>


                    <Text mt={5} fontSize="lg" fontWeight="bold">Jason Curay</Text>
                    <Text>Digital Marketer</Text>
           </Box>


           <Box className="revbox">
            
            
             
             <Box className="comma"><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c29a9feb660_quote-icon.svg" w="full"/></Box>

                  <Text>"I've been a Bonsai user for years. 
                    It has allowed me to grow my career as a fulltime freelancer especially with the ease of making contracts and collecting payments.
                     With a variety of clients that are all on different payment schedules, 
                     Bonsai provided options for each client without difficulty. 
                     Now I am enjoying Bonsai even more that they have added the additional accounting and tax assistance. 
                     This quarter I was able to save so much more time filing quarterly tax payments thanks to the tax assistance feature. 
                     Thanks, Bonsai for understanding what freelancers need at every stage of their freelance career."</Text>


                    <Text mt={5} fontSize="lg" fontWeight="bold">Diane Serra</Text>
                    
           </Box>
            
            

           <Box className="revbox">
            
            
             
            <Box className="comma"><Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c29a9feb660_quote-icon.svg" w="full"/></Box>

                 <Text>"Bonsai is the best way to consolidate the “other” side of being in business as a freelancer or 
                    independent operator. That is what I love about it; proposals, contracts, 
                    invoices - all managed under the same umbrella. This alone has provided a great and streamlined 
                    experience for my clients. Bonsai is my armor to get what I’m worth. 
                    How I benefit most from Bonsai is having a reliable system to scale the pieces required in order to sustain my practice :)"</Text>


                   <Text mt={5} fontSize="lg" fontWeight="bold">Taylor Good</Text>
                   
          </Box>
           
            </Grid>
        </div>
    )
}

export default Reviews;