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
                    <h2>My Work</h2>
                </div>
                <div className="card">
                    {projects.map((project) => (
                        <div className="card-details">
                                <a href={project.link}>
                                <h3>{project.project}</h3>
                                <img src={disaster} alt="project-screenshot" id="card-img" />
                            </a>
                            <p><h3>Description:</h3> {project.description}</p>
                            <a href={project.repo}>Project Repository</a> 
                        </div>
                ))}
                </div>
            </div>
            <div className="skills-header">
                    <h2>Skills</h2>
            </div>
            <div className="skills-card">
                {skills.map((skill) => (
                    <div>
                        <h4>{skill.title}</h4>
                        <p>{skill.skill}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
}