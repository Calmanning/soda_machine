import React from "react";
import Button from "../Button"

import CoinWallet from "../CoinWallet/";
import Sodas from "../Sodas/";

import "./styles.scss"

const OrderInterface = ({ CoinWallet, Sodas }) => {

  const orderInfo = {
      total: 0.00,
      //Currently default is the solution, but I should find a way to get 0.00 to apear as a number -- it currently floats(rounds)
      default: "0.00",
      drinksOrdered: 0
  }

  return (
    <div className="orders">
      <p>Ordering Information Placeholder</p>
      <p className="currentFunds">
        {orderInfo.default}
      </p>
      <p>
        Drinks ordered: {orderInfo.drinksOrdered}
      </p>
      <Button text={"Get Drinks"} />
  </div>
  )
}

export default OrderInterface;