import styled from "styled-components";

import { StyledSectionContainer } from "../../../components/Styled/Common.styled.jsx";

import {
  StyledHeading,
  StyledParagraph,
  StyledParagraphBold,
  StyledParagraphSmallVisible,
} from "../../../components/Styled/Typography.styled.jsx";

export const StyledContainerBody = styled(StyledSectionContainer)`
  padding: 0px;
  align-items: center;
  background-color: #000000;
  align-content: center;
  justify-content: center;
  height: 400px;
  overflow: hidden;

  @media (max-width: 767px) {
    flex-direction: column-reverse;
    justify-content: center;
    height: fit-content;
  }
`;

export const StyledSubContainerOne = styled.div`
  width: 40%;
  overflow: hidden;

  @media (max-width: 767px) {
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
  }
`;

export const StyledImgOne = styled.div`
  width: 150px;
  height: 150px;
  background-image: ${(params) => "url(" + params.src + ")"};
  background-position: center;
  background-size: cover;
`;

export const StyledSubContainerTwo = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 767px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const StyledImageOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  overflow: hidden;

  @media (max-width: 767px) {
    flex-direction: row;
    width: 100%;
    justify-content: center;
  }
`;

export const StyledImageTwo = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  flex-direction: column;
  gap: 15px;
  height: 100%;
  margin-top: 75px;

  @media (max-width: 767px) {
    flex-direction: row;
    margin-top: 0%;
  }
`;

export const StyledProfileHead = styled(StyledParagraphBold)`
  color: white;
  position: relative;
  bottom: 10px;
`;

export const StyledAnchors = styled(StyledParagraphSmallVisible)`
  text-decoration: none;
  position: relative;
  bottom: 30px;
  color: #26c867;
`;

export const StyledParagraphContainer = styled(StyledParagraph)`
  display: flex;
  text-align: left;
  color: #ffffff;
  width: 67%;
  margin-top: 30px;

  @media (max-width: 767px) {
    width: 100%;
    text-align: center;
  }
`;

export const StyledProfile = styled.div`
  display: flex;
  width: 250px;
  margin-top: 30px;
  justify-content: center;
  text-align: left;

  @media (max-width: 767px) {
    text-align: center;
    justify-content: center;
  }
`;

export const StyledProfileName = styled.div`
  height: 50px;
  padding-left: 10px;
`;

export const StyledProfileImg = styled.img`
  width: 55px;
  border-radius: 50%;
`;

export const StyledIcon = styled.div`
  width: 160px;
  margin-top: 50px;

  @media (max-width: 767px) {
    width: 250px;
  }
`;

export const StyledForwardIcon = styled.img`
  margin-left: 60px;
  width: 15px;
  cursor: pointer;

  @media (max-width: 767px) {
    margin-left: 120px;
  }
`;

export const StyledBackIcon = styled.img`
  width: 15px;
  cursor: pointer;
`;

export const StyledHead = styled(StyledHeading)`
  color: #26c867;

  @media (max-width: 767px) {
    display: none;
  }
`;
export const StyledHeadM = styled(StyledHeading)`
  color: #26c867;
  display: none;

  @media (max-width: 767px) {
    display: flex;
    color: #555d58;
    justify-content: center;
    padding: 20px;
  }
`;
