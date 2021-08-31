import { useState } from "react";

import CoinWallet from "../src/components/CoinWallet"
import Sodas from "../src/components/Sodas"
import OrderInterface from "../src/components/OrderInterface"

const App = () => {

  // All objects that relate to (and are modified from) the operations of the vending machine are stored here at the app level. This is mostly just to ensure we are operating with our state at a global level. Which will make prop dissemination simplier. These upject can be updated or modified rather simply from within this file.

  //The wallet object stores information regarding all the available coins that can be used in the machine.  
  const [wallet, setWallet] = useState([
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

  //A current listing of all the sodas in the machine. Any changes or additions would need to follow the existing object structure. 
  const [sodaInventory, setSodaInventory] = useState([
    {
      id: 4,
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

  //This object recieves and retains information whenever an interaction occurs from the wallet's addMoney or the sodaInventory's addSoda function. This stored information is then sent to the OrderInterface object to be displayed to the user.
  const [orderInformation, setOrderInformation] = useState(
    {
      total: 0.00,
      drinksOrdered: 0
    }
  )

  //stores information regarding soda transations. Whenever a soda is succesfully purchased, the 
  const [orderObject, setOrderObject] = useState([
    {
      id: 7,
      name: "Coke",
      quantity: 0,
    },
    {
      id: 8,
      name: "Pepsi",
      quantity: 0,
    },
    {
      id: 9,
      name: "Soda",
      quantity: 0,
    }
  ]
  )

  //===================================
  //  End of Objects 
  //===================================

  //===================================
  //  Start functions for Transactions 
  //===================================

  //adding money from wallet to the machine
  const addMoney = (id, value, available) => {

    //this takes the value of the coin button clicked, and updates the current total in the vending machine.
    setOrderInformation({
      ...orderInformation,
      total: orderInformation.total + parseFloat(parseFloat(value).toFixed(2))
    })

    //updates the amount of available coins for that selected coin.
    setWallet(
      wallet.map((coin) => coin.id === id ?
        coin.available > 0 ?
          { ...coin, available: --coin.available }
          : coin
        : coin
      )
    )

  }

  //addding sodas from sodaInventory to the vending machine, updating the orderInformation
  const addSoda = (id, name, cost, available) => {
    
    //Makes sure that the machine is working with the proper number "x.xx" representation.
    const roundedTotal = parseFloat(parseFloat(orderInformation.total).toFixed(2))

    //condition to verify the transaction may proceed. If there is enough money entered into the machine, the following occurs...
    if (roundedTotal >= cost) {

      //the amount from the selected soda in the sodaInventory is reduced. But only if there is any of that soda within the machine.
      setSodaInventory(
        sodaInventory.map((soda) => soda.id === id ?
          soda.available > 0 ?
            { ...soda, available: --soda.available }
            : soda
          : soda)
      )

      //the orderInformation is updated based on the information from the selected soda.
      setOrderInformation({
        ...orderInformation,
        drinksOrdered: ++orderInformation.drinksOrdered,
        total: roundedTotal - cost
      })

      //quietly stores information of which drink is purchased.
      setOrderObject(
        orderObject.map((drink) => drink.name === name ?
          { ...drink, quantity: ++drink.quantity }
          : drink
        ))
    } else {
            alert("Not enough money. Please insert more coins.")
    }

  }

  //once the "Get Drinks" button is pushed, this will compile the information on the drinks ordered and provide the change given in the most convenient demoninations.
  const getReciept = () => {
    //destructuring orderInformation to make the following code more approachable/cleaner.
    let { total } = orderInformation;
    total = total.toFixed(2);

    let change = {
      change: orderInformation.total,
      penny: 0,
      knickel: 0,
      dime: 0,
      quarter: 0,
    }

    while (total > 0) {
      if (total >= 0.25) {
        total = total - 0.25
        change.quarter = ++change.quarter
      } else if (total >= 0.10) {
        total = total - 0.10
        change.dime = ++change.dime
      } else if (total >= 0.05) {
        total = total - 0.05
        change.knickel = ++change.knickel
      } else {
        change.penny = Math.floor(total * 100)
        total = 0
      }
    }

    //the following code is here so "change", an object, can be mapped over as if it were an array. The information is then joined together for the user view.
    const breakdown = Object.entries(change).map(([coin, amt]) => `${coin}: ${amt}`)
      .join("\n");

    //coalating the ordered drink information and formatting from the user view.
    const drinks = orderObject.filter((order) => order.quantity > 0)
      .map((order) => `${order.name}: ${order.quantity}`)
      .join("\n");

    //Taking the previous two function returns and placing them into an alert to act as a reciept for the user at the  end of the transaction.
    alert(drinks + '\n' + breakdown)

    //after the transaction. Any transaction. All state objects are returned to their original settings.
    //resetting orderInformation
    setOrderInformation({
      total: 0.00,
      drinksOrdered: 0
    })

    //resetting the sodas ordered.
    setOrderObject(
      orderObject.map(soda => soda.quantity > 0 ?
        { ...soda, quantity: 0 }
        : soda
      )
    )
    //restocking/resetting the sodas in the machine    
    setSodaInventory(
      sodaInventory.map(soda => soda.id === 4 ?
        { ...soda, available: 5 }
        : soda.id === 5 ?
          { ...soda, available: 15 }
          : { ...soda, available: 3 }
      )
    )
    
    //resetting the wallet information
    setWallet(
      wallet.map(coin => coin.id === 0 ?
        { ...coin, available: 100 }
        : coin.id === 1 ?
          { ...coin, available: 10 }
          : coin.id === 2 ?
            { ...coin, available: 5 }
            : { ...coin, available: 25 }
      )
    )

  }

  //this is where the components are rendered for user view and information from the app level may be pass on to them.
  return (
    <div className="container">
      <CoinWallet
        wallet={wallet}
        addMoney={addMoney}
      />
      <Sodas
        sodaInventory={sodaInventory}
        addSoda={addSoda}
      />
      <OrderInterface
        orderInformation={orderInformation}
        orderObject={orderObject}
        getReciept={getReciept}
      />
    </div>
  );
}

export default App;
