import logo from "../../assets/Logos/eventz-logo.png";
import Gateway from "../../assets/gateway-images/img.jpg";

import styled from "styled-components";
import { StyledBaseButton, StyledSecButton } from "../../components/Styled/Buttons.styled";
import { StyledHeadingBig, StyledParagraph } from "../../components/Styled/Typography.styled";

import {
  EVENTZ_LOGO_TEXT,
  GATEAWAY_DESCRIPTION_TEXT,
  TITLE_TEXT,
  SKIP_BUTTON_TEXT,
  NEXT_BUTTON_TEXT,
} from "../../myEnum";

const GatewayPage = () => {
  return (
    <Container_parent>
      <Container_child1>
        <LogoText>
          <LogoIcon src={logo} />
          <StyledCstHeading>{EVENTZ_LOGO_TEXT}</StyledCstHeading>
        </LogoText>

        <TitleTxt>{TITLE_TEXT}</TitleTxt>

        <DescriptionTxt>{GATEAWAY_DESCRIPTION_TEXT}</DescriptionTxt>

        <Button_section>
          <SkipButton>{SKIP_BUTTON_TEXT}</SkipButton>
          <NextButton>{NEXT_BUTTON_TEXT}</NextButton>
        </Button_section>
      </Container_child1>

      <Container_child2>
        <ContainerImg src={Gateway} />
      </Container_child2>
    </Container_parent>
  );
};
export default GatewayPage;

const ContainerImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Container_parent = styled.div`
  display: flex;
  height: 100vh;
  font-family: "Inter", sans-serif;
`;

const Container_child1 = styled.div`
  width: 50vw;
  background: ${({ theme }) => theme.colors.lightBlue || "#f5fbff"};
  padding: 40px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container_child2 = styled.div`
  width: 50vw;
`;
const LogoIcon = styled.img`
  width: 80px;
`;
const LogoText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  gap: 16px;
`;

const TitleTxt = styled(StyledHeadingBig)`
  font-size: 35px;
  font-weight: 700;
  line-height: 1.3;
  width: 57%;
`;

const DescriptionTxt = styled(StyledParagraph)`
  color: ${({ theme }) => theme.colors["text-gray-color"] || "#555"};
  margin: 32px 0 40px;
  width: 50%;
`;

const Button_section = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
`;

const SkipButton = styled(StyledSecButton)`
  width: 150px;
`;

const NextButton = styled(StyledBaseButton)`
  width: 250px;
  color: ${({ theme }) => theme.colors.white};
`;

const StyledCstHeading = styled(StyledHeadingBig)`
  font-weight: 300;
  width: 50%;
`;

