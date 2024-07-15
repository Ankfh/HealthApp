import React, { useState } from 'react';
import axios from 'axios';

const OrderLookup = () => {
  const [orderId, setOrderId] = useState('');
  const [randomNumber, setRandomNumber] = useState('');

  const handleLookup = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/order', {
        orderId,
        randomNumber
      });
      console.log(response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div>
      <h1>Order Lookup</h1>
      <input
        type="text"
        placeholder="Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Random Number"
        value={randomNumber}
        onChange={(e) => setRandomNumber(e.target.value)}
      />
      <button onClick={handleLookup}>Lookup Order</button>
    </div>
  );
};

export default OrderLookup;