import React from 'react'
import { FaIdCard, FaMoon, } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {
    return (
        <div className='navbar'>
            <li className='navbar-list'>
                 <Link to={"/"}>
                    <h3>HOME</h3>
                </Link>
                <Link to={"/Projects"}>
                    <h3>PROJECTS</h3>
                </Link>
                <Link to={"/Skills"}>
                    <h3>SKILLS</h3>
                </Link>

   

            </li>
        </div>
    )
}

export default Navbar