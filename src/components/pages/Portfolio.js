import React from 'react';
import Project from '../Project';

const projects = [
    {
        id: 1,
        name: "Project 1",
        description: "This is a description!",
        image: require('../assets/head.png'),
    },
    {
        id: 2,
        name: "Project 2",
        description: "This is a description!",
        image: require('../assets/head.png'),
    },
    {
        id: 3,
        name: "Project 3",
        description: "This is a description!",
        image: require('../assets/head.png'),
    },
]

export default function Portfolio(props) {
    return (
        <div>
            <h1>My Projects</h1>
            <p>
                This is where I wil be hosting my projects.
            </p>
            <Project projects={projects} />;
        </div>
    );
}