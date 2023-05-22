import React from 'react';
import {  BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  Text,
  Button,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function Container(){
  return (
    <>
    <Text>Jeloo!!</Text>
    <Button>
      <Link to="/about">go to</Link>
    </Button>
    </>
  )
}

function About(){
  return(
    <>
    <Text>About@</Text>
    <Button>
      <Link to="/">Go to</Link>
    </Button>
    </>
  )
}


function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
            <ColorModeSwitcher justifySelf="flex-end" />
            <Routes>
              <Route exact path='/' element={<Container />} />
              <Route path="/about" element={<About />} />
            </Routes>

        </Box>
      </ChakraProvider>
    </Router>
  );
}

export default App;
