import React from "react";
import CartItem from "./CartItem";
import Total from "./Total";

function Cart(props) {
  const cart = Object.keys(props.selected).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const selectedOption = props.selected[feature];

    return (
      <div>
        <CartItem
          key={featureHash}
          featureHash={featureHash}
          feature={feature}
          selectedOption={selectedOption}
        />
      </div>
    );
  });

  return (
    <div>
      {cart}
      <Total selected={props.selected} />
    </div>
  );
}

export default Cart;
