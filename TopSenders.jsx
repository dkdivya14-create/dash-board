import React, { useState, useEffect } from 'react';
const fetchTopSenders = () => {
  const mockData = [
    { name: 'Alice', count: Math.floor(Math.random() * 200) + 100 },
    { name: 'Bob', count: Math.floor(Math.random() * 200) + 100 },
    { name: 'Charlie', count: Math.floor(Math.random() * 200) + 100 },
  ];
  return new Promise(resolve => setTimeout(() => resolve(mockData), 100));
};
const TopSenders = () => {
  const [sendersData, setSendersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const updateData = async () => {
      setIsLoading(true);
      const data = await fetchTopSenders();
      setSendersData(data);
      setIsLoading(false);
    };

    updateData();
    const intervalId = setInterval(updateData, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="box-container">
      <h2 className="box-title">Top Senders</h2>
      {isLoading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <ul className="list-item">
          {sendersData.map((item, index) => (
            <li key={index}>
              <span className="list-item-label">{item.name}</span>
              <span className="list-item-value">{item.count} messages</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TopSenders;