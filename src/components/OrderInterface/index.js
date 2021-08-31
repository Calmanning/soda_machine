import Button from "../Button"

import sodaInventory from "../Sodas/"

import "./styles.scss"

const OrderInterface = ({ orderInformation, sodaInventory, orderReturn, getReciept }) => {

  return (
    <div className="orders">
      <p>Current Amount</p>
      <p className="currentFunds">
        ${orderInformation.total.toFixed(2)}
      </p>
      <p>
        Total drinks ordered:
        {orderInformation.drinksOrdered}
      </p>
      <Button
        text={orderInformation.drinksOrdered === 0 ?
          "Order a drink" :
          "Get Drinks"}
        disabled={orderInformation.drinksOrdered === 0}
        onClick={getReciept}
        color={orderInformation.drinksOrdered === 0 ?
          "grey" : 
          "steelblue"}
      />
    </div>
  )
}

export default OrderInterface;