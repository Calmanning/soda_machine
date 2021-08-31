import Button from "../Button";

import "./styles.scss";

const Sodas = ({ sodaInventory, addDrinks}) => {

  return (
    <div className="sodaList">
      {sodaInventory.map((soda) => (
        <div className="soda">
          <p>{soda.name}</p>
          <Button
            key={soda.id}
            cost={soda.cost}
            text={soda.available === 0 ? <p>Empty</p>:soda.cost}
            color={soda.available === 0 ? "grey" : soda.color}
            onClick={() => addDrinks(soda.id, soda.name, soda.cost, soda.available) }
            disabled={soda.available === 0}
          />
          {soda.available === 0 ? <p></p> : <p>{soda.available} in stock </p>}
        </div>
      ))
      }
    </div>
  )
}

export default Sodas