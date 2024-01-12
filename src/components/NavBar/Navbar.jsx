import React from 'react'
import './Navbar.css';
import logo from '../images/ballers_logo.png';
import 'https://kit.fontawesome.com/b56885f075.js';
import { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOverlayClick = () => {
        setIsOpen(false);
    };
    return (

        <nav className={` ${isOpen ? 'open' : ''}`}>
            <div className="logo">

                <div className='containNav'>

                    <div className="boxNav">
                        <i class="fa-solid fa-bars" id='none' onClick={handleMenuClick}></i>
                        <a href='./'>                         <img src={logo} alt="Ballers Logo" />
                        </a>
                    </div>
                    <div className="boxNav display">
                        <ul class="navbar-bar">
                            <li class="bar-item"><a class="bar-link" href="./">Home</a></li>
                            <li class="bar-item"><a class="bar-link" href="./about">About Us </a></li>
                            <li class="bar-item"><a class="bar-link" href="./team">Team </a></li>
                            <li class="bar-item">|</li>
                            <li class="bar-item">
                                <label htmlFor=""><i class="fa-solid fa-earth-americas"></i></label>
                                <select className="selectNav" name="" id="">
                                    <option value="" selected>Language</option>
                                    <option value="">Arabic</option>
                                    <option value="">English</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                    <div className="boxNav ">
                        <button className='btn-Nav' src='./join'>Join Us</button>
                    </div>

                </div>
            </div>
            <div className="sidebar">
                <div className="logo">
                    <i class="fa-solid fa-bars" onClick={handleOverlayClick}></i>
                    <img src={logo} alt="Ballers Logo" id='sidebar-logo' />
                </div>
                <div className="sidebar-content">
                    <ul className="lists">
                        <li className="list">
                            <a href="./" className="nav-link">
                                <span className="link">Home</span>
                            </a>
                        </li>
                        <li className="list">
                            <a href="./about" className="nav-link">
                                <span className="link">About Us</span>
                            </a>
                        </li>
                        <li className="list">
                            <a href="./team" className="nav-link">
                                <span className="link">Team</span>
                            </a>
                        </li>
                        <li className="list">
                            <label htmlFor=""><i class="fa-solid fa-earth-americas"></i></label>
                            <select className="selectNav" name="" id="">
                                <option value="" selected>Language</option>
                                <option value="">test</option>
                                <option value="">test</option>
                            </select>
                        </li>
                        
                    </ul>
                    <div className="bottom-cotent">
                        <li className="list">
                            <a href="#" className="nav-link">
                                <i className="bx bx-cog icon" />
                                <span className="link">Settings</span>
                            </a>
                        </li>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar