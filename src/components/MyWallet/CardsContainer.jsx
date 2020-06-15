import React, { useState } from "react";
import useHorizontal from "@oberon-amsterdam/horizontal/hook";
import TokenCard from "../TokenCard/TokenCard";
import { Box } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import TokenData from "./TokenData";

export default function CardsContainer() {
  const [container, setContainer] = useState();
  useHorizontal({ container: container });
  return (
    <>
      <OuterCardsContainer
        component="div"
        className="container"
        ref={(ref) => {
          setContainer(ref);
        }}
      >
        {TokenData.map((token) => {
          return (
            <div className="block">
              <TokenCard name={token.tokenName} amount={token.amount} />
            </div>
          );
        })}
      </OuterCardsContainer>
    </>
  );
}

const OuterCardsContainer = styled(Box)(({ theme }) => ({
  margin: "0px",
  padding: "20px",
  display: "flex",
  background: "#ffffff",
}));
