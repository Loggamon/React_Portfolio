import React from "react";
import Project from "../project/Project";

const projects = [
  {
    id: 1,
    name: "J.A.T.E. PWA",
    description:
      "A text-editor application that you can also download to you desktop!",
    image: require("../assets/JATEPWA.gif"),
  },
  {
    id: 2,
    name: "Exotic Car Auction",
    description: "A demonstration of a mySQL-based auction-site!",
    image: require("../assets/CarAuction.gif"),
  },
  {
    id: 3,
    name: "Model-View-Controller Demo",
    description: "This is demonstrated in a tech-blog style!",
    image: require("../assets/MVC.gif"),
  },
  {
    id: 4,
    name: "Social-Network API",
    description: "A social media network, using Mongo as a database!",
    image: require("../assets/SocialNetworkAPI.gif"),
  },
];

export default function Portfolio(props) {
  return (
    <div>
      <h1>My Projects</h1>
      <p>This is where I wil be hosting my projects.</p>
      <Project projects={projects} />;
    </div>
  );
}
