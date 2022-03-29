import Header from "./Header";
import CarouselPage from "./CarouselPage";
import Heading from "./Heading";
import React, { useState } from "react";
import "./App.css";

import About from "./About";
import Contact from "./Contact";

import CardComponent from "./CardComponent";
import FooterPage from "./FooterPage";
import LogoCarousel from "./LogoCarousel";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1, originalPrice: data.price }]);
  };

  const incrementCartQty = (id) => {
    setCart(
      cart.map((i) => {
        if (i.id === id) {
          i.quantity++;
          i.price = i.originalPrice * i.quantity;
        }
        return i;
      })
    );
  };

  const decrementCartQty = (id) => {
    setCart(
      cart.map((i) => {
        if (i.quantity === 1) {
          const deleteMessage = cart.filter((msg) => id !== msg.id);
          setCart(deleteMessage);
        } else if (i.id === id) {
          i.quantity--;
          i.price = i.originalPrice * i.quantity;
        }
        return i;
      })
    );
  };

  return (
    <div>
      <Header
        cart={cart}
        setCart={setCart}
        incrementCartQty={incrementCartQty}
        decrementCartQty={decrementCartQty}
      />
      <CarouselPage />
      <About />
      <Heading />
      <CardComponent
        incrementCartQty={incrementCartQty}
        decrementCartQty={decrementCartQty}
        cart={cart}
        addToCart={addToCart}
      />
      {/* <LogoCarousel /> */}

      <Contact />
      <FooterPage />

      {/* <Banner /> */}
    </div>
  );
}
