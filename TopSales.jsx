import React, { useState, useEffect } from 'react';
const fetchTopSales = () => {
  const mockData = [
    { product: 'Laptop', sales: Math.floor(Math.random() * 1000) + 500 },
    { product: 'Smartphone', sales: Math.floor(Math.random() * 1000) + 500 },
    { product: 'Headphones', sales: Math.floor(Math.random() * 1000) + 500 },
  ];
  return new Promise(resolve => setTimeout(() => resolve(mockData), 100));
};
const TopSales = () => {
  const [salesData, setSalesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const updateData = async () => {
      setIsLoading(true);
      const data = await fetchTopSales();
      setSalesData(data);
      setIsLoading(false);
    };
    updateData();
    const intervalId = setInterval(updateData, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="box-container">
      <h2 className="box-title">Top Sales</h2>
      {isLoading ? (
        <p className="loading-text"></p>
      ) : (
        <ul className="list-item">
          {salesData.map((item, index) => (
            <li key={index}>
              <span className="list-item-label">{item.product}</span>
              <span className="list-item-value">{item.sales} units</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TopSales;