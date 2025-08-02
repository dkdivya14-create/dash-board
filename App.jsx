import React from 'react';
import './App.css'; 
import TopSales from './TopSales';
import TopSenders from './TopSenders';
import TopStocks from './TopStock';
import CpuStorage from './CpuStorage';
function App() {
  return (
    <div className="dashboard-container">
      <TopSales />
      <TopSenders />
      <TopStocks />
      <CpuStorage />
    </div>
  );
}

export default App;