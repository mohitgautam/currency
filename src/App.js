
import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [ratesList, setRatesList] = useState([]);

 
  useEffect(() => {
   getRates();
 // setInterval(getRates(), 30000);
  }, []);




  /** Direct call from React */
  // const getRates = async (base) => {
  //   const res = await axios.get(
  //     'https://api.apilayer.com/exchangerates_data/latest?base=GBP&symbols=INR,USD,EUR,CHF,AUD,CAD',{
  //       headers:{
  //         'apikey': '49awdoJoif7Z5egTSAGlWtA1A6YFhAhO'
  //       }
  //     }
  //   );
    
    /** Call from php file */
    /** Direct call from React */
    


/** This just simple php file .API */
   const getRates = async (base) => {
         const res = await axios.get(
           'http://localhost/currency/api.php?getCurrency=all',{
           }
         );
    const { rates } = res.data;
    const ratesTemp = [];

    for (const [symbol, rate] of Object.entries(rates)) {
      ratesTemp.push({ symbol, rate });
    }
    setRatesList(ratesTemp);
  };

  return (
    <div className="App">
      <button className="ratebutton" onClick={getRates}>Refresh Rate</button>
      <ul className="list-currency">
        1 GBP =
        {ratesList.map((d) => (
          <li className="list-item" key={d.symbol}>
            {d.symbol} = {d.rate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
