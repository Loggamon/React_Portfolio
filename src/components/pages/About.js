import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

const profileImg = {
  source: require("../assets/ProfilePic.png"),
  description: "Logan Monson's profile",
};

export default function About() {
  return (
    <Box>
      <Text fontSize="50px">
        <h1 m="20px" fontSize="50px">
          About me
        </h1>
      </Text>
      <Flex alignItems="center" justify="space-around">
        <img
          p="20px"
          height="100px"
          width="500px"
          src={profileImg.source}
          alt={profileImg.description}
        />
        <div padding="20px" direction="column">
          <p>This is where I will be talking about who I am and what i do.</p>
          <p>Hi!</p>
          <p>
            My name Is Logan Monson; I'm a Seattle-based barista that has
            decided to step into the world of coding!
          </p>
          <p>
            I started learning about fullstack development in 2022, and have
            created applications that have used Mongo, MySQL, and React; as well
            as designing Progressive Web Applications and express-driven
            programs.
          </p>
          <p>
            I love to write music, play videogames, and play tabletop games with
            my friends!
          </p>
        </div>
      </Flex>
    </Box>
  );
}
