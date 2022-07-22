import React from "react";
import { Box } from "@chakra-ui/react";

const profileImg = {
  source: require("../assets/ProfilePic.jpg"),
  description: "Logan Monson's profile",
};

export default function About() {
  return (
    <Box>
      <h1>About me</h1>
      <img src={profileImg.source} alt={profileImg.description} />
      <p>This is where I will be talking about who I am and what i do.</p>
      <p>Hi!</p>
      <p>
        My name Is Logan Monson; I'm a Seattle-based barista that has decided to
        step into the world of coding!
      </p>
      <p>
        I started learning about fullstack development in 2022, and have created
        applications that have used Mongo, MySQL, and React; as well as
        designing Progressive Web Applications and express-driven programs.
      </p>
      <p>
        I love to write music, play videogames, and play tabletop games with my
        friends!
      </p>
    </Box>
  );
}
