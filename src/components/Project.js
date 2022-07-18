import React from 'react';

function Project(props) {
    console.log(props);

    return (
        <ul>
            {props.projects.map(project => (
                <li key={project.id}>
                  <h5>{project.name}</h5>
                  <img src={project.image}/>
                  <p>{project.description}</p>
                </li>
            ))}
        </ul>
    );
}

export default Project;