import { useContext } from "react";

import ShopItemForm from "./ShopItemForm";
import classes from "./ShopItem.module.css";
import CartContext from "../../../store/cart-context";

const ShopItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      author: props.author,
    });
  };

  return (
    <li className={classes.item}>
      <div>
        <h2>{props.name}</h2>
        <h4>{props.author}</h4>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <ShopItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default ShopItem;
