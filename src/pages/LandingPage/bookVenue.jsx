import { useState } from "react";
import * as enums from "../../enum";
import {
  StyledHeading,
  StyledParagraphSmallGray,
  StyledParagraphGray,
} from "../../components/Styled/Typography.styled.jsx";

import { LandingPageLayout } from "../../layout/landingPage/landingPageLayout.jsx";

import styled from "styled-components";
import { Input } from "../../components/Inputs/Input.jsx";
import { Button } from "../../components/Buttons/Button";
import { StyledBaseButton } from "../../components/Styled/Buttons.styled.jsx";

const BookVenue = () => {
  const [email, setEmail] = useState("");

  const handlEmailChange = (e) => {
    setEmail(e.value);
  };

  return (
    <LandingPageLayout flexDirection="column">
      <StyledContainer>
        <StyledHead>{enums.BOOK_HEADING}</StyledHead>
        <StyledPara>{enums.BOOK_PARA}</StyledPara>
      </StyledContainer>
      <StyledInputContainer>
        <Input
          type={"email"}
          placeholder={"email address"}
          onChange={handlEmailChange}
          value={email}
        />
        <StyledBtn type="base">{enums.BOOK_BTN}</StyledBtn>
      </StyledInputContainer>
      <StyledPolicy>
        <StyledPolicyTxt>{enums.BOOK_POLICY}</StyledPolicyTxt>
      </StyledPolicy>
    </LandingPageLayout>
  );
};

const StyledBtn = styled(StyledBaseButton)`
  min-width: 250px;
`;

const StyledPolicy = styled.div`
  width: 50%;
  margin-top: 20px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const StyledPolicyTxt = styled(StyledParagraphSmallGray)`
  text-align: left;

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
  /* color: ${({ theme }) => theme.colors["inactive-color"]}; */
  color: #88898bff;

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

export default BookVenue;
