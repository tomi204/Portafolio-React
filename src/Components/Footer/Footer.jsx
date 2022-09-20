import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import "./Footer.css"
const Footer = () => {
    return (
        <footer className='footer'>
            <div className='derechos'>
                <h4>All rights reserved©</h4>
            </div>
            <h3>Created with love by Tomás Oliver ♡</h3>
            <div className='redes-footer'>
                <a href="https://github.com/tomi204" target={'_blank'}>
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/tomi204/" target={'_blank'}>
                    <FaLinkedin />
                </a>
                <a href="https://twitter.com/tomiioliver">
                    <FaTwitter />
                </a>
                <a href="https://www.instagram.com/tomi204_/" target={'_blank'}>
                    <FaInstagram />
                </a>

            </div>
        </footer>
    )
}

export default Footer