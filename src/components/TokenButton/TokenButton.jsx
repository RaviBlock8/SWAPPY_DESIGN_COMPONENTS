import React from "react";
import { Button } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import DollarSvg from "./DollarSvg";

function TokenButton() {
  return (
    <TButton>
      <DollarSvg />
      {"  "}
      Get more
    </TButton>
  );
}

const TButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(109.39deg, #4677F5 0%, #4946F5 100%)",
  boxShadow: "4px 4px 12px rgba(0, 0, 0, 0.12)",
  borderRadius: "18px",
  width: "240px",
  height: "58px",
  fontSize: "17px",
  lineHeight: "23px",
  fontWeight: "bold",
  color: "white",
  display: "flex",
  alignContent: "space-evenly",
  justifyContent: "center",
  textTransform: "capitalize",
}));

export default TokenButton;
