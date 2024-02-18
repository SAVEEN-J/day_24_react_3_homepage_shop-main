import React, { useState } from "react";
import ReactDOM from "react-dom";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Section from "./Components/Section";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, { ...item, added: true }]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <Nav cartItems={cartItems} setCartItems={setCartItems}  />
      <Header />
      <Section
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cartItems={cartItems} // Pass cartItems to the Section component
      />
      <Footer />
    </div>
  );
}

export default App;
