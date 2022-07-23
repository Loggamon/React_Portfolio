import React from "react";
import { Wrap, Flex } from "@chakra-ui/react";

function Project(props) {
  console.log(props);

  return (
    <Wrap spacing="40px" justify="space-around">
      {props.projects.map((project) => (
        <Flex
          p="20px"
          flexDirection="column"
          alignItems="center"
          key={project.id}
        >
          <h5>{project.name}</h5>
          <a href={project.url} target="_blank" rel="noreferrer">
            <img src={project.image} alt="An animation of the project" />
          </a>
          <p>{project.description}</p>
        </Flex>
      ))}
    </Wrap>
  );
}

export default Project;
