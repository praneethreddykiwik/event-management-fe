import {
  StyledHeading,
  StyledParagraphSmallGray,
  StyledParagraphGray,
  StyledGrayLink,
} from "../../components/Styled/Typography.styled";

import { StyledSectionContainer } from "../../components/Styled/Common.styled";
import { Button } from "../../components/Buttons/Button";
import styled from "styled-components";
import {
  bookHeading,
  bookPara,
  bookPolicy,
  bookBtn,
} from "../../enum/landingPage.common";

const BookVenue = () => {
  return (
    <StyledMainContainer>
      <StyledContainer>
        <StyledHead>{bookHeading}</StyledHead>
        <StyledPara>{bookPara}</StyledPara>
      </StyledContainer>
      <StyledInputContainer>
        <StyledInput type="email" placeholder="email address" />
        <Button>{bookBtn}</Button>
      </StyledInputContainer>
      <StyledPolicy>
        <StyledPolicyTxt>{bookPolicy}</StyledPolicyTxt>
      </StyledPolicy>
    </StyledMainContainer>
  );
};

export default BookVenue;

const StyledPolicy = styled.div`
  width: 50%;
  margin-top: 20px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const StyledPolicyTxt = styled(StyledParagraphGray)`
  text-align: left;
  font-size: 14px;

  @media (max-width: 767px) {
    text-align: center;
  }
`;

const StyledMainContainer = styled(StyledSectionContainer)`
  justify-content: center;
  flex-direction: column;
`;
const StyledContainer = styled.div`
  width: 50%;

  @media (max-width: 767px) {
    width: 90%;
    margin-top: 80px;
  }
`;
const StyledHead = styled(StyledHeading)`
  text-align: left;

  @media (max-width: 767px) {
    text-align: center;
  }
`;
const StyledPara = styled(StyledParagraphSmallGray)`
  text-align: left;

  @media (max-width: 767px) {
    text-align: center;
  }
`;

const StyledInputContainer = styled.div`
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
const StyledInput = styled.input`
  padding: 10px;
  width: 400px;
  height: 28px;
  border-radius: 30px;
  border: 1px black solid;

  @media (max-width: 767px) {
    width: 90%;
  }
`;
