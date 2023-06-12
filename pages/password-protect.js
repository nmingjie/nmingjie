import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

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

} from '@chakra-ui/react'

const PasswordProtectPage = (path) => {
  const router = useRouter();
  const error = router.query.error;
  return (

    <Container pt={8} pb={8} width='100%'>

      <Heading as="h1" >The page is password protected.</Heading>
      {/* <Text>Please contact the owner.</Text> */}
      <Divider my={6} />
      <Text> Password:</Text>
      <form action="/api/password-protect" method="post">
      <div 
      >
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              name="password"
              className="input input-bordered"
            />
            <input type="hidden"
              name="path"
              value={path}
            />
          </div>
        </div>
        {error && (
            <label className="label">
              <span className="label-text text-error">{error}</span>
            </label>
          )}
        <button ml="100px" >Submit </button>
      </div>

      </form>


      {/* <FormControl action="/api/password-protect" method="post">
        <FormLabel>Password</FormLabel>
        <Input type='text' name='passsword' />
        <FormHelperText>Please contact the owner</FormHelperText>
        <Button
          mt={4}
          colorScheme='teal'
          // isLoading={props.isSubmitting}
          type='submit'
        >
          Submit
        </Button>
      </FormControl> */}


      {/* <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button colorScheme="teal">Return to home</Button>
        </NextLink>
      </Box> */}
    </Container>


    // <div className="container">
    //   <div className="grid place-content-center min-h-screen">
    //     <div className="flex flex-col items-center gap-4">
    //       <h1 className="text-2xl">This Page is Password Protected. </h1>
    //        <Image
    //         src="/under-development.svg"
    //         alt="under development"
    //         width={250}
    //         height={250}
    //       /> 
    //       <p>Enter Password:</p>

    //       <form action="/api/password-protect" method="post">
    //         <div className="form-control">
    //           {error && (
    //             <label className="label">
    //               <span className="label-text text-error">{error}</span>
    //             </label>
    //           )}
    //           <div className="input-group">
    //             <input
    //               type="text"
    //               name="password"
    //               className="input input-bordered"
    //             />
    //             <input type="hidden"
    //                   name="path"
    //                   value = {path}
    //             /> 
    //             <button className="btn">Login</button>
    //           </div>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>

  );
};

export default PasswordProtectPage;