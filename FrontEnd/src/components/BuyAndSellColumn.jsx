import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function BuyAndSellColumn() {

    const navigate = useNavigate();

    const goToBuy = () => {
        navigate("buy");
    }

    const goToSell = () => {
        navigate("sell");
    }

  return (
        <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white ">
            <button type="button" class="btn btn-success" style={{ "marginRight":"25%", "marginLeft":"25%","marginTop":"25%"}} onClick={goToBuy}>Buy</button>
            <button type="button" class="btn btn-danger" style={{"marginTop": "25%", "marginRight":"25%", "marginLeft":"25%"}} onClick={goToSell}>Sell</button>
        </div>
  )
}
