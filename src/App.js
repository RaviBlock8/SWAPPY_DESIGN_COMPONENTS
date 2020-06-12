import React from "react";
import "./App.css";
import TokenCard from "./components/TokenCard/TokenCard";
import TokenBuyCheckout from "./components/TokenBuyCheckout/TokenBuyCheckout";
import TokenBuyInput from "./components/TokenBuyInput/TokenBuyInput";
import TokenConvertFrom from "./components/TokenConvertFrom/TokenConvertFrom";
import TokenExchangePrices from "./components/TokenExchangePrices/TokenExchangePrices";
import SwapWindow from "./components/SwapWindow/SwapWindow";
import OpenPage from "./pages/openPage/OpenPage";

function App() {
  return (
    <div className="App">
      {/* <TokenCard />
      <TokenBuyCheckout />
      <TokenBuyInput />
      <TokenConvertFrom />
      <TokenExchangePrices />
      <SwapWindow /> */}
      <OpenPage />
    </div>
  );
}

export default App;
