import React from 'react'
import { skills } from '../../utils/skillData'
import style from './Resume.module.css'

export default function Resume() {
    return (
        <section id="resume">
            <div className={style.resumeContainer}>
                <div className="resume-body">
                    <h2>Skills</h2>
                    <div className={style.projectContainer}>
                    {skills.map((skill, i) => (
                        <div className={style.cardContainer}>
                            <div className={style.card}>
                                <div className={style.skills} key={i}>
                                    <h3>{skill.title}</h3>
                                    <p>{skill.skill}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
                <div className={style.resumeLink}>
                    <h2>Download Resume: <a href="https://github.com/jhara0994/react-portfolio/blob/main/src/images/Resume.pdf">Jared Haralson</a></h2>
                </div>
            </div>
        </section>
    )
}