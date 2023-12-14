import React from "react";
import { Link } from "react-router-dom";
import apple from "../../Assets/red-apple-basket.jpg";
import beetroot from "../../Assets/beetroot-white-wooden-table.jpg";
import carrot from "../../Assets/fresh-carrot-with-green-leaves.jpg";

const CartItem = ({ value, title, img, increment, decrement }) => (

  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
 
);

const Cart = () => {
  const increment = (item) => {};

  const decrement = (item) => {};

  return (
    <section className="cart">
      <main style={{ paddingTop:'80px'}}>
        <CartItem
          title={"Apple"}
          img={apple}
          value={0}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Beetroot"}
          img={beetroot}
          value={0}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"Carrot"}
          img={carrot}
          value={0}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>{200}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>{200 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>{100}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>{200 + 200 * 0.18 + 100}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;