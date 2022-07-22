// import logo from "./logo.svg";
// import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import { ChakraProvider } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <Text fontSize="25px" fontFamily="sans-serif">
        <Header />
        <Footer />
      </Text>
    </ChakraProvider>
  );
};

export default App;
