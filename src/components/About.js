import React from 'react'
import me from '../me.jpeg'

export default function About (props) {
        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src="" alt="profile-pic" />
                    </div>
                    <div className=" nine columns main-col">
                        <h2>About Me</h2>
                        <img src={me} alt="profile-pic" />
                        <div className="row">
                            <p className="bio"> 
                                I am a full-stack developer that is always looking to learn more and develop all types of web applications. My current programming interest is 
                                in learning more about REACT, VIEW, and Angular as well as looking into other programming languages like Python and Haskell. My personal interest 
                                range from space travel to stock market research and from sports and outdoors to automotive work. I would like to use coding skills to combine my 
                                personal interest with my programming interest and build an application that many others could and would enjoy using.
                                <br></br>
                                If you are interested in utilizing my skills, please do not hesitate to reach out. There is a form in the Collaborator's Corner you can complete
                                if you would like to develop and application with me. I look forward to hearing from all of you! 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
}
