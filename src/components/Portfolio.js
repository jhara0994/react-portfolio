import React from 'react'
import { projects } from '../utils/projectData'

export default function Portfolio () {
    return (
        <section id="portfolio">
            <div className="projects">
                <div className="project-header">
                    <h2 className="title">Portfolio</h2>
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
        </section>
    )
}
