import React from "react";
import { Box } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import SwapWindow from "../../components/SwapWindow/SwapWindow";
import TokenExchangePrices from "../../components/TokenExchangePrices/TokenExchangePrices";
import MyWallet from "../../components/MyWallet/MyWallet";

export default function OpenPage() {
  return (
    <MainScreen>
      <SwapWindow />
      <TokenExchangePrices />
      <MyWallet />
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
