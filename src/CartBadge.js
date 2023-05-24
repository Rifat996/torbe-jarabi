import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import CartIcon from './images/cart-icon.png';
import { Badge } from 'react-bootstrap';

const CartBadge = () => {
  const { cartItems } = useContext(CartContext);

  // Calculate the total number of items in the Cart
  const totalItems = cartItems.length;

  return <Badge bg="dark">{totalItems}
          <img alt='img' style={{ maxWidth: '20px', marginLeft: '5px' }} src={CartIcon}></img>
          </Badge>;
};

export default CartBadge;
