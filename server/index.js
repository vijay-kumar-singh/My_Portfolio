const express = require('express');
const fs = require('fs');
const { resolve } = require('path');
const axios = require('axios');

const app = express();
const port = 3010;

app.use(express.static('static'));
app.use(express.json());

app.get('/1', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});
app.get('/stock_price', async (req, res) => {
  const response = await axios.get(
    'https://financialmodelingprep.com/api/v3/quote/AAPL?apikey=70831d2ef637e9762bec7ebae01dbb3f'
  );
  const data = await response.data;
  console.log(data);
  res.json(data[0]);
});
app.get('/stock_price_nse/:keyword', async (req, res) => {
  const keyword = req.params.keyword;
  const response = await axios.get(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${keyword}&outputsize=compact&apikey=DTLB2DHFRKOJ2X90`
  );
  const data = await response.data;
  console.log(data);
  const timeSeries = data['Time Series (Daily)'];

  // Get the latest date (the first date in the object)
  const latestDate = Object.keys(timeSeries)[0];

  // Get the close price for the latest date
  const closePrice = timeSeries[latestDate]['4. close'];
  console.log(closePrice);
  res.json(closePrice);
});
app.listen(port, (req, res) => {
  console.log(`Example app listening at http://localhost:${port}`);
});
