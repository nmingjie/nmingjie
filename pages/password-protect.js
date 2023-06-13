import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from 'react';

import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  InputRightElement,
  Icon,
  InputGroup,
  Alert, AlertIcon, AlertDescription,
  CircularProgress,
  Stack,
  useColorMode,
  Flex

} from '@chakra-ui/react'

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

import { NextRequest, NextResponse } from "next/server";
import Paragraph from '../components/paragraph';

const PasswordProtectPage = (path) => {
  const router = useRouter();
  // const error = router.query.error;

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async event => {
    event.preventDefault();
    setIsLoading(true);
    try {
      // await userLogin({ email, password });

      await fetch("/api/password-protect", {
        method: "POST",
        body: JSON.stringify({
          password: password
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
        , redirect: 'follow'
      })
      setIsLoading(false);
      // window.location.href = res.url;
      // return NextResponse.redirect(new URL(res.url))

    } catch (error) {
      console.log(error.message);
      setError('Invalid password');
      setIsLoading(false);
      setPassword('');
    }

    // const { colorMode } = useColorMode();

    // const bgColor = {
    //   light: '#EFE7DA',
    //   dark: '#201F24',
    // };
  };


  return (

    // <Container width={'100%'}>
    <Box align={'center'} mt = {8} mb={8}>
      <Box width={'80%'} align={'center'}>


        <Heading as="h1" >The page is password protected.</Heading>
        {/* <Text>Please contact the owner.</Text> */}
        <Divider my={6} />

        {error && <Box my={4}>
          <Alert status="error" borderRadius={4}>
            <AlertIcon />
            <AlertDescription>{"Incorrect Password"}</AlertDescription>
          </Alert>
        </Box>}

        <form action="/api/password-protect" method="post" >
          {/* onSubmit={handleSubmit}  */}
          {/* action="/api/password-protect" method="post" */}
          <FormControl isRequired mt={6}>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                variant='filled'
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="*******"
                size="lg"
                onChange={event => setPassword(event.currentTarget.value)}
              />
              <InputRightElement width="3rem">
                <Button h="1.5rem" size="sm" onClick={handlePasswordVisibility}>
                  {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button
            colorScheme="teal"
            variant="outline"
            type="submit"
            width="full"
            mt={4}
          >
            {isLoading ? (
              <CircularProgress isIndeterminate size="24px" color="teal" />
            ) : (
              'Submit'
            )}
          </Button>

        </form>

      </Box>
    </Box>


  );
};

export default PasswordProtectPage;