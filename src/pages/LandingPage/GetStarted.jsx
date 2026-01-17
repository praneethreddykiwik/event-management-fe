import forward_arrow from "../../assets/landingPage/arrow_forward.svg";
import getStarted_img from "../../assets/landingPage/get_started.jpg";
import * as enums from "../../myEnum";
import {
  StyledHeadingBig,
  StyledAnchor,
  StyledParagraphSmallGray,
} from "../../components/Styled/Typography.styled.jsx";
import styled from "styled-components";
import getStarted_imgMi from "../../assets/landingPage/get_startedMi.jpg";
import { LandingPageLayout } from "../../layout/landingPage/landingPageLayout.jsx";
import { StyledBaseButton } from "../../components/Styled/Buttons.styled.jsx";
import useNavigateWithQuery from "../../hooks/useNavigateWithQuery.jsx";

const GetStarted = () => {
  const navigate = useNavigateWithQuery();

  return (
    <StyledGetStartedLayout>
      <StyledChildContainer>
        <StyledContent>
          <StyledHeadingBig left>{enums.MAIN_HEADING}</StyledHeadingBig>
          <StyledContentParagraph>
            {enums.MAIN_PARAGRAPH}
          </StyledContentParagraph>
          <StyledContentBtn>
            <StyledBaseButton
              onClick={() => navigate("/registration")}
              className="!w-[120px]"
            >
              {enums.START_BTN}
            </StyledBaseButton>
            <StyledLink>
              {enums.OUTLINE_BTN}
              <StyledBtnIcon src={forward_arrow} />
            </StyledLink>
          </StyledContentBtn>
        </StyledContent>
      </StyledChildContainer>

      <StyledRightChildContainer>
        <StyledChildContainerImg src={getStarted_img} alt="image" />
      </StyledRightChildContainer>
    </StyledGetStartedLayout>
  );
};

const StyledGetStartedBtn = styled(StyledBaseButton)`
  // width: 120px;
`;

const StyledLink = styled(StyledAnchor)`
  color: ${({ theme }) => theme.colors.primary};
  font: ${({ theme }) => theme.typography["button-text"]};
  text-decoration: none;
`;

const StyledGetStartedLayout = styled(LandingPageLayout)`
  background-color: #f1faff;
  gap: 20px;

  @media (max-width: 768px) {
    background-color: ${({ theme }) => theme.colors.white};
    background-image: url(${getStarted_imgMi});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const StyledChildContainer = styled.div`
  width: 40%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 80%;
  }
`;
const StyledRightChildContainer = styled.div`
  width: 40%;
  @media (max-width: 768px) {
    display: none;
  }
`;
const StyledContent = styled.div`
  width: 100%;
  padding: 10px;
  word-wrap: break-word;
`;

const StyledContentParagraph = styled(StyledParagraphSmallGray)`
  word-wrap: break-word;
  text-align: left;
  font-weight: 500;

  @media (max-width: 768px) {
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
  }
`;

const StyledContentBtn = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;
  align-items: center;
`;

const StyledBtnIcon = styled.img`
  margin-left: 5px;
  width: 8px;
`;

const StyledChildContainerImg = styled.img`
  width: 100%;

  @media (max-width: 768px) {
    justify-content: center;
    background-image: url(${getStarted_imgMi});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export default GetStarted;
