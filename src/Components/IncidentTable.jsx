// src/components/IncidentTable.js
import React from 'react';

import './IncidentTable.css';
import { PiDownloadSimpleLight } from "react-icons/pi";
const IncidentTable = () => {
  const incidents = [
    { asset: 'Ge ECG Machine', code: 'AG-7645698', department: 'Blood Center', dateTime: '03/04/2023 @ 12.30', downTime: '10 hr : 24 m : 32 s', status: 'Cleared' },
    { asset: 'Ge ECG Machine', code: 'AG-7645698', department: 'Blood Center', dateTime: '03/04/2023 @ 12.30', downTime: '10 hr : 24 m : 32 s', status: 'Open' },
    { asset: 'Ge ECG Machine', code: 'AG-7645698', department: 'Blood Center', dateTime: '03/04/2023 @ 12.30', downTime: '10 hr : 24 m : 32 s', status: 'Cleared' },
    { asset: 'Ge ECG Machine', code: 'AG-7645698', department: 'Blood Center', dateTime: '03/04/2023 @ 12.30', downTime: '10 hr : 24 m : 32 s', status: 'Open' },
    { asset: 'Ge ECG Machine', code: 'AG-7645698', department: 'Blood Center', dateTime: '03/04/2023 @ 12.30', downTime: '10 hr : 24 m : 32 s', status: 'Cleared' }
  ];

  return (
    <table className="incident-table">
      <thead>
        <tr>
          <th>Asset</th>
          <th>Code</th>
          <th>Department</th>
          <th>Date & Time</th>
          <th>Down Time</th>
          <th>Status</th>
          <th>Report</th>
        </tr>
      </thead>
      <tbody>
        {incidents.map((incident, index) => (
          <tr key={index}>
            <td>{incident.asset}</td>
            <td>{incident.code}</td>
            <td>{incident.department}</td>
            <td>{incident.dateTime}</td>
            <td>{incident.downTime}</td>
            <td className={incident.status === 'Cleared' ? 'status-cleared' : 'status-open'}>{incident.status}</td>
            <td>{incident.status === 'Cleared' && <PiDownloadSimpleLight className="icon-download" />} </td>
          </tr>
         
        ))}
      </tbody>
      
    </table>
  );
};

export default IncidentTable;
