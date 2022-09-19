import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import "./Footer.css"
const Footer = () => {
    return (
        <footer className='footer'>
            <div className='derechos'>
                <h3>All rights reserved©</h3>
            </div>
            <h3>Created with love by Tomas Oliver ♡</h3>
            <div className='redes-footer'>
                <a href="">
                    <FaGithub />
                </a>
                <a href="">
                    <FaLinkedin />
                </a>
                <a href="">
                    <FaTwitter />
                </a>
                <a href="">
                    <FaInstagram />
                </a>

            </div>
        </footer>
    )
}

export default Footer