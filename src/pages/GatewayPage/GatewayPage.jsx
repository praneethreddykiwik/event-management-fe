import logo from "../../assets/Logos/eventz-logo.png";
import Gateway from "../../assets/gateway-images/img.jpg";

import {
  Button_section,
  Container_child1,
  Container_child2,
  Container_parent,
  ContainerImg,
  DescriptionTxt,
  LogoIcon,
  LogoText,
  NextButton,
  SkipButton,
  StyledCstHeading,
  TitleTxt,
} from "./Styled.Gateway.jsx";

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
