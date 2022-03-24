import React, { useState } from 'react'

export default function Navbar(props) {
    return (
        <header className='header'>
            <h2>Jared Haralson - Web Developer</h2>
            <ul>
                <a href='#about'>About Me</a>
                <a href='#MyWork'>Works</a>
                <a href='#collab'>Collaborators Corner</a>
            </ul>
        </header>
    )
}
