import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import "../header/header.css";

import Navigation from "../navigation/Navigation";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";

const background = {
  header: require("../assets/5011.png"),
  main: require("../assets/5013.png"),
};

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <React.Fragment>
      <Flex
        className="header"
        // padding="20px"
        // h="100px"
        // justifyContent="space-between"
        // align="center"
        // bg="#0D0221"
        // color="#C2E7D9"
        // position="sticky"
        // top="0px"
      >
        <h1>Logan Monson</h1>
        <header className="navbox">
          <Navigation
            className="navigation"
            // bg="#A6CFD5"
            // color="#0D0221"
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </header>
      </Flex>
      <Box backgroundImage={background.main}>{renderPage()}</Box>
    </React.Fragment>
  );
}
