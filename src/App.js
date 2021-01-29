import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components';



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
    <StyledPage >

      
     <Button onClick={getMarketData}>Get Currency Data</Button>
      <H1>Active Crypto Currencies: {currencyData.active_cryptocurrencies}</H1>
      <H1>Market Cap Change Percentage (24HRS): {currencyData.market_cap_change_percentage_24h_usd}</H1>
      <H1>Markets: {currencyData.markets}</H1>
      <H1>Ongoing Initial Coin Offering: {currencyData.ongoing_icos}</H1>
      <H1>Ended InitialCoin Offering: {currencyData.ended_icos}</H1>
      <H1>Upcoming Initial Coin Offering: {currencyData.upcoming_icos}</H1>

      <H1>Coin Market Cap: </H1>
      <CryptoDiv>
        <P>ADA: {currency.ada}</P>
        <P>BCH: {currency.bch}</P>
        <P>BTC: {currency.btc}</P>
        <P>ETH: {currency.eth}</P>
        <P>LINK: {currency.link}</P>
        <P>LTC: {currency.ltc}</P>
        <P>USDT: {currency.usdt}</P>
        <P>XLM: {currency.xlm}</P>
        <P>XRP: {currency.xrp}</P>

      </CryptoDiv>

    </StyledPage>
  );
}

export default App;

const Button = styled.button`
color:white;
background:none;
border:1px solid white;
border-radius:8px;
padding:1rem;
font-size:1rem;

`
const StyledPage = styled.div`
background-color:black;
`

const CryptoDiv = styled.div`
display:flex;
flex-direction:row;
align-items:center;
flex-wrap:wrap;
border:3px solid white;
justify-content:center;

`

const H1 = styled.h1 `
color:white;

`

const P = styled.p`

color:white;
border:1px solid white;
margin:2rem;
padding:3rem;
`