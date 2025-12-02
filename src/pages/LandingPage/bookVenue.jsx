import { Button } from "../../components/Buttons/Button";

import { BOOKCOMPONENT_TXT } from "../../enum/landingPage.common";

import {
  StyledHeading,
  StyledParagraphSmallGray,
  StyledParagraphGray,
} from "../../components/Styled/Typography.styled.jsx";

import { LandingPageLayout } from "../../layout/landingPage/landingPageLayout.jsx";

import styled from "styled-components";

const BookVenue = () => {
  return (
    <StyledBookVenueLayout>
      <StyledContainer>
        <StyledHead>{BOOKCOMPONENT_TXT.BOOK_HEADING}</StyledHead>
        <StyledPara>{BOOKCOMPONENT_TXT.BOOK_PARA}</StyledPara>
      </StyledContainer>
      <StyledInputContainer>
        <StyledInput type="email" placeholder="email address" />
        <Button>{BOOKCOMPONENT_TXT.BOOK_BTN}</Button>
      </StyledInputContainer>
      <StyledPolicy>
        <StyledPolicyTxt>{BOOKCOMPONENT_TXT.BOOK_POLICY}</StyledPolicyTxt>
      </StyledPolicy>
    </StyledBookVenueLayout>
  );
};

const StyledBookVenueLayout = styled(LandingPageLayout)`
  justify-content: center;
  flex-direction: column;
`;

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

export default BookVenue;
