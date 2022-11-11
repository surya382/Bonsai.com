import { Link,useNavigate } from "react-router-dom";
import React from "react";
import "./module.css"
import {Flex,Spacer,Box,HStack, Image, Text, Button, Input, Checkbox, useDisclosure, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter} from "@chakra-ui/react"
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
    
    
       
    const logo="https://document-export.canva.com/Nl5vY/DAFRXdNl5vY/4/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20221108%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221108T131355Z&X-Amz-Expires=6950&X-Amz-Signature=ce115259bea4df4c565581cfc5d50aa4ff1c530de920d07ae89b9d662dc3f0f3&X-Amz-SignedHeaders=host&response-expires=Tue%2C%2008%20Nov%202022%2015%3A09%3A45%20GMT"
   
    return(
       <Box  bg="rgba(0, 0, 0, 0.04)">
       <Flex justifyContent="space-between" p={5} borderBottom="1px solid grey">
              <Box   w="150px" h="60px">
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


            <Box  id="logbox">
                <Text fontSize={30}>Sign In</Text>

                <Button w="400px" variant="outline" id="google" mt={10} textAlign="left">
                  <Box w="20px" mr={8}> <Image src="https://i.stack.imgur.com/22WR2m.png" w="full" h="full" /></Box>
                 <Text>Sign In with Google</Text></Button>

                 <Text color="gray.500" mt={5}>----or----</Text>

                 <Input type='email' mt={5} w="400px" placeholder="Email" name="email" value={user.email} onChange={handlechange}/>

                 <Input type='password' mt={5} w="400px" placeholder="Password" name="password" value={user.password} onChange={handlechange}/>

                 <Box mt={5}><Checkbox >Remember me</Checkbox></Box>

                 <Button w="400px" colorScheme="teal" mt={5} onClick={loginuser}>Log In</Button>

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