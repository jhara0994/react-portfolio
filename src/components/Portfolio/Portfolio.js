import React from 'react'
import { projects } from '../../utils/projectData'
import style from './Portfolio.module.css'

export default function Portfolio () {
    return (
        <section id="portfolio">
            <div className={style.projects}>
                <h2>Portfolio</h2>
                <div className={style.projectContainer}>
                {projects.map((project, i) => (
                <div className={style.cardContainer}>
                    <div className={style.card}>
                        <div className={style.cardDetails} key={i}>
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
            </div>
        </section>
    )
}
