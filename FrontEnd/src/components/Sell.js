import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
const Sell = () => {
  const [holdings, setHoldings] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');


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
    event.preventDefault();
  //reset the values of input fields
  setHoldings('');
  setQuantity('');
  setPrice('');

return alert('Entered Values are: '+holdings+','+ quantity +','+price)


};

return(
  <>
  <Navbar></Navbar>
  <div className="row">
        <div className="col-md-3 col-sm-3 col-xs-3">
        <Sidebar />
        </div>
        <div className="col-md-9 col-sm-9 col-xs-9" >
<Alert variant='primary' style={{"marginTop":"6.5%", "marginRight":"12%"}}>
  <Container >
    <Form onSubmit={submitHandler}>
      <Form.Group  controlId="form.holdings" style={{"marginBottom":"2%" }}>
          <Form.Label>Current Holdings</Form.Label>
          <Form.Control min={1} type="number" value={holdings} onChange={holdingsChangeHandler}placeholder="Possession" required/>
      </Form.Group>
      <Form.Group controlId="form.Quantity" style={{"marginBottom":"2%" }}>
          <Form.Label>Quantity to be Sold</Form.Label>
          <Form.Control min={1} type="number" value={quantity} onChange={quantityChangeHandler} placeholder="Number of items to be sold" required/>
      </Form.Group>
      <Form.Group  controlId="form.Price" style={{"marginBottom":"2%" }}>
          <Form.Label>Price (per item)</Form.Label>
          <Form.Control min={0} type="number" value={price} onChange={priceChangeHandler} placeholder="Price" required/>
      </Form.Group>
      <Button type='submit'>Sell Now</Button>
    </Form>
  </Container>
</Alert>
</div>
</div>
</>
);
}
export default Sell;