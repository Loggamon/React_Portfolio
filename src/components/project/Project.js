import React from "react";
import { Wrap, WrapItem, Box } from "@chakra-ui/react";

function Project(props) {
  console.log(props);

  return (
    <Wrap spacing="30px" justify="center">
      {props.projects.map((project) => (
        <WrapItem flexDirection="column" key={project.id}>
          <h5>{project.name}</h5>
          <img src={project.image} />
          <p>{project.description}</p>
        </WrapItem>
      ))}
    </Wrap>
  );
}

export default Project;
