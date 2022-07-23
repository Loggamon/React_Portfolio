import React from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";

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
      <Flex alignItems="center">
        <Image
          boxSize={500}
          src={profileImg.source}
          alt={profileImg.description}
        />

        <Box m="10px" p="20px" direction="column">
          <p>Hi!</p>
          <p>
            My name Is Logan Monson; I'm a Seattle-based barista that has
            decided to step into the world of coding!
          </p>
          <p>
            I am currently enrolled at the University of Washington, studying to
            become a FullStack-Developer. I have created applications that have
            used Mongo, MySQL, and React; as well as designing Progressive Web
            Applications and express-driven programs. My skills include;
          </p>
          <ul>
            <li>JavaScript, HTML, and CSS Stylings</li>
            <li>Node</li>
            <li>MySQL, NoSQL</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
            <li>and React!</li>
          </ul>
          <p>
            I love to write music, problem-solve, play videogames, and play
            tabletop games with my friends!
          </p>
        </Box>
      </Flex>
    </Box>
  );
}
