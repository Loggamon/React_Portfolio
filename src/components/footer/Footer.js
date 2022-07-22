import React from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <Wrap flexDirection="row" flexShrink="0" bg="#0D0221" color="#C2E7D9">
      <WrapItem>
        <FontAwesomeIcon icon="fa-github-square" />
        <p>Github</p>
      </WrapItem>
      <WrapItem>
        <p>LinkedIn</p>
      </WrapItem>
      <WrapItem>
        <p>Stacked Overflow</p>
      </WrapItem>
    </Wrap>
  );
}
