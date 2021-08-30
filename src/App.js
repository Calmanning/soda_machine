import { useState } from "react";

import CoinWallet from "../src/components/CoinWallet"
import Sodas from "../src/components/Sodas"
import OrderInterface from "../src/components/OrderInterface"


const  App = ({}) => {
  const [currency, setCurrency] = useState([
    {
      id: 0,
      coin: "penny",
      value: 0.01,
      available: 100
    },
    {
      id: 1,
      coin: "knickel",
      value: 0.05,
      available: 10
    },
    {
      id: 2,
      coin: "dime",
      value: 0.10,
      available: 5
    },
    {
      id: 3,
      coin: "quarter",
      value: 0.25,
      available: 25
    }
  ])

  const [sodaInventory, setSodaInventory] = useState([
    {
      id:4,
      name: "Coke",
      cost: 0.25,
      available: 5,
      color: "red"
    },
    {
      id: 5,
      name: "Pepsi",
      cost: 0.36,
      available: 15,
      color: "navy"
    },
    {
      id: 6, 
      name: "Soda",
      cost: 0.45,
      available: 3,
      color: "black"
    }
  ])

  const test = (value) =>{
    console.log(value)
    console.log(test)
    setCurrency(currency.filter((coin) => currency.value !== value))
  }

  return (
    <div className="container">
      <CoinWallet currency={currency} onClick={test}/>
      <Sodas sodaInventory={sodaInventory}/>
      <OrderInterface />
    </div>
  );
}

export default App;
