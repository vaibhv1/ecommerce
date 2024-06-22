import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const { cart } = useContext(CartContext);

  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-left">
          <Link to="/" className="nav-link">Home</Link>
        </div>
        <h1>Shoopee</h1>
        <div className="nav-right">
          <Link to="/cart" className="nav-link cart-link">
            Cart ({cartItemCount})
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;