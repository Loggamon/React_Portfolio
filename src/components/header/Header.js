import React, { useState } from "react";
import { Box, Flex, Spacer } from "@chakra-ui/react";

import Navigation from "../navigation/Navigation";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";

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
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <React.Fragment>
      <Flex
        padding="20px"
        h="100px"
        justifyContent="space-between"
        align="center"
        bg="#0D0221"
        color="#C2E7D9"
      >
        <h1>Logan Monson</h1>
        <header>
          <Navigation
            bg="#A6CFD5"
            color="#0D0221"
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </header>
      </Flex>
      <Box backgroundImage={background.main}>{renderPage()}</Box>
    </React.Fragment>
  );
}
