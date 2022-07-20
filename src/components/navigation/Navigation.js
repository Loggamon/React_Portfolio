import React from "react";
import { Wrap, WrapItem, Box } from "@chakra-ui/react";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <Wrap>
      <WrapItem>
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </WrapItem>
      <WrapItem>
        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </WrapItem>
      <WrapItem>
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </WrapItem>
      <WrapItem>
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </WrapItem>
    </Wrap>
  );
}

export default Navigation;
