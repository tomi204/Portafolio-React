import React from 'react'
import { FaIdCard, FaMoon, FaSun } from "react-icons/fa";
import "./Navbar.css"
const Navbar = () => {
    return (
        <div className='navbar'>
            <li className='navbar-list'>
                <a href="#navbar">
                    <h3>Home</h3>
                </a>
                <a href="#proyects">
                    <h3>Projects</h3>
                </a>
                <a href="">
                    <h3>Skills</h3>
                </a>
                <a href="">
                    <FaMoon className='moon' />
                </a>
                {/* <a href="">

                     <FaSun /> 
                </a> */}
                <a href="">
                    <h3>CV</h3><FaIdCard />
                </a>
            </li>
        </div>
    )
}

export default Navbar