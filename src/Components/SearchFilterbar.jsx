// src/components/SearchFilterBar.js
import React from 'react';
import './SearchFilter.css';
import { FaFilter } from "react-icons/fa6";
import { BiSortAlt2 } from "react-icons/bi";
import { PiDownloadSimpleLight } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
const SearchFilterBar = () => {
  return (
    <div className="search-filter-bar">
      <div className="filters">
        <div className='search'>
      <input type="text" placeholder="&nbsp; &nbsp; &nbsp; Search" className='search_bar' />
      <IoSearch className='icon_search' size={14}/>
      </div>

      <div className='month'> <span>September</span>
      <MdKeyboardArrowDown />
      </div>
      
        
        <div className='year'>
        <span>2023</span>
        <MdKeyboardArrowDown />
        </div>
       <div className='icon'>
        <FaFilter />
        <BiSortAlt2 />
        <PiDownloadSimpleLight />
        </div>
      </div>
      <div className='button'>
      <button className="add-incident">Add Incident &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<GoPlus size={22} className='plus'/> </button>
      </div>
    </div>
  );
};

export default SearchFilterBar;
