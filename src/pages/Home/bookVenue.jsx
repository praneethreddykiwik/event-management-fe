import { useState } from "react";

import styled from "styled-components";

import { Input } from "../../components/Inputs/Input.jsx";
import { StyledBaseButton } from "../../components/Styled/Buttons.styled.jsx";
import { HomePageLayout } from "./HomePageLayout.jsx";
import * as enums from "../../myEnum";
import {
  StyledHeading,
  StyledParagraphSmallGray,
} from "../../components/Styled/Typography.styled.jsx";

import { mobile } from "../../theme/media-queries.jsx";

const BookVenue = () => {
  const [email, setEmail] = useState("");

  const handlEmailChange = (e) => {
    setEmail(e.value);
  };

  return (
    <HomePageLayout flexDirection="column">
      <StyledContainer>
        <StyledHeading left>{enums.BOOK_HEADING}</StyledHeading>
        <StyledParagraphSmallGray left>{enums.BOOK_PARA}</StyledParagraphSmallGray>
      </StyledContainer>
      <StyledInputContainer>
        <Input
          type={"email"}
          placeholder={"email address"}
          onChange={handlEmailChange}
          value={email}
        />
        <StyledBaseButton>{enums.BOOK_BTN}</StyledBaseButton>
      </StyledInputContainer>
      <StyledPolicy>
        <StyledParagraphSmallGray left>{enums.BOOK_POLICY}</StyledParagraphSmallGray>
      </StyledPolicy>
    </HomePageLayout>
  );
};

const StyledBtn = styled(StyledBaseButton)`
  min-width: 250px;

   ${mobile`
    width: 100%;
  `}
`;

const StyledPolicy = styled.div`
  width: 50%;
  margin-top: 20px;

  ${mobile`
    width: 85%;
  `}
`;

const StyledPolicyTxt = styled(StyledParagraphSmallGray)`
  text-align: left;

  ${mobile`
    text-align: center;
  `}
`;

const StyledContainer = styled.div`
  width: 50%;

  ${mobile`
    width: 85%;
    margin-top: 80px;
  `}
`;

const StyledHead = styled(StyledHeading)`
  text-align: left;

  ${mobile`
    text-align: center;
  `}
`;

const StyledPara = styled(StyledParagraphSmallGray)`
  text-align: left;
  /* color: ${({ theme }) => theme.colors["inactive-color"]}; */
  color: #88898bff;

  ${mobile`
    text-align: center;
  `}
`;

const StyledInputContainer = styled.div`
  margin-top: 30px;
  width: 50%;
  display: flex;
  align-items: center;
  gap: 30px;

  ${mobile`
  width: 90%;
  flex-direction: column;
  gap: 16px;
  `}
`;

export default BookVenue;
