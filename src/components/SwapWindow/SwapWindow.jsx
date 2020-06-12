import React from "react";
import { Paper, Box } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SwapPage from "./SwapPage";
import SendPage from "./SendPage";
import "react-tabs/style/react-tabs.css";

export default function SwapWindow() {
  return (
    <MainTab>
      <Tabs style={{ textAlign: "left" }}>
        <TabList>
          <Tab style={{ padding: "0px" }}>
            <TabCustom>Swap</TabCustom>
          </Tab>
          <Tab style={{ padding: "0px" }}>
            <TabCustom>Send</TabCustom>
          </Tab>
          <Tab style={{ padding: "0px" }}>
            <TabCustom>Pool</TabCustom>
          </Tab>
        </TabList>

        <TabPanel style={{ padding: "0px", borderRadius: "10px" }}>
          <SwapPage />
        </TabPanel>
        <TabPanel style={{ padding: "0px", borderRadius: "10px" }}>
          <SendPage />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </MainTab>
  );
}

const MainTab = styled(Box)(({ theme }) => ({
  background: "#FFFFFF",
  boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.2)",
  borderRadius: "10px",
  width: "420px",
  height: "480px",
  margin: "5px",
  fontFamily: "Roboto",
}));

const TabCustom = styled(Box)(({ theme }) => ({
  borderRadius: "10px",
  width: "105px",
  height: "50px",
  boxSizing: "border-box",
  paddingTop: "10px",
  fontSize: "16px",
  lineHeight: "23px",
  textAlign: "center",
  fontWeight: "bold",
  // color: "#4677F5",
}));
