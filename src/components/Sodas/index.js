import React from "react";
import Button from "../Button";

import "./styles.scss";

const Sodas = () => {

  const sodaInventory = [
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
  ]

  return (
    <div className="sodaList">
      {sodaInventory.map(soda => (
        <div>
          <Button
          key={soda.id}
          cost={soda.cost}
          text={soda.name}
          color={soda.color}
          
          /> 
          <p>{soda.available} in stock </p>    
        </div>
      ))
      
      }
    </div>
  )

}

export default Sodas