import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import {BUY_STOCKS} from '../GraphQL/BuyStock';
import { useMutation } from '@apollo/client';

const Buy = () => {
  const [holdings, setHoldings] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [buyStock, {error}] = useMutation(BUY_STOCKS)


  const holdingsChangeHandler = (event) => {
    setHoldings(event.target.value);
  };

  const quantityChangeHandler = (event) => {
    setQuantity(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };


  const submitHandler = (event) => {
    event.preventDefault(event);
    //reset the values of input fields
    setHoldings('');
    setQuantity('');
    setPrice('');
    console.log(quantity)
    buyStock({
      variables:{
        userId:2,
        stockId:2,
        qty: Number(quantity)
      }
    })
    return alert('Entered Values are: '+holdings+','+ quantity +','+price)
  };

return(
  <>
  <Navbar></Navbar>
  <div className="row">
        <div className="col-md-3 col-sm-3 col-xs-3">
        <Sidebar />
        </div>
        <div className="col-md-9 col-sm-9 col-xs-9">
  <Alert variant='primary' style={{"marginTop":"6.5%", "marginRight":"12%"}}>
    
    <Container>
      <Form onSubmit={submitHandler}>
        <Form.Group  controlId="form.holdings" style={{"marginBottom":"2%" }}>
            <Form.Label>Number of holdings</Form.Label>
            <Form.Control min={0} type="number" value={holdings} onChange={holdingsChangeHandler}placeholder="Quantity" required/>
        </Form.Group>
        <Form.Group controlId="form.Quantity" style={{"marginBottom":"2%" }}>
            <Form.Label>Quantity to be purchased</Form.Label>
            <Form.Control min={1} type="number" value={quantity} onChange={quantityChangeHandler} placeholder="Number of items to be purchased" required/>
        </Form.Group>
        <Form.Group  controlId="form.Price" style={{"marginBottom":"2%" }}>
            <Form.Label>Price (per item)</Form.Label>
            <Form.Control min={0} type="number" value={price} onChange={priceChangeHandler} placeholder="Prices" required/>
        </Form.Group>
        <Button type='submit'>Buy Now</Button>
      </Form>
    </Container>
  </Alert>
  </div>
  </div>
  </>
);
}
export default Buy;