import Button from "../Button/"

import "./styles.scss"

const CoinWallet = ({ currency, addMoney }) => {

  return (
    <div className="wallet">
      <header>Available Coins</header>
      <div className="coins">
        {currency.map((coin) => (
          <div className="coin">
            <p>$ {coin.value.toFixed(2)}</p>
            <Button 
              key={coin.id}
              value={coin.value}
              text={coin.available}
              color={coin.available === 0 ? "grey" : "darkgreen"}
              onClick={() => addMoney(coin.id, coin.value, coin.available)}
              disabled = {coin.available === 0}
              />
          </div>
          ))
        }
      </div>
    </div>
  )
}

export default CoinWallet;