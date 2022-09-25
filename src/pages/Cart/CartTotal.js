import React from "react";

const CartTotal = (props) => {
  return (
    <div className="col-12 col-lg-4">
      <div className="cart-summary">
        <h5>Cart Total</h5>
        <ul className="summary-table">
          <li>
            <span>subtotal:</span> <span>$140.00</span>
          </li>
          <li>
            <span>delivery:</span> <span>Free</span>
          </li>
          <li>
            <span>total:</span> <span>$140.00</span>
          </li>
        </ul>
        {props.children}
        <div className="cart-btn mt-100">
          <a href="cart.html" className="btn amado-btn w-100">
            Checkout
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
