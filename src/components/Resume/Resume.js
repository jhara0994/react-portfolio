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
                    <h2>Download Resume: <a href="https://drive.google.com/file/d/1-2W_Dxx0Feq93Z0L7CUPdMbAgJOVL7Nk/view?usp=sharing">Jared Haralson</a></h2>
                </div>
            </div>
        </section>
    )
}