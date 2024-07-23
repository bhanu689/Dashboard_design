


import React from 'react';

import './App.css'; 
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import StatsCards from './Components/Statscard';
import SearchFilterBar from './Components/SearchFilterbar';
import IncidentTable from './Components/IncidentTable';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <StatsCards />
        <SearchFilterBar />
        <IncidentTable />
      </div>
    </div>
  );
};

export default App;

