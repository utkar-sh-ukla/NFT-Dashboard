import React from "react";
import styled from "styled-components";
import Image from 'next/image';
import EthVector from "../assets/images/EthVector.svg";

import NFTImage1 from "../assets/images/NFTImage.svg";

const NFTCard = ({ nftCardDetails }) => {
  // const nftCardDetails = {
  //   name: "Azuki",
  //   id: "9839",
  //   bought: "02.82",
  //   floor: "12.74",
  //   percentChange: 21.6,
  //   profilePicture: NFTImage1,
  //   months: 3,
  // };
  return (
    <>
      <RootContainer>
        <Column style={{ position: "relative" }}>
          <Image src={nftCardDetails.profilePicture} alt="nftProfile"/>
          <MonthsContainer>{`${nftCardDetails.months} Months`}</MonthsContainer>
        </Column>
        <Column margin="0px 5% 0px 3%">
          <Title>{`${nftCardDetails.name} #${nftCardDetails.id}`}</Title>
          <BoughtAndFloorContainer>
            <Subtitle>Bought</Subtitle>
            <Subtitle white flexEnd>
              <span
                style={{ marginRight: 5 }}
              >{`${nftCardDetails.bought}`}</span>
              <span>
                <Image src={EthVector} alt="ether-icon"/>
              </span>
            </Subtitle>
          </BoughtAndFloorContainer>
          <BoughtAndFloorContainer margin="7% 0px 0px 0px">
            <Subtitle>Bought</Subtitle>
            <Subtitle white flexEnd>
              <span
                style={{ marginRight: 5 }}
              >{`${nftCardDetails.bought}`}</span>
              <span>
                <Image src={EthVector} alt="ether-icon"/>
              </span>
              {nftCardDetails.percentChange &&
                nftCardDetails.percentChange >= 0 ? (
                <PercentChangeSpan>{`+${nftCardDetails.percentChange}%`}</PercentChangeSpan>
              ) : (
                <PercentChangeSpan
                  red
                >{`-${nftCardDetails.percentChange}%`}</PercentChangeSpan>
              )}
            </Subtitle>
          </BoughtAndFloorContainer>
        </Column>
      </RootContainer>
    </>
  );
};

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 201px;
  border-radius: 8px;
  padding: 4px 4px 8px;
  background-color: #111111;
  margin-right: 16px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size:  var(--text-sm);
  color: #fafafa;
  margin-top: 20px;
  margin-bottom: 9%;
`;

const Subtitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: baseline;
  font-weight: 500;
  font-size: var(--text-xs);
  color: #a2a2a2;
  color: ${(props) => (props.white ? "#FAFAFA" : "#a2a2a2")};
  align-self: ${(props) => (props.flexEnd ? "flex-end" : "flex-start")};
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};
`;

const BoughtAndFloorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  justify-content: ${(props) => (props.centered ? "center" : "flex-start")};
  align-items: ${(props) => (props.centered ? "center" : "stretch")};
`;

const MonthsContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 31px;
  color: #ffffff;
  font-size: var(--text-xs);
  padding: 1px 6px;
  text-align: center;
  backdrop-filter: blur(6px);
  position: absolute;
  bottom: 8px;
  right: 8px;
`;

const PercentChangeSpan = styled.div`
  color: ${(props) => (props.red ? "#E97451" : " #19ed7b")};
  color: #19ed7b;
  font-family: "Sharp Grotesk Regular";
  font-size: var(--text-xs);
  font-weight: 500;
  margin-left: 4px;
`;

export default NFTCard;
