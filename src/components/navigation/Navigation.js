import React from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";

function Navigation({ currentPage, handlePageChange }) {
  function MouseOverNav(e) {
    e.target.style.color = "white";
    e.target.style.transition = ".3s";
    e.target.style.textShadowColor = "white";
    e.target.style.textShadowRadius = 15;
    e.target.style.transform = "scale(1.1)";
  }
  function MouseLeaveNav(e) {
    e.target.style.color = "";
    e.target.style.transition = ".2s";
    e.target.style.transform = "scale(1)";
  }
  return (
    <Wrap>
      <WrapItem p="20px">
        <a
          href="#about"
          onMouseOver={MouseOverNav}
          onMouseLeave={MouseLeaveNav}
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </WrapItem>
      <WrapItem p="20px">
        <a
          href="#portfolio"
          onMouseOver={MouseOverNav}
          onMouseLeave={MouseLeaveNav}
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </WrapItem>
      <WrapItem p="20px">
        <a
          href="#contact"
          onMouseOver={MouseOverNav}
          onMouseLeave={MouseLeaveNav}
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </WrapItem>
      <WrapItem p="20px">
        <a
          href="https://docs.google.com/document/d/1Av1A8wJ00ZBa_Jz-xChkAiVl_xn5x83XWSLQch_lWpo"
          target="_blank"
          rel="noreferrer"
          onMouseOver={MouseOverNav}
          onMouseLeave={MouseLeaveNav}
          // onClick={() => handlePageChange("Resume")}

          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </WrapItem>
    </Wrap>
  );
}

export default Navigation;
