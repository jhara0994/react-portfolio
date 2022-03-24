import React, { useState } from 'react'

export default function Navbar() {
    return (
        <header className='header'>
            <h2>Jared Haralson - Web Developer</h2>
            <ul>
                <a href='#about'>About Me</a>
                <a href='#work'>Works</a>
                <a href='#collab'>Collaborators Corner</a>
            </ul>
        </header>
    )
}
