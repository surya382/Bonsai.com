import "./module.css"
import Footer from "../components/footer";
import { useState } from "react";
import { Montyhly } from "../components/pri";
import Navbar from "../components/Navbar";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, Box, Button, Heading, Text, VStack,AccordionPanel, useColorMode } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

function Price(){

    const [plan,setplan]=useState(false);
    const { colorMode, toggleColorMode } = useColorMode();

    

    const changeplan=()=>{
      setplan(!plan);
    }

    return (
        <div>
  <Navbar/>

  <div id="backimg" >
  <Montyhly plan={plan} changeplan={changeplan}/>
 
   <Heading backgroundColor={colorMode=="dark"?"#26262f":"white"}>Super charge your work with add-ons</Heading>

   <VStack mt={16} spacing={4} backgroundColor={colorMode=="dark"?"#26262f":"white"}>

    <Box  boxShadow='lg'  w="80%" p={8} display="flex" justifyContent="space-between">
      <Box textAlign="left">
           <Heading as="h2" size="md">Collaborators</Heading>
           <Text>Invite other users to specific projects for limited access and functionality.</Text>
      </Box>

      <Heading as="h1">Free</Heading>

    </Box>



    <Box  boxShadow='lg'  w="80%" p={8} display="flex" justifyContent="space-between">
      <Box textAlign="left">
           <Heading as="h2" size="md">Partners</Heading>
           <Text>Invite other users for full account access and company management.</Text>
      </Box>

      <Text><Heading as="h1">$9</Heading>/MONTH</Text>

    </Box>


    <Box  boxShadow='lg'  w="80%" p={8} display="flex" justifyContent="space-between">
      <Box textAlign="left">
           <Heading as="h2" size="md">Bonsai Tax</Heading>
           <Text>Track expenses, identify write-offs, and estimate quarterly taxes easily.</Text>
           <Text color="teal">Learn More <ChevronRightIcon/></Text>
      </Box>

      <Text><Heading as="h1">$10</Heading>/MONTH</Text>

    </Box>


   </VStack>
  

   <Box  display="flex" bg="teal.50" justifyContent="space-between" m="auto" p={27} mt={40}  w="70%">
        <Box backgroundColor={colorMode=="dark"?"#26262f":"white"} textAlign="left"><Heading as="h1" size="2xl">It’s <span style={{color:"teal"}}>your</span> business.</Heading>
            <Heading as="h1" size="2xl"> We’re here to help it grow.</Heading>
        </Box>

       <Box  p={10} w="200px"><Button w="full" colorScheme="teal">Start Free</Button></Box> 

   </Box>


    <Heading mt={20} color="teal">Frequently Asked Questions</Heading>

    <Accordion backgroundColor={colorMode=="dark"?"#26262f":"white"} allowToggle  width="60%" margin="auto" mt={10}>
  <AccordionItem border="none">
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>

          <Text className="ques">How does the free trial work?</Text>
        </Box>
        <AccordionIcon color="gray.500"/>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} textAlign="left">
    When you start your trial with Bonsai you'll receive full, 
    unlimited access to all of Bonsai's Workflow or Workflow Plus Features! 
    You will need to enter your credit card information to begin your trial, 
    but don't worry - we won't charge you anything until the subscription ends! 
    If you wish to cancel at any time during the trial period, you can do so through your Subscriptions Settings Page.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem border="none">
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        <Text className="ques">Can I change plans anytime?</Text>
        </Box>
        <AccordionIcon color="gray.500" />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} textAlign="left">
    Yes, you can from within your account. 
    If you have already subscribed to a plan, or want to downgrade or upgrade your current one,
     you can do this by going to your "Settings" and "Subscription".
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem border="none">
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>

          <Text className="ques">How do I pause my Bonsai subscription?</Text>
        </Box>
        <AccordionIcon color="gray.500"/>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} textAlign="left">
    We totally understand that with the nature of freelancing, 
    work ebbs and flows so you might not always need your Bonsai subscription to remain active! 
    The good news is that you can cancel or pause your monthly subscription at any time without penalty. 
    Once cancelled, you'll be able to continue logging in to access all your documents and even continue to use our free features,
     like Time Tracking! In order to cancel your subscription, login to your Bonsai account.
    </AccordionPanel>
  </AccordionItem >

  <AccordionItem border="none">
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>

          <Text className="ques">What is your refund policy?</Text>
        </Box>
        <AccordionIcon color="gray.500"/>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} textAlign="left">
    If you contact us within 2 weeks of being charged for your subscription, 
    we will be happy to issue a refund for you!Beyond those 2 weeks, 
    you will need to cancel or modify the subscription from the Subscriptions Tab in Settings to avoid future charges, 
    but refunds will not be issued. This applies to both monthly and annual plans.
    </AccordionPanel>
  </AccordionItem>

</Accordion>
  
</div>

  <Footer/>
        </div>
    )
}

export default Price;