import React from "react";
import { Wrap, WrapItem, Box } from "@chakra-ui/react";

function Project(props) {
  console.log(props);

  return (
    <Wrap spacing="30px" justify="center">
      {props.projects.map((project) => (
        <WrapItem flexDirection="column" alignItems="center" key={project.id}>
          <h5>{project.name}</h5>
          <a href={project.url} target="_blank" rel="noreferrer">
            <img src={project.image} alt="An animation of the project" />
          </a>
          <p>{project.description}</p>
        </WrapItem>
      ))}
    </Wrap>
  );
}

export default Project;
