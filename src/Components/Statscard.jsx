// src/components/StatsCards.js
import React from 'react';
import './StatsCards.css';
import { IoIosArrowRoundForward } from "react-icons/io"; // Create this CSS file to style the stats cards

const StatsCards = () => {
  return (
    <div className="stats-cards">
      <div className="card">
        <span className="number">04</span>
        <div className='forward'>
        <span className="label">Incident reported</span>
        <IoIosArrowRoundForward className='round' size={25}/>
        </div>
      </div>
      <div className="card">
        <span className="number">06</span>
        <div className='forward'>
        <span className="label">Check In</span>
        <IoIosArrowRoundForward className='round' size={25}/>
        </div>
      </div>
      <div className="card">
        <span className="number">03 / 05</span>
        <div className='forward'>
        <span className="label">Services open</span>
        <IoIosArrowRoundForward className='round' size={25}/>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
