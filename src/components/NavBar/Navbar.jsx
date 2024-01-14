import React from 'react'
import './Navbar.css';
import logo from '../images/ballers_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage  } from '@fortawesome/free-solid-svg-icons';
// import 'https://kit.fontawesome.com/b56885f075.js';
// import { ArrowDownCircle } from 'react-ionicons'

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const savedLanguage = localStorage.getItem('language') || 'ar';


function Navbar() {


      

    const [activeNavItem, setActiveNavItem] = useState('Home'); // Default active item

    const handleNavItemClick = (itemName) => {
        setActiveNavItem(itemName);
        setIsOpen(false); // Close the menu when a nav item is clicked
    };
    
    const { t, i18n } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const [isRTL, setIsRTL] = useState(false);

    const toggleDirection = () => {
        setIsRTL(!isRTL);
      };

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
                        
                        <li className={`bar-item ${activeNavItem === 'Home' ? 'active' : ''}`} onClick={() => handleNavItemClick('Home')}>
                        <a className="bar-link" href="./">{t('Home-Nav')}</a>
                    </li>
                    <li className={`bar-item ${activeNavItem === 'About' ? 'active' : ''}`} onClick={() => handleNavItemClick('About')}>
                        <a className="bar-link" href="./about">{t('About-Nav')}</a>
                    </li>
                    <li className={`bar-item ${activeNavItem === 'Team' ? 'active' : ''}`} onClick={() => handleNavItemClick('Team')}>
                        <a className="bar-link" href="./team">{t('Team-Nav')}</a>
                    </li>
                            <li class="bar-item">|</li>
                            <li className="bar-item">
                            <label htmlFor=""><FontAwesomeIcon icon={faLanguage } />
                            </label>
                            <select
                              className="selectNav"
                              name=""
                              id=""
                              onChange={(e) => {
                                const selectedLanguage = e.target.value;
                                i18n.changeLanguage(selectedLanguage);
                                toggleDirection();
                                localStorage.setItem('language', selectedLanguage);
                              }}
                              dir={isRTL ? 'rtl' : 'ltr'}
                              defaultValue={i18n.language}
                            >
                              <option value="ar">{t('Lang-Nav-Arabic')}</option>
                              <option value="en">{t('Lang-Nav-English')}</option>
                            </select>
                          </li>
                          
                          
                        
                        
                        
                        </ul>
                    </div>
                    <a href='./join' className="boxNav ">
                        <button className='btn-Nav'>{t('Join-Nav')}</button>
                    </a>

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
                                <span className="link">{t('Home-Nav')}</span>
                            </a>
                        </li>
                        <li className="list">
                            <a href="./about" className="nav-link">
                                <span className="link">{t('About-Nav')}</span>
                            </a>
                        </li>
                        <li className="list">
                            <a href="./team" className="nav-link">
                                <span className="link">{t('Team-Nav')}</span>
                            </a>
                        </li>
                        <li className="list">
                        <label htmlFor=""><i className="fa-solid fa-earth-americas"></i></label>
                        <select
                          className="selectNav"
                          name=""
                          id=""
                          onChange={(e) => {
                            i18n.changeLanguage(e.target.value);
                            toggleDirection();
                          }}
                          dir={isRTL ? 'rtl' : 'ltr'}
                          defaultValue={i18n.language}
                        >
                          <option value="ar">{t('Lang-Nav-Arabic')}</option>
                          <option value="en">{t('Lang-Nav-English')}</option>
                        </select>
                        </li>
                        
                    </ul>
                    <div className="bottom-cotent">
                        <li className="list">
                            <a href="#" className="nav-link">
                                <i className="bx bx-cog icon" />
                                <span className="link">{t('Nav-Responsive-Name')}</span>
                            </a>
                        </li>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar