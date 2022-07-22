import React from "react";
import { transition, Wrap, WrapItem } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faStackOverflow } from "@fortawesome/free-brands-svg-icons"

const appColors = {
  github: "green",
  linkedin: "lightblue",
  stoFlow: "yellow"
}
export default function Footer() {

  function MouseOver(e) {

    if (e.target.id==="github") {
      e.target.style.color = appColors.github;
      e.target.style.transition = ".2s";
      e.target.style.transform = "scale(1.3)"

    } else if (e.target.id==="linkedIn"){
      e.target.style.color = appColors.linkedin;
      e.target.style.transition = ".2s";
      e.target.style.transform = "scale(1.3)"

    } else if (e.target.id==="stoFlow") {
      e.target.style.color = appColors.stoFlow;
      e.target.style.transition = ".2s";
      e.target.style.transform = "scale(1.3)"

    }
  }
  function MouseLeave(e) {
    e.target.style.color = ""
    e.target.style.transition = ".2s"
    e.target.style.transform = "scale(1)"
  }
  return (
    <Wrap flexDirection="row" flexShrink="0" bg="#0D0221" color="#C2E7D9" justify="center">
      <WrapItem p="20px">
        <a href="https://github.com/Loggamon" target="_blank" rel="noreferrer">
          <FontAwesomeIcon size="2x" id="github" icon={faGithub} onMouseOver={MouseOver} onMouseOut={MouseLeave}/>
        </a>
      </WrapItem>
      <WrapItem p="20px">
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon size="2x" id="linkedIn" icon={faLinkedin} onMouseOver={MouseOver} onMouseOut={MouseLeave}/>
        </a>
      </WrapItem>
      <WrapItem p="20px">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">
          <FontAwesomeIcon size="2x" id="stoFlow" icon={faStackOverflow} onMouseOver={MouseOver} onMouseOut={MouseLeave}/>
        </a>
      </WrapItem>
    </Wrap>
  );
}
