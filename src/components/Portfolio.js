import React, { Component } from 'react'
import { projects } from '../utils/projectData'
import { skills } from '../utils/skillData'
import disaster from '../images/disaster.jpeg'
export default class Portfolio extends Component {
    render() {
    return (
        <section id="portfolio">
            <div className="projects">
                <div className="project-header">
                    <h2>Portfolio</h2>
                </div>
                {projects.map((project, i) => (
                <div className="project-container">
                    <div className="card row">
                        <div className="card-details" key={i}>
                                <a href={project.link}>
                                <h3>{project.project}</h3>
                                <img src={project.image} title="project-screenshots" alt={project.project} id="card-img" />
                            </a>
                            <p><h3>Description:</h3> {project.description}</p>
                            <a href={project.repo}>Project Repository</a> 
                        </div>                   
                    </div>
                </div>
                ))}
            </div>
            <div className="skills-header">
                <h2>Skills</h2>
            </div>
            {skills.map((skill, i) => (
            <div className="project-container">
                <div className="card skills-card row">
                    <div className="skills" key={i}>
                        <h3>{skill.title}</h3>
                        <p>{skill.skill}</p>
                    </div>
            </div>
            </div>
            ))}
        </section>
    )
}
}