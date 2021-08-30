import { useState, useEffect } from "react";

import CoinWallet from "../src/components/CoinWallet"
import Sodas from "../src/components/Sodas"
import OrderInterface from "../src/components/OrderInterface"


const App = () => {

  const [currency, setCurrency] = useState([
    {
      id: 0,
      coin: "penny",
      value: 0.01.toFixed(2),
      available: 100
    },
    {
      id: 1,
      coin: "knickel",
      value: 0.05.toFixed(2),
      available: 10
    },
    {
      id: 2,
      coin: "dime",
      value: 0.10.toFixed(2),
      available: 5
    },
    {
      id: 3,
      coin: "quarter",
      value: 0.25.toFixed(2),
      available: 25
    }
  ])

  const [sodaInventory, setSodaInventory] = useState([
    {
      id: 4,
      name: "Coke",
      cost: 0.25.toFixed(2),
      available: 5,
      color: "red"
    },
    {
      id: 5,
      name: "Pepsi",
      cost: 0.36.toFixed(2),
      available: 15,
      color: "navy"
    },
    {
      id: 6,
      name: "Soda",
      cost: 0.45.toFixed(2),
      available: 3,
      color: "black"
    }
  ])

  useEffect(() => {

  }, [])

  const [orderInformation, setOrderInformation] = useState(
    {
      total: 2.00.toFixed(2),
      //Currently default is the solution, but I should find a way to get 0.00 to apear as a number -- it currently floats(rounds)
      default: "0.00",
      drinksOrdered: 0
    }
  )

  const addCurrency = event => {
    console.log(event.target)
    const { value, available } = event.target
    
    setCurrency({
      ...currency,
      [currency.available]: --currency.available
    })
  };

  const addDrinks = event => {
    const { cost, available } = event.target
    setSodaInventory({
      ...sodaInventory,
      [available]: -1
    })
  }

  const getDrinks = () => {
    console.log(orderInformation)
    setOrderInformation({
      ...orderInformation,
      total: 0.00
    })
    console.log(orderInformation)
  }

  return (
    <div className="container">
      <CoinWallet currency={currency}
        onClick={addCurrency}
      />
      <Sodas sodaInventory={sodaInventory}
        onClick={addDrinks}
      />
      <OrderInterface orderInformation={orderInformation}
        onClick={getDrinks}
      />
    </div>
  );
}

export default App;
