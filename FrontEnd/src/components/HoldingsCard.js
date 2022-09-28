import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function HoldingsCard(props) {
  const [holdingItem, setholdingItems] = useState(props.item)
  return (
    <>  
    <div>
        <Card style={{ width: '28rem' }}>
        <Card.Body>
            <Card.Title>{holdingItem.productName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Number of holdings: {holdingItem.NumberOfHoldings}</Card.Subtitle>
            <Card.Text>
            <p><b>Details</b></p>
           
            <p>You bought this product with price {holdingItem.itemPrice} per item</p>
            <p>Net amount after selling this product is {holdingItem.NumberOfHoldings*holdingItem.itemPrice}</p>
            </Card.Text>
            <Button href='/buy' variant='success' style={{margin:"3px"}}>Buy More</Button>
            
            <Button href='/sell' variant='primary' style={{margin:"3px"}}>Sell</Button>
           
        </Card.Body>
        </Card>
    </div>
    </>
  )

}

export default HoldingsCard;


