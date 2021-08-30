import React from "react";
import { useState } from "react";

import Button from "../Button/"

import "./styles.scss"

const CoinWallet = ({ currency, onClick }) => {

  return (
    <div className="wallet">
      <header>Available Coins</header>
      <div className="coins">
        {currency.map(coin => (
          <div className="coin">
            <p>$ {coin.value}</p>
            <Button 
              key={coin.id}
              value={coin.value}
              text={coin.available}
              color={"darkgreen"}
              onClick={onClick}
              />
          </div>
          ))
        }
      </div>
    </div>
  )
}

export default CoinWallet;