import React from 'react'

export default class About {
    render() {
        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src="" alt="profile-pic" />
                    </div>
                    <div className=" nine columns main-col">
                        <h2>About Me</h2>
                        <div className="row">
                            <p className="bio"></p>
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <div className="contacts">
                                    <span className="address">1285 Alcovy Station Rd., Covington, GA</span>
                                    <span className="phone-number">404-285-4719</span>
                                    <span className="email">jharalson29@gmail.com</span>
                                    <span className="linkedIn"></span>
                                    <span className="github"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}