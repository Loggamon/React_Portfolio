import React from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import "../navigation/navigation.css";

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
      <WrapItem className="wrapper">
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
      <WrapItem className="wrapper">
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
      <WrapItem className="wrapper">
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
      <WrapItem className="wrapper">
        <a
          href="https://docs.google.com/document/d/1V2BQ-XZDMoU0LL5cbFCP0Ng9m6OArVc41NRnDj8RZWw/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
          onMouseOver={MouseOverNav}
          onMouseLeave={MouseLeaveNav}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </WrapItem>
    </Wrap>
  );
}

export default Navigation;
