// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css'; // Create this CSS file to style the sidebar
import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { RiMessage2Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
import { TiDocumentText } from "react-icons/ti";
import { MdHeadsetMic } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
import { BsWindowDock } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">Vajra</div>
      <nav className='navbar'>
     
        <div className='navbar1'>
       <div className='dashboard_icon'><LuLayoutDashboard /><p>Dashboard</p></div>
       <div className='dock_icon'><BsWindowDock /><p>Assets</p> <MdKeyboardArrowDown size={25}/></div>
       <div className='screw_icon'><HiOutlineWrenchScrewdriver /><p>Incidents</p></div>
       <div className='setting_icon'><IoSettingsOutline /><p>Services</p></div>
       <div className='message_icon'><RiMessage2Line /><p>Request</p></div>
       <div className='user_icon'><FaUsers /><p>Users</p><MdKeyboardArrowDown size={25}/></div>
       <div className='doc_icon'><TiDocumentText /><p>Reports</p><MdKeyboardArrowDown size={25}/></div>

        </div>
      </nav>
      <div className="bottom-buttons">
        <div className='contact'>
       
        <button className='btn_contact'><MdHeadsetMic className='mic'/> Contact Us</button>
        
        </div>
        <div className='log-out'>
        
        <button className='log_out'> <MdOutlineLogout className='log'/> Log Out</button>
       
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
