import React, { useState } from "react";
import { Box } from "@chakra-ui/react";

import Navigation from "../navigation/Navigation";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";

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
      <Box bg="#0D0221" color="#C2E7D9">
        <header>
          <Navigation
            bg="#A6CFD5"
            color="#0D0221"
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </header>
      </Box>
      <main>{renderPage()}</main>
    </React.Fragment>
  );
}
