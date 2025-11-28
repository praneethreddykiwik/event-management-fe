import { Button } from "../../components/Buttons/Button";

import { BOOKCOMPONENT_TXT } from "../../enum/landingPage.common";

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
    </StyledMainContainer>
  );
};

export default BookVenue;
