import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [coins, setCoins] = useState({});
  const [currentCoin, setCurrentCoin] = useState({})
  const [coinKey, setCoinKey] = useState({})

  useEffect(() => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(res => res.json())
      .then((data) => setCoins(data.bpi))
  }, [])


  let clickChesk = "";
  const list = Object.keys(coins).map(keyValue => {
    return (
      //<li><div>{keyValue}</div> <button onClick ={() => setCoinKey(keyValue)}>select</button></li>
      <div><h4 onClick ={() => setCoinKey(keyValue)}><li>{keyValue}</li></h4></div>    
      )
  })


 let coinArray = [];

 useEffect(() => {
  for (let i = 0; i < coins.length; i++){
    const list2 = coins.map(coin => {
      coinArray.push(coin[i])
      console.log("TEST", coin[i])
    })
   }

}, [])

 
  console.log(coinKey)
   console.log("array", coinArray)

 
  


  const title = coinKey;
  //const supremeTitle = coins[coinKey]

  
  


/*   console.log(list)

  console.log("coins", coins)
  console.log(coins.USD)
  console.log("keys", Object.keys(coins))
  console.log(coinKey)
  console.log("currentCoin", coins[coinKey]) */

  //console.log("CURRENT ONE", currentCoin)

  //setCurrentCoin(coins[coinKey])

  return (
    <section>
      <h2>Test</h2>
      <ol>{list}</ol>

      
        {coinKey.length ? (
          <div>
            <h2>{title}</h2>
          </div>
        ) : (
          <div>
            <h2>no coin selected</h2>
          </div>
        )}
      
    </section>
  );
}

export default App;