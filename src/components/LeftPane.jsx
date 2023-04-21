import React from "react";
import styled from "styled-components";
import Image from 'next/image';
import TwitterIcon from "../assets/images/twitter.svg";
import GlobeIcon from "../assets/images/globe.svg";
import Chevron from "../assets/images/chevron.svg";
import { CircularProgress } from "@mui/material";

const LeftPane = ({ user }) => {
  return (
    <>
      <RootContainer>
        <Row>
          <Column margin="0px 6px 10px 0px" >
            <span style={{ position: "relative" }}>
              <CircularProgress variant="determinate" value={60} size={88} style={{color: 'var(--clr-orange-100)', transform: "rotate(-250deg)"}} />
              <Image src={user.profileIcon} alt="profile icon" style={{ position: "absolute", top: "48%", left: "50%", transform: "translate(-50%, -50%)" }} />
            </span>
            <LevelDiv>{`LVL ${user.level}`}</LevelDiv>
          </Column>
          <Column margin="10px" centered>
            <Title>{`${user.name}`}</Title>
            <Subtitle>{`${user.shortDesc}`}</Subtitle>
          </Column>
        </Row>
        <Row margin="32px 0px 0px 0px">
          <TwitterContainer href="https://twitter.com/walldotapp">
            <Image src={TwitterIcon} alt="twitter icon" />
            <TwitterHandle>{`@${user.twitterHandle}`}</TwitterHandle>
          </TwitterContainer>
          <WebsiteContainer href="https://www.wall.app/">
            <Image src={GlobeIcon} alt="twitter icon" />
          </WebsiteContainer>
        </Row>
        <Row margin="32px 0px 0px 0px">
          <DescriptionText>{`${user.description}`}</DescriptionText>
        </Row>
        <Column margin="32px 0px 0px 0px">
          <SubtitleTextFontProps>
            {`Common Communities (${user.commonCommunities.length})`}
          </SubtitleTextFontProps>
          <Row wrap>
            {user.commonCommunities.length > 0 &&
              user.commonCommunities.map((community, index) => (
                <CommonCommunityContainer key={index}>
                  <Image src={community.communityPhoto} alt="community-photo"/>
                </CommonCommunityContainer>
              ))}
          </Row>
        </Column>
        <Row margin="32px 0px 0px 0px" wrap>
          {user.tags
            .slice(0, 2)
            .map(
              (tag, index) =>
                tag && (
                  <TagsContainerHighlighted key={index}>{`${tag.tagName} ${tag.tagPercent}%`}</TagsContainerHighlighted>
                )
            )}
          {user.tags
            .slice(2)
            .map(
              (tag, index) =>
                tag && (
                  <TagsContainer key={index}>{`${tag.tagName} ${tag.tagPercent}%`}</TagsContainer>
                )
            )}
        </Row>
        <SubscribeButtonContainer>
          <span>Subscribe</span>
          <Image src={Chevron} style={{ marginLeft: "8px" }} alt="chevron-icon"/>
        </SubscribeButtonContainer>
      </RootContainer>
    </>
  );
};

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 292px;
  border-radius: 16px;
  padding: 16px 16px 24px;
  background-color: #111111;
  margin: 3%;
`;

const Row = styled.div`
  display: flex;  
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};
  margin: ${(props) => (props.margin ? props.margin : 0)};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  justify-content: ${(props) => (props.centered ? "center" : "flex-start")};
  align-items: ${(props) => (props.centered ? "center" : "stretch")};
`;

const LevelDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 44px;
  padding: 8px;
  padding-right: 0px;
  padding-left: 0px;
  background-color: rgba(248, 169, 16, 0.1);
  font-weight: 600;
  font-size: var(--text-xs);
  color: var(--clr-orange-100);
  margin-top: 9px;
`;
const Title = styled.div`
  font-weight: 500;
  font-size: var(--text-base);
  color: white;
`;

const Subtitle = styled.div`
  font-weight: 400;
  font-size: var(--text-xs);
  color: var(--clr-gray-100);
  align-self: flex-start;
  margin-top: 10px;
`;

const TwitterContainer = styled.a`
  background-color: #1a1a1a;
  border-radius: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: var(--clr-gray-100);
  font-size: var(--text-xs);
  padding: 4px 8px;
  text-decoration: none;
`;

const SubtitleTextFontProps = styled.div`
  font-weight: 400;
  font-size: var(--text-xs);
  color: var(--clr-gray-100);
`;

const TwitterHandle = styled(SubtitleTextFontProps)`
  margin-left: 9px;
`;

const DescriptionText = styled(SubtitleTextFontProps)`
  font-size: var(--text-sm);
  line-height: 170%;
`;

const WebsiteContainer = styled.a`
  border-radius: 24px;
  background-color: #1a1a1a;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
`;

const CommonCommunityContainer = styled.div`
  margin-right: 10px;
  margin-top: 10px;
  flex-wrap: wrap;
`;

const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--clr-gray-100);
  font-size: var(--text-xs);
  border-radius: 40px;
  padding: 6px 10px;
  border: 1px solid #1a1a1a;
  font-weight: 500;
  margin-right: 8px;
`;

const TagsContainerHighlighted = styled(TagsContainer)`
  border-color: var(--clr-orange-100);
  color: var(--clr-orange-100);
`;

const SubscribeButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--clr-gray-100);
  border: 1px solid var(--clr-gray-100);
  border-radius: 24px;
  padding: 12px 37px;
  margin-top: 32px;
  cursor: pointer;
  &:hover {
    border-color: var(--clr-orange-100);
  }
`;

export default LeftPane;
