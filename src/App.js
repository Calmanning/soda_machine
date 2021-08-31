import { useState, useEffect } from "react";

import CoinWallet from "../src/components/CoinWallet"
import Sodas from "../src/components/Sodas"
import OrderInterface from "../src/components/OrderInterface"
import Reciept from "../src/components/Reciept"


const App = () => {

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

  const [orderInformation, setOrderInformation] = useState(
    {
      total: 0.00,
      drinksOrdered: 0
    }
  )

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

//==================================
//  End of Object Placeholders
//==================================

//==================================
//  Start functions for 
//==================================

//add money to the machine
  const addMoney = (id, value, available) => {
    console.log("adding money from", id)
    console.log("one day we'll add " + value + " to the vending machine.")
    
    setOrderInformation({
      ...orderInformation,
      total : orderInformation.total + parseFloat(parseFloat(value).toFixed(2))
    })
    
    setCurrency(
        currency.map((coin) => coin.id === id ? 
                               coin.available > 0 ? 
                               {...coin, available: --coin.available} 
                               : coin 
                               : coin
                               )
    )
    
    console.log(orderInformation)
  }

  const addSoda = (id, name, cost, available) => {
    console.log("adding a soda, how about some ", name)
    
    const roundedTotal = parseFloat(parseFloat(orderInformation.total).toFixed(2))

    if( roundedTotal >= cost ) {
      
      setSodaInventory(
        sodaInventory.map((soda) => soda.id === id ? 
        soda.available > 0 ? 
        {...soda, available: --soda.available} 
        : soda 
        : soda)
        )
        
        setOrderInformation({
          ...orderInformation,
          drinksOrdered : ++orderInformation.drinksOrdered,
          total : roundedTotal - cost
        })
        console.log(orderInformation.total)

        setOrderObject(
          orderObject.map((drink) => drink.name === name ?
          {...drink, quantity: ++drink.quantity}
          : drink
          ))
        } else {
          console.log(orderInformation.total)
          console.log(cost)
          alert("Not enough money. Please insert more coins.")
        }
        
      }

  const getReciept = () => {
    let { total } = orderInformation;
    total = total.toFixed(2);

    let change = {
      penny: 0,
      knickel: 0,
      dime: 0,
      quarter: 0,
    }
    console.log(total)

    while(total > 0){
      if(total >= 0.25){
        total = total -0.25
        change.quarter = ++change.quarter
      } else if (total >= 0.10){
        total = total - 0.10
        change.dime = ++change.dime
      } else if (total >= 0.05){
        total= total - 0.05
        change.knickel = ++change.knickel
      } else {
        change.penny = Math.floor(total*100)
        total = 0
      } 
    }

    const breakdown = Object.entries(change).map(([coin, amt]) => `${coin}: ${amt}`)
                      .join("\n");

    const drinks = orderObject.filter((order) => order.quantity > 0)
                   .map((order) => `${order.name}: ${order.quantity}`)
                   .join("\n");
        
  
    console.log(change)
    alert(drinks + '\n' + breakdown)

    setOrderInformation({
      total: 0.00,
      drinksOrdered: 0
    })

    setOrderObject(
      orderObject.map(soda => soda.quantity > 0?
                      {...soda, quantity: 0}
                      : soda
                      )
    )

    setSodaInventory(
      sodaInventory.map(soda => soda.id === 4 ? 
        {...soda, available: 5}
        : soda.id === 5 ?
        {...soda, available: 15}
        : {...soda, available: 3}
        )
    )
    
    setCurrency(
      currency.map(coin => coin.id === 0 ? 
        {...coin, available: 100}
        : coin.id === 1 ?
        {...coin, available: 10}
        : coin.id === 2?
        {...coin, available: 5}
        : {...coin, available: 25}
        )
    )
    
  }

  return (
    <div className="container">
      <CoinWallet 
        currency={currency}
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
