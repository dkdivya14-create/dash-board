import React, { useState, useEffect } from 'react';
const fetchTopStocks = () => {
  const mockData = [
    { symbol: 'AAPL', price: (Math.random() * 500 + 100).toFixed(2) },
    { symbol: 'GOOG', price: (Math.random() * 1000 + 1500).toFixed(2) },
    { symbol: 'MSFT', price: (Math.random() * 300 + 200).toFixed(2) },
  ];
  return new Promise(resolve => setTimeout(() => resolve(mockData), 100));
};
const TopStocks = () => {
  const [stocksData, setStocksData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const updateData = async () => {
      setIsLoading(true);
      const data = await fetchTopStocks();
      setStocksData(data);
      setIsLoading(false);
    };

    updateData();
    const intervalId = setInterval(updateData, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="box-container">
      <h2 className="box-title">Top Stocks</h2>
      {isLoading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <ul className="list-item">
          {stocksData.map((item, index) => (
            <li key={index}>
              <span className="list-item-label">{item.symbol}</span>
              <span className="list-item-value">${item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TopStocks;