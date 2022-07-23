import React from "react";
import { Wrap, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Project(props) {
  function MouseOverRepo(e) {
    e.target.style.color = "white";
    e.target.style.transition = ".3s";
  }
  function MouseLeaveRepo(e) {
    e.target.style.color = "";
    e.target.style.transition = ".2s";
  }

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
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            onMouseOver={MouseOverRepo}
            onMouseLeave={MouseLeaveRepo}
          >
            {<FontAwesomeIcon icon={faGithub} color="darkgreen" />} Github Repo!
          </a>
          <p>{project.description}</p>
        </Flex>
      ))}
    </Wrap>
  );
}

export default Project;
