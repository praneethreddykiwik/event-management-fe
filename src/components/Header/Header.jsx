import styled from "styled-components";
import { StyledHeader } from "../Styled/Common.styled";
import { StyledAnchor, StyledParagraph } from "../Styled/Typography.styled";
import { Button } from "../Buttons/Button";
import { useNavigate } from "react-router-dom";
import { paths } from "../../constants/paths";

const Header = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(paths.login);
  };

  const onClickHome = () => {
    navigate(paths.home);
  };

  return (
    <StyledHeader className="header">
      <StyledBox1 onClick={onClickHome}>
        <StyledParagraph>Event Management</StyledParagraph>
      </StyledBox1>

      <StyledSubBox>
        <StyledAnchor>Home</StyledAnchor>
        <StyledAnchor>Events</StyledAnchor>
        <StyledAnchor>Venues</StyledAnchor>
      </StyledSubBox>

      <StyledBox1>
        <Button onClick={onClick}>Login</Button>
      </StyledBox1>
    </StyledHeader>
  );
};

const StyledSubBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyledBox1 = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
`;

export default Header;
