import React from 'react'
import { projects } from '../projectData'
import { skills } from '../skillData'

export default function Portfolio (props) {
    return (
        <section id="portfolio">
            <div className="projects">
                <div className="project-header">
                    <h2>My Work</h2>
                </div>
                <div>
                    {projects.map((project) => (

                    <a href={project.heroku || project.link}>
                        <div>
                            <h3>{project.title}</h3>
                            <p>{project.subtitle}</p>
                            <p>{project.description}</p>
                        </div>
                    </a>
                ))}
                </div>
            </div>
            <div className="skills">
                <div className="skills-header">
                    <h2>Skills</h2>
                </div>
            <div className="skills-body">
                {skills.map((skill) => (
                    
                    <div>
                        <h4>{skill.title}</h4>
                        <p>{skill.description}</p>
                    </div>
                ))}
            </div>
            </div>
        </section>
    )
}