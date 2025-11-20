import {
  StyledHeading,
  StyledParagraphSmallGray,
  StyledParagraphGray,
  StyledGrayLink,
} from "../../components/Styled/Typography.styled";

import { StyledSectionContainer } from "../../components/Styled/Common.styled";
import { Button } from "../../components/Buttons/Button";
import styled from "styled-components";

const BookVenue = () => {
  return (
    <StyledMainContainer>
      <StyledContainer>
        <StyledHead>
          Get updated when your favorite venue is open for booking.
        </StyledHead>
        <StyledPara>
          Join our email list to resceive updates on events near you, booking
          and appointment availabilty tips on great event planning, management
          and more.
        </StyledPara>
      </StyledContainer>
      <StyledInputContainer>
        <StyledInput type="email" placeholder="email address" />
        <Button>Get more information</Button>
      </StyledInputContainer>
      <StyledPolicy>
        <StyledPolicyTxt>
          *Please refer to our <StyledAnchor>Privancy Policy</StyledAnchor> for
          more details.
        </StyledPolicyTxt>
      </StyledPolicy>
    </StyledMainContainer>
  );
};

export default BookVenue;

const StyledPolicy = styled.div`
  width: 50%;
  margin-top: 20px;
`;

const StyledPolicyTxt = styled(StyledParagraphGray)`
  text-align: left;
   font-size: 14px;
`;

const StyledAnchor = styled(StyledGrayLink)`
  color: #26c867;
  font-size: 14px;
  text-decoration: none;
`;

const StyledMainContainer = styled(StyledSectionContainer)`
  justify-content: center;
  flex-direction: column;
`;
const StyledContainer = styled.div`
  width: 50%;
`;
const StyledHead = styled(StyledHeading)`
  text-align: left;
`;
const StyledPara = styled(StyledParagraphSmallGray)`
  text-align: left;
`;

const StyledInputContainer = styled.div`
  margin-top: 30px;
  width: 50%;
  display: flex;
  align-items: center;
  gap: 30px;
`;
const StyledInput = styled.input`
  padding: 10px;
  width: 400px;
  height: 28px;
  border-radius: 30px;
  border: 1px black solid;
`;
