import { useSelector } from "react-redux";
import styled from "styled-components";
import { authSelector } from "../../redux/auth/auth.slice";
import { StyledParagraphSmallGray } from "../../components/Styled/Typography.styled";
import { AnchorLinkPrimary } from "../../components/Styled/Links.styles";
import useNavigateWithQuery from "../../hooks/useNavigateWithQuery";
import {
  Account,
  SignIn,
  TermsConditions,
} from "../../myEnum/RegistrationPage.Enum";
import { usersSelector } from "../../redux/users/users.slice";

export const BottomReg = () => {
  const { registrationSuccess } = useSelector(usersSelector);
  const navigate = useNavigateWithQuery();

  return (
    <StyledBox>
      {registrationSuccess ? (
        <StyledParagraphSmallGray>
          Successfully registered user. You can proceed to{" "}
          <AnchorLinkPrimary onClick={() => navigate("/login")}>
            {SignIn}
          </AnchorLinkPrimary>
        </StyledParagraphSmallGray>
      ) : (
        <StyledParagraphSmallGray>
          {Account}{" "}
          <AnchorLinkPrimary onClick={() => navigate("/login")}>
            {SignIn}
          </AnchorLinkPrimary>
        </StyledParagraphSmallGray>
      )}

      <StyledParagraphSmallGray center>{TermsConditions}</StyledParagraphSmallGray>

      {/* Raghavendra */}
    </StyledBox>
  );
};

const StyledBox = styled.div`
  margin-top: 30px;
`;

