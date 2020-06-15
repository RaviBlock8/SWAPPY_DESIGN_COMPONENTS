import React from "react";
import {
  Box,
  Typography,
  InputBase,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import ConvertIconSvg from "./ConvertIconSvg";
import DollarSvg from "./DollarSvg";
import GraphSvg from "./GraphSvg";
import ExchangeChart from "../ExchangeChart/ExchangeChart";

export default function SwapPage() {
  return (
    <SwapPageBox>
      <MainInputBox>
        <InputBox1>
          <Label>FROM</Label>
          <InputField placeholder="0.00" />
          <SelectC value="btc" disableUnderline={true}>
            <MenuItemC value="btc">BTC</MenuItemC>
          </SelectC>
        </InputBox1>
        <ConvertIconBox>
          <ConvertIconSvg />
        </ConvertIconBox>
        <InputBox1>
          <Label>TO</Label>
          <InputField placeholder="0.00" />
          <SelectC value="eth" disableUnderline={true}>
            <MenuItemC value="eth">ETH</MenuItemC>
          </SelectC>
        </InputBox1>
      </MainInputBox>
      <ExchangePriceBox>1 BTC=0.897653999 ETH</ExchangePriceBox>
      <ChartBox>
        {/* <GraphSvg /> */}
        <ExchangeChart />
      </ChartBox>
      <Footer>
        <DollarSvg />
        {"  "}Convert
      </Footer>
    </SwapPageBox>
  );
}

const SwapPageBox = styled(Box)(({ theme }) => ({
  width: "420px",
  height: "415px",
  //   display: "flex",
  //   justifyContent: "space-evenly",
}));

const MainInputBox = styled(Box)(({ theme }) => ({
  height: "200px",
  width: "420px",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "space-evenly",
}));

const InputBox1 = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  height: "200px",
  width: "130px",
  boxSizing: "border-box",
  marginTop: "49px",
}));

const Label = styled(Box)(({ theme }) => ({
  width: "120px",
  height: "21px",
  display: "block",
  fontSize: "18px",
  lineHeight: "21px",
  textAlign: "center",
  fontWeight: "bold",
}));

const InputField = styled(InputBase)(({ theme }) => ({
  width: "129px",
  height: "75px",
  boxSizing: "border-box",
  fontSize: "64px",
  lineHeight: "75px",
  color: "#c0c0c0",
  fontWeight: "bold",
  marginLeft: "auto",
  marginRight: "auto",
  textAlign: "left",
}));

const SelectC = styled(Select)(({ theme }) => ({
  width: "126px",
  height: "40px",
  border: "1px solid #4677F5",
  boxSizing: "border-box",
  borderRadius: "8px",
  marginTop: "9px",
  padding: "0px",
  fontSize: "18px",
  lineHeight: "21px",
  fontWeight: "bold",
  textAlign: "center",
  marginLeft: "auto",
  marginRight: "auto",
}));

const MenuItemC = styled(MenuItem)(({ theme }) => ({
  fontSize: "18px",
  lineHeight: "21px",
  fontWeight: "bold",
}));

const ChartBox = styled(Box)(({ theme }) => ({
  width: "319px",
  height: "120px",
  border: "1px solid black",
  marginTop: "8px",
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: "8px",
}));

const ConvertIconBox = styled(Box)(({ theme }) => ({
  width: "32px",
  height: "32px",
  boxSizing: "border-box",
  position: "relative",
  top: "172px",
}));

const Footer = styled(Button)(({ theme }) => ({
  width: "120px",
  fontSize: "15px",
  lineHeight: "28px",
  fontWeight: "bold",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "10px",
  color: "#4677F5",
  display: "flex",
  alignContent: "space-evenly",
  justifyContent: "space-evenly",
  borderRadius: "5px",
}));

const ExchangePriceBox = styled(Box)(({ theme }) => ({
  width: "350px",
  marginLeft: "auto",
  marginRight: "auto",
  textAlign: "right",
  fontSize: "13px",
  lineHeight: "21px",
  fontWeight: "bold",
  marginTop: "7px",
}));
