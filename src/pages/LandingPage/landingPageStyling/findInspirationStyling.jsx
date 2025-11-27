import { StyledSectionContainer } from "../../../components/Styled/Common.styled";
import styled from "styled-components";
import { StyledParagraphSmallGray } from "../../../components/Styled/Typography.styled";

export const StyledSection = styled(StyledSectionContainer)`
  flex-direction: column;

  @media (max-width: 768px) {
    background-color: #f1faff;
  }

  @media (max-width: 510px) {
    padding-bottom: 120px;
  }
`;

export const StyledImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  height: 300px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const StyledImage = styled.img`
  width: 50%;
  height: 100%;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const StyledContainerTwo = styled.div`
  width: 50%;
  word-wrap: break-word;

  @media (max-width: 768px) {
    margin-top: 10px;
    width: 90%;
    height: 200px;
    color: #000000;
  }
`;

export const StyledContent = styled(StyledParagraphSmallGray)`
  text-align: left;

  @media (max-width: 768px) {
    font-weight: 600;
    font-size: 16px;
  }
`;

export const StyledIcon = styled.img`
  margin-left: 5px;
  width: 10px;
`;

export const StyledBtnContainer = styled.div`
  display: flex;
  align-items: left;
`;
