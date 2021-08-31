import Button from "../Button"

import "./styles.scss"

const OrderInterface = ({ orderInformation, getReciept, cancelOrder }) => {

  return (
    <div className="orders">
      <p>Current Amount</p>
      <p className="currentFunds">
        ${orderInformation.total.toFixed(2)}
      </p>
      <p>
        Total drinks ordered: {orderInformation.drinksOrdered}
      </p>
      <div>
        <Button 
          text={"Cancel Order"}
          disabled={orderInformation.drinksOrdered === 0}
          onClick={cancelOrder}
          color={orderInformation.drinksOrdered === 0 ?
            "grey" :
            "darkred"}
          />
        <Button
          text={orderInformation.drinksOrdered === 0 ?
            "Place Order" :
            "Get Drinks"}
          disabled={orderInformation.drinksOrdered === 0}
          onClick={getReciept}
          color={orderInformation.drinksOrdered === 0 ?
            "grey" :
            "steelblue"}
        />
      </div>
    </div>
  )
}

export default OrderInterface;