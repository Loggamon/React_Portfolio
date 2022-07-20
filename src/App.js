// import logo from "./logo.svg";
// import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <Header />
      <Footer />
    </ChakraProvider>
  );
};

export default App;
