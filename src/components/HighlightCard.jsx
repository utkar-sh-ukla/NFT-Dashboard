import React from "react";
import Image from 'next/image';
import styled from "styled-components";
import EthVector from "../assets/images/EthVector.svg";

// A consistent color scheme, where every type of transaction has a
// fixed color. For every type of transaction, we have a textColor, which
// is the color of the transaction text and gradientColor, which is the color
// of the radial gradient on the card
const typeToColorMap = {
  "ENS Linked": {
    textColor: "#4BDFFF",
    gradientColor: "rgba(37, 181, 213, 0.1)",
  },
  Sold: {
    textColor: "#FFC148",
    gradientColor: "rgba(248, 169, 16, 0.1)",
  },
  Mint: {
    textColor: "#44FFC8",
    gradientColor: "rgba(11, 241, 173, 0.1)",
  },
  Bought: {
    textColor: "#4BDFFF",
    gradientColor: "rgba(37, 181, 213, 0.1)",
  },
};

const HighlightCard = ({ highlightCardDetails }) => {
  return (
    <>
      <RootContainer type={highlightCardDetails.type}>
        <Column>
          <Row margin="0px 0px 10% 0px">
            <Image src={highlightCardDetails.picture} alt="card-picture"/>
            <Column margin="0px 0px 0px 12px">
              <TitleText>{`${highlightCardDetails.title}`}</TitleText>
              <TypeText
                type={highlightCardDetails.type}
              >{`${highlightCardDetails.type}`}</TypeText>
            </Column>
          </Row>
          <Column margin="0px 5% 0px 3%">
            <BoughtAndFloorContainer>
              <Subtitle>{highlightCardDetails.username}</Subtitle>
              <Subtitle white flexEnd>
                <span
                  style={{ marginRight: 5 }}
                >{`${highlightCardDetails.transactionAmount}`}</span>
                <span>
                  <Image src={EthVector} alt="ether-icon"/>
                </span>
              </Subtitle>
            </BoughtAndFloorContainer>
            <BoughtAndFloorContainer margin="7% 0px 0px 0px">
              <Subtitle>{`${highlightCardDetails.time} ago`}</Subtitle>
              <Subtitle white flexEnd>
                {highlightCardDetails.xpGain &&
                  highlightCardDetails.xpGain >= 0 ? (
                  <PercentChangeSpan>{`+${highlightCardDetails.xpGain}XP`}</PercentChangeSpan>
                ) : (
                  <PercentChangeSpan
                    red
                  >{`${highlightCardDetails.xpGain}XP`}</PercentChangeSpan>
                )}
              </Subtitle>
            </BoughtAndFloorContainer>
          </Column>
        </Column>
      </RootContainer>
    </>
  );
};

const RootContainer = styled.div`
  min-width: 201px;
  border-radius: 16px;
  background: #111111;
  padding: 10px;
  margin-right: 16px;
  background: radial-gradient(at top left, rgba(248, 169, 16, 0.1), #111111);
  background: ${(props) =>
    props.type &&
      typeToColorMap[props.type] &&
      typeToColorMap[props.type].gradientColor
      ? `radial-gradient(at top left, ${typeToColorMap[props.type].gradientColor
      }, #111111)`
      : "radial-gradient(at top left, rgba(248, 169, 16, 0.1), #111111)"};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  justify-content: ${(props) => (props.centered ? "center" : "flex-start")};
  align-items: ${(props) => (props.centered ? "center" : "stretch")};
`;

const TitleText = styled.div`
  font-size: var(--text-sm);
  font-weight: 500;
  color: #fafafa;
`;

const TypeText = styled.div`
  font-size: var(--text-xs);
  font-weight: 400;
  color: #fafafa;
  color: ${(props) =>
    props.type &&
      typeToColorMap[props.type] &&
      typeToColorMap[props.type].textColor
      ? typeToColorMap[props.type].textColor
      : "#fafafa"};
  align-self: flex-end;
  margin-top: 20%;
  margin-right: 10%;
`;

const Row = styled(Column)`
  flex-direction: row;
`;


const Title = styled.div`
  font-weight: 500;
  font-size: 0.9rem;
  color: #fafafa;
  margin-top: 15%;
  margin-bottom: 9%;
`;
const Subtitle = styled.div`
  display: flex;
  align-items: center;
  text-align: baseline;
  justify-content: center;
  font-weight: 500;
  font-size: var(--text-xs);
  color: #a2a2a2;
  color: ${(props) => (props.white ? "#FAFAFA" : "#a2a2a2")};
  align-self: ${(props) => (props.flexEnd ? "flex-end" : "flex-start")};
`;
const BoughtAndFloorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};
`;
const PercentChangeSpan = styled.div`
  color: ${(props) => (props.red ? "#E97451" : " #19ed7b")};
  color: #19ed7b;
  font-size: var(--text-xs);
  font-weight: 400;
  margin-left: 4px;
`;

export default HighlightCard;
