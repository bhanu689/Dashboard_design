// src/components/Header.js
import React from 'react';
import { GoArrowLeft } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiQrCodeFill } from "react-icons/pi";
import { FaBell } from "react-icons/fa";
import './Header.css'; // Create this CSS file to style the header

const Header = () => {
  return (
    <header className="header">
    <div className='incident_header'>
        <GoArrowLeft className='arrow' size={10} />

      <h1>Incidents</h1>
      </div>
      <div className="header-right">
        <div className="user-info">
          <span className='B'>B</span>
          <span className='non_bio'>Non Bio Medical</span>
        </div>
        <div className="location">
          <span>Vijayanagar</span>
          <MdKeyboardArrowDown />
        </div>
        <div className="icons">
        <PiQrCodeFill className='fill' />
        <FaBell  className='bell'/>
          <span className='A'>A</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
