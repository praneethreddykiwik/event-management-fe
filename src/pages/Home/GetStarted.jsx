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
import useNavigateWithQuery from "../../hooks/useNavigateWithQuery.jsx";

import { mobile } from "../../theme/media-queries.jsx";
import { Button } from "../../components/Buttons/Button.jsx";

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
            <Button
              onClick={() => navigate("/registration")}
              className="!w-[120px]"
            >
              {enums.START_BTN}
            </Button>
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

  ${mobile`
    background:
    linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255)),
    url(${getStarted_imgMi});

  background-size: cover;
  background-position: center;

  justify-content: center;
  `}
`;

const StyledChildContainer = styled.div`
  width: 40%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-content: center;
  align-items: center;

  ${mobile`
    width: 90%;
  `}
`;
const StyledRightChildContainer = styled.div`
  width: 40%;
  ${mobile`
    display: none;
  `}
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

  ${mobile`
    color: ${({ theme }) => theme.colors.black};
    font-size: 16px;
  `}
`;

const StyledContentBtn = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;
  align-items: center;

  ${mobile`
  background:
  linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,)),
  url(${getStarted_imgMi});

  background-size: cover;
  background-position: center;
  justify-content: center;
`}
`;

const StyledBtnIcon = styled.img`
  margin-left: 5px;
  width: 8px;
`;

const StyledChildContainerImg = styled.img`
  width: 100%;

  ${mobile`
    justify-content: center;
    background-image: url(${getStarted_imgMi});
    background-size: cover;
    background-repeat: no-repeat;
  `}
`;

export default GetStarted;
