import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      {cart.map(item => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
      ))}
      <h2>Total: ${getTotalPrice()}</h2>
    </div>
  );
};

export default Cart;