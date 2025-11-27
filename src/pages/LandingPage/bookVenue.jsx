import { Button } from "../../components/Buttons/Button";

import { bookComponentTxt } from "../../enum/landingPage.common";

import {
  StyledPolicy,
  StyledPolicyTxt,
  StyledMainContainer,
  StyledContainer,
  StyledHead,
  StyledPara,
  StyledInputContainer,
  StyledInput,
} from "../LandingPage/landingPageStyling/bookVenueStyling.jsx";

const BookVenue = () => {
  return (
    <StyledMainContainer>
      <StyledContainer>
        <StyledHead>{bookComponentTxt.BOOK_HEADING}</StyledHead>
        <StyledPara>{bookComponentTxt.BOOK_PARA}</StyledPara>
      </StyledContainer>
      <StyledInputContainer>
        <StyledInput type="email" placeholder="email address" />
        <Button>{bookComponentTxt.BOOK_BTN}</Button>
      </StyledInputContainer>
      <StyledPolicy>
        <StyledPolicyTxt>{bookComponentTxt.BOOK_POLICY}</StyledPolicyTxt>
      </StyledPolicy>
    </StyledMainContainer>
  );
};

export default BookVenue;
