import React, { useState } from "react";
import { Box } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import SwapWindow from "../../components/SwapWindow/SwapWindow";
import TokenExchangePrices from "../../components/TokenExchangePrices/TokenExchangePrices";
import MyWallet from "../../components/MyWallet/MyWallet";
import ConnectWallet from "../../components/ConnectWallet/ConnectWallet";

export default function OpenPage() {
  const [connected, setConnected] = useState(false);
  return (
    <MainScreen>
      <SwapWindow />
      <TokenExchangePrices />
      {connected ? <MyWallet /> : <ConnectWallet setConnected={setConnected} />}
    </MainScreen>
  );
}

const MainScreen = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  boxSizing: "border-box",
  paddingTop: "60px",
  display: "flex",
  justifyContent: "center",
}));
