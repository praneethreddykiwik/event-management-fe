import styled from "styled-components";

import { StyledSectionContainer } from "../../../components/Styled/Common.styled";

import {
  StyledHeading,
  StyledParagraphSmall,
  StyledParagraphBold,
} from "../../../components/Styled/Typography.styled";

export const StyledContainer = styled(StyledSectionContainer)`
  background-color: #f1faff;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledBodyContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

//Sub containers
export const StyledSubContainerOne = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  padding-bottom: 130px;
  align-items: center;
`;

export const StyledSubContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

// cards
export const StyledExperience = styled.div`
  background-color: #ffffff;
  width: 350px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: relative;
  left: 10%;
`;

export const StyledConnection = styled.div`
  background-color: #ffffff;
  width: 350px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: relative;
  top: 130px;
  right: 10%;
`;

export const StyledAnyWhere = styled.div`
  background-color: #ffffff;
  width: 400px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

// typo stylings
export const StyledBigHeading = styled(StyledHeading)`
  text-align: left;
  margin-bottom: 50px;
  width: 75%;
`;

export const Heading = styled(StyledParagraphBold)`
  margin-top: 10px;
  text-align: left;
`;

export const StyledParagraph = styled(StyledParagraphSmall)`
  text-align: left;
  margin-top: -10px;
  word-wrap: break-word;
`;

export const StyledHr = styled.hr`
  width: 100%;
  margin-top: -5px;
`;

//image stylings
export const StyledImageOne = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px;
`;
