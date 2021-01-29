import React, { useState } from 'react'
import axios from 'axios'



function App() {

  let initialData = {}
  let indiv = {}

  const [currencyData, setCurrencyData] = useState(initialData)

  const [currency, setCurrency] = useState(indiv)
  
  const getMarketData = () => {
      axios
        .get('https://api.coingecko.com/api/v3/global')
        .then(res => {

        const recievedData = res.data.data;

        const marketCap = res.data.data.market_cap_percentage;


        console.log(marketCap)
        console.log(recievedData);


        setCurrencyData(recievedData)
        setCurrency(marketCap)
        
        }).catch(error => {
          console.log(error);
        });
      }



  return (
    <div >
     <button onClick={getMarketData}>Get Currency Data</button>
      <h1>Active Crypto Currencies: {currencyData.active_cryptocurrencies}</h1>
      <h2>Market Cap Change Percentage (24HRS): {currencyData.market_cap_change_percentage_24h_usd}</h2>
      <h2>Markets: {currencyData.markets}</h2>
      <h2>Ongoing Initial Coin Offering: {currencyData.ongoing_icos}</h2>
      <h1>Ended InitialCoin Offering: {currencyData.ended_icos}</h1>
      <h2>Upcoming Initial Coin Offering: {currencyData.upcoming_icos}</h2>

      <h1>Coin Market Cap: </h1>
        <p>ADA: {currency.ada}</p>
        <p>BCH: {currency.bch}</p>
        <p>BTC: {currency.btc}</p>
        <p>ETH: {currency.eth}</p>
        <p>LINK: {currency.link}</p>
        <p>LTC: {currency.ltc}</p>
        <p>USDT: {currency.usdt}</p>
        <p>XLM: {currency.xlm}</p>
        <p>XRP: {currency.xrp}</p>

    </div>
  );
}

export default App;
