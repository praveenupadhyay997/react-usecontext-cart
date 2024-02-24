import { useState } from "react";
import "./App.css";
import { CartContextProvider } from "./context/CartContext";

import Footer from "./components/Footer";
import Header from "./components/Header";
import CartSummary from "./components/CartSummary";
import ProductSummary from "./components/ProductSummary";

function App() {
  const [count, setCount] = useState(0);

  return (
    <CartContextProvider>
      <Header />
      <ProductSummary />
      <CartSummary />
      <Footer />
    </CartContextProvider>
  );
}

export default App;
