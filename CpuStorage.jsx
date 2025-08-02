import React, { useState, useEffect } from 'react';
const fetchCPUStorage = () => {
  const mockData = {
    cpu: Math.floor(Math.random() * 100),
    storage: Math.floor(Math.random() * 100),
  };
  return new Promise(resolve => setTimeout(() => resolve(mockData), 100));
};
const CpuStorage = () => {
  const [metrics, setMetrics] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const updateData = async () => {
      setIsLoading(true);
      const data = await fetchCPUStorage();
      setMetrics(data);
      setIsLoading(false);
    };

    updateData();
    const intervalId = setInterval(updateData, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="box-container">
      <h2 className="box-title">CPU & Storage</h2>
      {isLoading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <ul className="list-item">
          <li>
            <span className="list-item-label">CPU Usage</span>
            <span className="list-item-value">{metrics.cpu}%</span>
          </li>
          <li>
            <span className="list-item-label">Storage Used</span>
            <span className="list-item-value">{metrics.storage}%</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default CpuStorage;