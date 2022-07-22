import React from "react";
import Project from "../project/Project";

import { Box, Text } from "@chakra-ui/react";

const projects = [
  {
    id: 1,
    name: "J.A.T.E. PWA",
    description:
      "A text-editor application that you can also download to you desktop!",
    image: require("../assets/JATEPWA.gif"),
    url: "https://loggamons-text-editor.herokuapp.com/",
  },
  {
    id: 2,
    name: "Exotic Car Auction",
    description: "A demonstration of a mySQL-based auction-site!",
    image: require("../assets/CarAuction.gif"),
    url: "https://exotic-car-auction-abln.herokuapp.com/",
  },
  {
    id: 3,
    name: "Model-View-Controller Demo",
    description: "This is demonstrated in a tech-blog style!",
    image: require("../assets/MVC.gif"),
    url: "https://tech-blog-social-platform.herokuapp.com/",
  },
  {
    id: 4,
    name: "Social-Network API",
    description: "A social media network, using Mongo as a database!",
    image: require("../assets/SocialNetworkAPI.gif"),
    url: "https://github.com/Loggamon/Social-Network-API",
  },
];

export default function Portfolio(props) {
  return (
    <Box>
      <Text fontSize="50px">
        <h1>My Projects</h1>
      </Text>
      <p>These are some of the projects I have worked on!</p>
      <Project projects={projects} />;
    </Box>
  );
}
