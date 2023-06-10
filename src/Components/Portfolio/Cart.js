import React from 'react';

function Cart({ cartItems }) {
    console.log(cartItems)
  return (
    <div className="cart-items">
    <p>ghdejwo</p>
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.photo.src} alt="" />
          <p className="cactus">{item.text}</p>
          <span className="price">{item.price}</span>
        </div>
      ))}

    </div>
  );
}

export default Cart;
