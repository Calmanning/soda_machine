
import React from "react";

import CoinWallet from "../src/components/CoinWallet"
import Sodas from "../src/components/Sodas"
import OrderInterface from "../src/components/OrderInterface"



const  App = () => {
  return (
    <div className="container">
      <CoinWallet />
      <Sodas />
      <OrderInterface />
    </div>
  );
}

export default App;
