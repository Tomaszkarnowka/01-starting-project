import { useState } from "react";

import Header from "./components/Layout/Header";

import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Books from "./components/Books/Books";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Books />
      </main>
    </CartProvider>
  );
}

export default App;
