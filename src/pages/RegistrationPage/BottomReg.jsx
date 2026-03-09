import { useSelector } from "react-redux";
import styled from "styled-components";
import { StyledParagraphSmallGray } from "../../components/Styled/Typography.styled";
import { AnchorLinkPrimary } from "../../components/Styled/Links.styles";
import useNavigateWithQuery from "../../hooks/useNavigateWithQuery";
import {
  ACCOUNT,
  SIGN_IN,
  TERMS_CONDITIONS,
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
            {SIGN_IN}
          </AnchorLinkPrimary>
        </StyledParagraphSmallGray>
      ) : (
        <StyledParagraphSmallGray>
          {ACCOUNT}{" "}
          <AnchorLinkPrimary onClick={() => navigate("/login")}>
            {SIGN_IN}
          </AnchorLinkPrimary>
        </StyledParagraphSmallGray>
      )}

      <StyledParagraphSmallGray center>
        {TERMS_CONDITIONS}
      </StyledParagraphSmallGray>
    </StyledBox>
  );
};

const StyledBox = styled.div`
  margin-top: 30px;
`;
