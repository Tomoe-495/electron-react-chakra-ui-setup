import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Button,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const { pathname } = window.location;

console.log(pathname);


function Container(){
  return (
    <>
    <Text>Jeloo!!</Text>
    <Button>
      <a href="/about">About</a>
    </Button>
    </>
  )
}

function About(){
  return (
    <>
    <Text>About!!</Text>
    <Button>
      <a href="/">Home</a>
    </Button>
    </>
  )
}

function Pages(){
  if (pathname === "/"){
    return <Container />;
  }else if(pathname === "/about"){
    return <About />;
  }
}


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
          <ColorModeSwitcher pos="fixed" right="1" top="1" />
          <Pages />
      </Box>
    </ChakraProvider>
  );
}

export default App;
