import React from 'react'
import GtWork from '../data'

export default function MyWork (props) {
    return (
        <section id="work">
            <div className="work-header">
                <h2>My Work</h2>
            </div>
            <div>
                {GtWork.map((work) => (

                <a href={work.heroku || work.link}>
                    <div>
                        <h3>{work.title}</h3>
                        <p>{work.subtitle}</p>
                        <p>{work.description}</p>
                    </div>
                </a>
            ))}
            </div>
        </section>
    )
}