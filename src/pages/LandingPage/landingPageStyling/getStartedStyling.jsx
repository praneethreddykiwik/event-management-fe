import styled from "styled-components";
import getStarted_imgMi from "../../../assets/landingPage/get_startedMi.jpg";
import { StyledParagraphGray } from "../../../components/Styled/Typography.styled";
import { StyledSectionContainer } from "../../../components/Styled/Common.styled";

export const StyledContainer = styled(StyledSectionContainer)`
  justify-content: center;
  background-color: #f1faff;
  gap: 20px;

  @media (max-width: 768px) {
    justify-content: center;
    background-color: #ffffff;
    background-image: url(${getStarted_imgMi});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const StyledChildContainer = styled.div`
  width: 40%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 80%;
    justify-content: center;
  }
`;
export const StyledRightChildContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const StyledContent = styled.div`
  width: 100%;
  padding: 10px;
  word-wrap: break-word;
`;

export const StyledContentParagraph = styled(StyledParagraphGray)`
  font-size: 12px;
  word-wrap: break-word;
  text-align: left;
  color: #88898bff;

  @media (max-width: 768px) {
    color: #000000;
    font-size: 16px;
  }
`;

export const StyledContentBtn = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;
`;

export const StyledBtnIcon = styled.img`
  margin-left: 5px;
  width: 10px;
`;

export const StyledChildContainerImg = styled.img`
  width: 100%;

  @media (max-width: 768px) {
    justify-content: center;
    background-color: red;
    background-image: url(${getStarted_imgMi});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
