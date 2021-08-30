import Button from "../Button"

import "./styles.scss"

const OrderInterface = ({ orderInformation, onClick }) => {

  
   return (
    <div className="orders">
      <p>Current Amount</p>
          <p className="currentFunds">
          ${orderInformation.total}
          </p>
        
      <p>
        Total drinks ordered: 
      </p>
        <p>
          {orderInformation.drinksOrdered}
        </p>
      <Button text={"Get Drinks"}
              onClick={onClick}
      />
  </div>
  )
}

export default OrderInterface;