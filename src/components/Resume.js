import React from 'react'
import { skills } from '../utils/skillData'

export default function Resume() {
    return (
        <section id="resume">
            <div className="resume-container">
                <div className="resume-body">
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
                </div>
                <div className="resume-link">
                    <h2>Download Resume: <a href="https://github.com/jhara0994/react-portfolio/blob/main/src/images/Resume.pdf">Jared Haralson</a></h2>
                </div>
            </div>
        </section>
    )
}