import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import Payment from '../pages/Payment';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleProceedToPayment = () => {
    // Logic to handle the payment process
    // For now, we will navigate to a payment route
    navigate('/Payment');
  };

  return (
    <div className="cart">
      {cart.map(item => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
      ))}
      <h2>Total: ${getTotalPrice().toFixed(2)}</h2>
      <button onClick={handleProceedToPayment} className="proceed-to-payment-button">Proceed to Payment</button>
    </div>
  );
};

export default Cart;