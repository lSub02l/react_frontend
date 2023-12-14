// src/components/RegisterPage.js
import React, { useState } from 'react';
import WithSubnavigation from '../components/Navigation'
import httpClient from '../utils/httpClient';
import { useNavigate} from 'react-router-dom';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  VStack,
  useToast,
} from '@chakra-ui/react';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [psswd, setpsswd] = useState('');
    const toast = useToast()
    const navigation = useNavigate()

    const handleRegister = async () => {
        const {data} = await httpClient.post("/register", {email, psswd} )
        console.log(data)

        toast({
            title: data["message"],
            status: data["ok"] ? "success" : "error",
            duration: 4000,
            isClosable: true,
        })  
        if (data['ok']) {
            navigation("/HomePage")
        }
    };

    return (
        <div>
        <WithSubnavigation/>
        <VStack marginTop={20} spacing={8} align="center">
        <Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg" width="400px">
            <Heading mb={4}>Register</Heading>
            <FormControl>
            <FormLabel>E-mail</FormLabel>
            <Input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </FormControl>
            <FormControl mt={4}>
            <FormLabel>psswd</FormLabel>
            <Input
                type="password"
                placeholder="Enter your password"
                value={psswd}
                onChange={(e) => setpsswd(e.target.value)}
            />
            </FormControl>
            <Button
            colorScheme="teal"
            mt={4}
            onClick={handleRegister}
            isFullWidth
            >
            Register
            </Button>
        </Box>
        </VStack>
        </div>
  );
};

export default RegisterPage;