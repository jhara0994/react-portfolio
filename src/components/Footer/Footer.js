import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import style from './Footer.module.css'

export default function Footer () {
        return (
            <footer class={style.footer} id="footer">
                <div className="footerContacts">
                    <a href="tel:+4042854719" className={style.contactIcon}><PhoneIcon /></a>
                    <a href="mailto: jharalson29@gmail.com?subject=Project Ideas" className={style.contactIcon}><EmailIcon /></a>
                    <a href="https://github.com/jhara0994" className={style.contactIcon}><GitHubIcon /></a>
                    <a href="https://www.linkedin.com/in/jared-haralson-179b16123/" className={style.contactIcon}><LinkedInIcon /></a>
                </div>
            </footer>
        )
}