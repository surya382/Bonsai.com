import { Link,useNavigate } from "react-router-dom";
import React from "react";
import "./module.css"
import {Flex,Spacer,Box,HStack, Image, Text, Button, Input, Checkbox, useDisclosure, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, useColorMode} from "@chakra-ui/react"
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/Authcontext";

function Login(){
 const init={
    email:"",
    password:""
 }

   

    const [user,setuser]=useState(init);

    const {state}=useContext(AuthContext)
    const navigate=useNavigate();

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode();

  const cancelRef = React.useRef()

    const handlechange=(e)=>{

        const {name,value}=e.target;

        setuser({...user,[name]:value})
    }
     

    const positive=()=>{

       onOpen();
       
    }

    

    const loginuser=()=>{
             
        state.map((el)=>{
            if(el.email==user.email && el.password==user.password){
                return positive();
            }

            else{
              alert("Invalid email or Password")
            }

        })


       

    }

    const nav=()=>{

        onClose();
        navigate("/");
    }
    
    
       
    const logo="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg"
   
    return(
       <Box  bg="rgba(0, 0, 0, 0.04)">
       <Flex justifyContent="space-between" p={5} borderBottom="1px solid grey">
              <Box   w="150px" h="60px" >
                <Image src={logo} w="100%" h="90%" />
                </Box>

                <Spacer/>

                <Box>
                    <HStack spacing={10}>
                       <Link to="/login"><Text>Login</Text></Link> 

                       <Link to="/signup"><Text>Sign up</Text></Link>
                    </HStack>
                </Box>


       </Flex>


            <Box  id="logbox" backgroundColor={colorMode=="dark"?"#26262f":"white"}>
                <Text fontSize={30} backgroundColor={colorMode=="dark"?"#26262f":"white"}>Sign In</Text>

                <Button backgroundColor={colorMode=="dark"?"#26262f":"white"} w="400px" variant="outline" id="google" mt={10} textAlign="left">
                  <Box backgroundColor={colorMode=="dark"?"#26262f":"white"} w="20px" mr={8}> <Image src="https://i.stack.imgur.com/22WR2m.png" w="full" h="full" /></Box>
                 <Text backgroundColor={colorMode=="dark"?"#26262f":"white"}>Sign In with Google</Text></Button>

                 <Text backgroundColor={colorMode=="dark"?"#26262f":"white"} color="gray.500" mt={5}>----or----</Text>

                 <Input backgroundColor={colorMode=="dark"?"#26262f":"white"} type='email' mt={5} w="400px" placeholder="Email" name="email" value={user.email} onChange={handlechange}/>

                 <Input backgroundColor={colorMode=="dark"?"#26262f":"white"} type='password' mt={5} w="400px" placeholder="Password" name="password" value={user.password} onChange={handlechange}/>

                 <Box backgroundColor={colorMode=="dark"?"#26262f":"white"} mt={5}><Checkbox >Remember me</Checkbox></Box>

                 <Button backgroundColor={colorMode=="dark"?"#26262f":"white"} w="400px" colorScheme="teal" mt={5} onClick={loginuser}>Log In</Button>

                 <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Login Successfull
            </AlertDialogHeader>

            

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={nav}>
                ok
              </Button>
              
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>



     

                <Box color="teal" mt={5}> <Link >Reset Password</Link></Box>

                <Box color="teal" mt={5}> <Link >Resend Verification Email</Link></Box>

            </Box>
       

       </Box>
    )
}

export default Login;