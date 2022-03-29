import React, { Component } from 'react'
import me from '../images/me.jpeg'

export default function About () {
        return (
            <section id="about">
                <div className="row">
                    <div className="columns">
                        <img className="profile-pic" src={me} alt="profile-pic" />
                    </div>
                    <div className="bio-container">
                        <h2 id="about-option">About Me</h2>
                        <div className="bio">
                            <p className="bio-one"> 
                                I am a full-stack developer that is always looking to learn more and develop all types of web applications. My current programming interest is 
                                in learning more about REACT, VIEW, and Angular as well as looking into other programming languages like Python and Haskell. My personal interest 
                                range from space travel to stock market research and from sports and outdoors to automotive work. I would like to use coding skills to combine my 
                                personal interest with my programming interest and build an application that many others could and would enjoy using.
                            </p>
                            <p className="bio-two">
                                If you are interested in utilizing my skills, please do not hesitate to reach out. There is a form in the Collaborator's Corner you can complete
                                if you would like to develop and application with me. I look forward to hearing from all of you! 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
}

