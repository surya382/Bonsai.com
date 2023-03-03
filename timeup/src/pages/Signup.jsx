import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, Divider, Flex, FormControl, FormHelperText, FormLabel, Heading, Image, Input, Select, Spacer, Text, useColorMode, useDisclosure, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import "./module.css"
import { useContext } from "react";
import { AuthContext } from "../context/Authcontext";


function Signup(){

  
  const init={
    email:"",
    password:"",
    name:"",
    country:""
  }


   const [user,setuser]=useState(init);
   const navigate=useNavigate();
   const { isOpen, onOpen, onClose } = useDisclosure()
   const cancelRef = React.useRef();

   const {state,dispatch}=useContext(AuthContext);

   const handlechange=(e)=>{

              const {name,value}=e.target;

              setuser({...user,[name]:value})
   }

          
   const register=(e)=>{
        e.preventDefault();

        if(user.email=="" || user.password=="" || user.password.length<6){
          onOpen();
        }
         
        else{

        
        dispatch({type:"signup",payload:user});
        setuser(init);
        navigate("/login");
         
        }
   }
       

    const logo="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg"
   
    const { colorMode, toggleColorMode } = useColorMode();

    return(
        <Box p={50} >
           
           <Box border="1px solid gray" className="signbox">
               
                <Box borderRight="1px solid gray" id="sidebox" >
                    
                    <Box>
                     <Box w="100px" >
                        <Image src={logo} w="full"/>
                        
                     </Box>
                       
                     <Text mt={5}>Join 500,000+ freelancers and agencies using Bonsai. </Text>
                     </Box>
                      
                    
                      
                     
                       
                       <Box>
                        <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c29a9feb660_quote-icon.svg" w={5}/>
                        <Text mt={4} fontSize={12}>Anyone doing #freelance work should use @bonsaiinc for contracts/payment. It's amazing and saves boatloads of time. </Text>
                       </Box>

                       

                </Box>

              <Box  p={20} textAlign="left">

                <Heading as="h1" fontSize="3xl">Try Bonsai free with your Workflow today </Heading>

                <Button w="400px" variant="outline" id="google" mt={10} textAlign="left">
                  <Box w="20px" mr={8}> <Image src="https://i.stack.imgur.com/22WR2m.png" w="full" h="full" /></Box>
                 <Text>Sign Up with Google</Text></Button>

                 <hr style={{marginTop:"30px"}}></hr>

                  





                 <FormControl mt={10}>

                 <FormLabel color="gray.500" fontSize={12}>EMAIL</FormLabel>
                  <Input type='email' placeholder="your@email.com" name="email" value={user.email} onChange={handlechange}/>
                    
                  <FormLabel color="gray.500" mt={5} fontSize={12}>FULL NAME</FormLabel>
                  <Input type='text' placeholder="Jane Smith" name="name"  value={user.name} onChange={handlechange}/>

                  <FormLabel color="gray.500" mt={5} fontSize={12}>PASSWORD</FormLabel>
                  <Input type='password' placeholder="*******" name="password"  value={user.password} onChange={handlechange}/>
                  <FormHelperText fontSize={11}>Your password must be at least 6 characters</FormHelperText>
                        
                 <Box display="flex" justifyContent="space-between" gap={4}>

                 <FormControl>
                  <FormLabel color="gray.500" mt={5} fontSize={12}>COUNTRY</FormLabel>
                   <Select placeholder='Select country' name="country" value={user.country} onChange={handlechange}>
                      <option value="india">India</option>
                      <option value="nigeria">Nigeria</option>
                      <option value="afganistan">Afganistan</option>
                      <option value="soumalia">Soumalia</option>
                      <option value="usa">USA</option>
                      <option value="russia">Russia</option>
                    </Select>

                   </FormControl>

                     
                   <FormControl>
                  <FormLabel color="gray.500" mt={5} fontSize={12}>CURRENCY</FormLabel>
                   <Select placeholder='INR'>
                      <option value="india">USD</option>
                      <option value="nigeria">MKL</option>
                      <option value="afganistan">RYL</option>
                      <option value="soumalia">CKT</option>
                      <option value="usa">KCC</option>
                      <option value="russia">RBL</option>
                    </Select>

                   </FormControl>


                  </Box>  
                </FormControl>

                 <Button w="400px" colorScheme="teal" mt={10} onClick={register}>Create Free Account</Button>
                 
                 <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Empty Fields
            </AlertDialogHeader>

            <AlertDialogBody>
              Please fill All The Entities
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={onClose} ml={3}>
                Ok
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>


                <hr style={{marginTop:"50px"}}></hr>

                <Text fontSize={12} textAlign="center">Already have an account?</Text>


               <Link to="/login"><Button w="400px" variant="outline" mt={10} colorScheme="teal">Login</Button></Link>

              </Box>

              
                
           </Box>

           


        </Box>
    )
}

export default Signup;