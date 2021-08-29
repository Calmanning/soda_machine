import React from "react";
import Button from "../Button/"
import "./styles.scss"

const CoinWallet = () => {

  const currency = [
    {
      coin: "penny",
      value: 0.01,
      available: 100
    },
    {
      coin: "knickel",
      value: 0.05,
      available: 10
    },
    {
      coin: "dime",
      value: 0.10,
      available: 5
    },
    {
      coin: "quarter",
      value: 0.25,
      available: 25
    }
  ]

  return (
    <div className="wallet">
      <header>Available Coins</header>
      <div className="coins">
        {currency.map(coin => (
          <div className="coin">
            <p>$ {coin.value}</p>
            <Button 
              key={coin.name}
              value={coin.value}
              text={coin.available}
              color={"darkgreen"}
              />
          
          </div>
        ))}
      </div>
    </div>
  )
}

export default CoinWallet;