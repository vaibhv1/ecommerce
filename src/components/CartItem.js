import React from 'react';

const CartItem = ({ item, removeFromCart, updateQuantity }) => (
  <div className="cart-item">
    <img src={item.image} alt={item.title} />
    <h3>{item.title}</h3>
    <p>${item.price}</p>
    <input
      type="number"
      value={item.quantity}
      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
    />
    <button onClick={() => removeFromCart(item.id)}>Remove</button>
  </div>
);

export default CartItem;