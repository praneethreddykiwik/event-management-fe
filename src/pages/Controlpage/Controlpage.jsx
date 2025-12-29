import React from "react";
import styled from "styled-components";

import LastBox from "./ControlLastBox";
import CardsContainer from "./ControlCards";
import FourCardsContainer from "./ControlFourCards";
import RightCardContainer from "./ControlRightCard";
import Topcard2 from "./ControlTopCard";
import VenueCard from "./ControlWithImages";
import UsageBox from "./ControlGraph";

const ControlDashboard = () => {
  return (
    <Page>
      <Wrapper>
        <Topcard2 />
        <BodySection>
           <LeftContent> 
            <TopRow>
              <VenueCard />
              <UsageBox />
            </TopRow>
            <CardsContainer />
            <FourCardsContainer />
          </LeftContent> 
          <RightCardContainer />
        </BodySection>
        <LastBox />
      </Wrapper>
    </Page>
  );
};

export default ControlDashboard;

const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #e9f5ff; 
  display: flex;
  justify-content: center;
  /* align-items: flex-start; */
  padding: 1px 0;
  font-family: "Inter", sans-serif;
`;


const Wrapper = styled.div`
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 2px;
  padding: 24px 24px 28px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.04);

`;

const BodySection = styled.div`
  width: 100%;
  display: flex;
  gap: 26px;

`;

const LeftContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;

`;


const TopRow = styled.div`
  display: flex;
  gap: 18px;
  width: 100%;
  padding-left: 0;

`;

