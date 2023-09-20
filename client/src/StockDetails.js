import React, { useState, useEffect } from 'react';

const StockDetails = () => {
  const [stockObj, setStockObj] = useState({});

  useEffect(() => {
    async function fetchStockDetails() {
      const response = await fetch(
        'https://stackblitzstartersjuls7v-kdxh--3010--ef0c375a.local-credentialless.webcontainer.io/stock_price'
      );

      const data = await response.json();
      console.log('stock data', data);
      setStockObj(data);
    }
    //fetchStockDetails();
  }, []);

  return (
    <div>
      <h1>Stock Details</h1>
      <h2>Price: {stockObj.price}</h2>
      <h2>Name: {stockObj.name}</h2>
    </div>
  );
};

export default StockDetails;
