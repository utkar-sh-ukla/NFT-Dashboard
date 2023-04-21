import React from "react";
import styled from "styled-components";
import LeftPane from "../components/LeftPane/LeftPane";
import NFTCard from "../components/NFTCard";
import NFTImage1 from "../assets/images/NFTImage.svg";
import NFTImage2 from "../assets/images/NFTImage2.svg";
import NFTImage3 from "../assets/images/NFTImage3.svg";
import NFTImage4 from "../assets/images/NFTImage4.svg";
import NFTImage5 from "../assets/images/NFTImage5.svg";
import Highlight1 from "../assets/images/Highlight1-f.svg";
import Highlight2 from "../assets/images/Highlight2-f.svg";
import Highlight3 from "../assets/images/Highlight3-f.svg";
import Highlight4 from "../assets/images/Highlight4-f.svg";
import Highlight5 from "../assets/images/Highlight5-f.svg";
import ProfileIcon from "../assets/images/ProfileIcon.svg";
import Community1 from "../assets/images/Rectangle1599.svg";
import Community2 from "../assets/images/Rectangle1600.svg";
import Community3 from "../assets/images/Rectangle1601.svg";
import Community4 from "../assets/images/Rectangle1602.svg";

import HighlightCard from "../components/HighlightCard";

const Dashboard = () => {
    const user = {
        profileIcon: ProfileIcon,
        name: "dingaling.eth",
        shortDesc: "0xadgf....jkld",
        level: 2,
        twitterHandle: "dingalingts",
        websiteUrl: "https://www.wall.app/",
        description:
            "An Investor / Collector of #NFTs and OG enthusiast. Co-Founder and owner of 📦  @nftboxes",
        commonCommunities: [
            {
                communityId: "123",
                communityPhoto: Community1,
            },
            {
                communityId: "456",
                communityPhoto: Community2,
            },
            {
                communityId: "789",
                communityPhoto: Community3,
            },
            {
                communityId: "239",
                communityPhoto: Community4,
            },
        ],
        tags: [
            {
                tagName: "Art",
                tagPercent: 12,
            },
            {
                tagName: "Utility",
                tagPercent: 12,
            },
            {
                tagName: "PFP",
                tagPercent: 12,
            },
            {
                tagName: "Metaverse",
                tagPercent: 12,
            },
            {
                tagName: "Gaming",
                tagPercent: 12,
            },
            {
                tagName: "PFP",
                tagPercent: 12,
            },
            {
                tagName: "ens",
                tagPercent: 12,
            },
        ],
    };
    const nftCardDetailsList = [
        {
            name: "Azuki",
            profilePicture: NFTImage1,
            id: "9839",
            bought: "02.82",
            floor: "12.74",
            percentChange: 21.6,
            months: 3,
        },
        {
            name: "MAYC",
            profilePicture: NFTImage2,
            id: "9839",
            bought: "02.82",
            floor: "12.74",
            percentChange: 21.6,
            months: 3,
        },
        {
            name: "MoonBirds",
            profilePicture: NFTImage3,
            id: "9839",
            bought: "02.82",
            floor: "12.74",
            percentChange: 21.6,
            months: 3,
        },
        {
            name: "Otherdeed",
            profilePicture: NFTImage4,
            id: "9839",
            bought: "02.82",
            floor: "12.74",
            percentChange: 21.6,
            months: 3,
        },
        {
            name: "Cryptoz",
            profilePicture: NFTImage5,
            id: "9839",
            bought: "02.82",
            floor: "12.74",
            percentChange: 21.6,
            months: 3,
        },
    ];
    const highlightCardDetailsList = [
        {
            picture: Highlight1,
            title: "ENS Linked",
            type: "ENS Linked",
            username: "dingaling.eth",
            transactionAmount: 1.82,
            time: "2 months",
            xpGain: 200,
        },
        {
            picture: Highlight2,
            title: "Best Flip",
            type: "Sold",
            username: "CryptoPunk #2131",
            transactionAmount: 98.5,
            time: "10 days",
            xpGain: 150,
        },
        {
            picture: Highlight3,
            title: "Should have...",
            type: "Mint",
            username: "Rare Apepe #6974",
            transactionAmount: 98.5,
            time: "10 days",
            xpGain: 200,
        },
        {
            picture: Highlight4,
            title: "First NFT Bought",
            type: "Bought",
            username: "BAYC #7925",
            transactionAmount: 98.5,
            time: "2 months",
            xpGain: 10,
        },
        {
            picture: Highlight5,
            title: "Paper Handled",
            type: "Sold",
            username: "Moonbird #7866",
            transactionAmount: 98.5,
            time: "10 days",
            xpGain: 200,
        },
    ];
    return (
        <>
            <RootContainer>
                <LeftPane user={user} />

                <Column margin="5% 0px 0px 0px">
                    <Row margin="0px 0px 4% 0px">
                        {highlightCardDetailsList.map((highlightCardDetails) => (
                            <HighlightCard highlightCardDetails={highlightCardDetails} />
                        ))}
                    </Row>
                    <Row>
                        {nftCardDetailsList.map((nftCardDetails) => (
                            <NFTCard nftCardDetails={nftCardDetails} />
                        ))}
                    </Row>
                </Column>
            </RootContainer>
        </>
    );
};
const RootContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 100vh;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  justify-content: ${(props) => (props.centered ? "center" : "flex-start")};
  align-items: ${(props) => (props.centered ? "center" : "stretch")};
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  justify-content: ${(props) => (props.centered ? "center" : "flex-start")};
  align-items: ${(props) => (props.centered ? "center" : "stretch")};
`;

export default Dashboard;