import styled from "styled-components";

import {
  StyledHeading,
  StyledParagraphSmallGray,
  StyledParagraphGray,
} from "../../../components/Styled/Typography.styled.jsx";

import { StyledSectionContainer } from "../../../components/Styled/Common.styled.jsx";

export const StyledPolicy = styled.div`
  width: 50%;
  margin-top: 20px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const StyledPolicyTxt = styled(StyledParagraphGray)`
  text-align: left;
  font-size: 14px;

  @media (max-width: 767px) {
    text-align: center;
  }
`;

export const StyledMainContainer = styled(StyledSectionContainer)`
  justify-content: center;
  flex-direction: column;
`;

export const StyledContainer = styled.div`
  width: 50%;

  @media (max-width: 767px) {
    width: 90%;
    margin-top: 80px;
  }
`;

export const StyledHead = styled(StyledHeading)`
  text-align: left;

  @media (max-width: 767px) {
    text-align: center;
  }
`;

export const StyledPara = styled(StyledParagraphSmallGray)`
  text-align: left;

  @media (max-width: 767px) {
    text-align: center;
  }
`;

export const StyledInputContainer = styled.div`
  margin-top: 30px;
  width: 50%;
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 767px) {
    width: 90%;
    flex-direction: column;
  }
`;

export const StyledInput = styled.input`
  padding: 10px;
  width: 400px;
  height: 28px;
  border-radius: 30px;
  border: 1px black solid;

  @media (max-width: 767px) {
    width: 90%;
  }
`;
