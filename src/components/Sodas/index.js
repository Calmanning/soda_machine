import React from "react";
import Button from "../Button";

import "./styles.scss";

const Sodas = ({ sodaInventory }) => {

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