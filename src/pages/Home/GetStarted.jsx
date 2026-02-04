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
import { HomePageLayout } from "./HomePageLayout.jsx";
import { StyledBaseButton } from "../../components/Styled/Buttons.styled.jsx";
import useNavigateWithQuery from "../../hooks/useNavigateWithQuery.jsx";

const GetStarted = () => {
  const navigate = useNavigateWithQuery();

  return (
    <StyledGetStartedLayout>
      <StyledChildContainer>
        <StyledContent>
          <StyledHeadingBig left>{enums.MAIN_HEADING}</StyledHeadingBig>
          <StyledParagraphSmallGray left>
            {enums.MAIN_PARAGRAPH}
          </StyledParagraphSmallGray>
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

const StyledLink = styled(StyledAnchor)`
  color: ${({ theme }) => theme.colors.primary};
  font: ${({ theme }) => theme.typography["button-text"]};
  text-decoration: none;
  display: flex;
`;

const StyledGetStartedLayout = styled(HomePageLayout)`
  background-color: #f1faff;
  gap: 20px;
`;

const StyledChildContainer = styled.div`
  width: 40%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
const StyledRightChildContainer = styled.div`
  width: 40%;
`;
const StyledContent = styled.div`
  width: 100%;
  padding: 10px;
  word-wrap: break-word;
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
`;

export default GetStarted;
