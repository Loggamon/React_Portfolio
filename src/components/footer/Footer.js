import React from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Wrap flexDirection="row" flexShrink="0" bg="#0D0221" color="#C2E7D9">
          <WrapItem>
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
