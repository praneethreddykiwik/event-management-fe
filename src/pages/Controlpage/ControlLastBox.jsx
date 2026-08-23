import styled from "styled-components";
import * as enums from "../../myEnum";
import Control_avtar from "../../assets/ControlPage_img/control_avtar.jpeg";
import { theme } from "../../theme/theme";
import {
  StyledParagraphBold,
  StyledParagraph,
  StyledParagraphSmallVisible,
} from "../../components/Styled/Typography.styled";
import Avatar from "../../components/Avatar/Avatar";
const LastBox = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LeftSection>
          <Lstspan className="material-icons">{enums.COTTAGE_ICON}</Lstspan>
          <StyledParagraphBold>{enums.HEADER_CROS}</StyledParagraphBold>
        </LeftSection>

        <NavSection>
          <NavItem $active>{enums.HALLS2}</NavItem>
          <NavItem>{enums.DEVICE}</NavItem>
          <NavItem>{enums.ANALYTICS}</NavItem>
        </NavSection>

        <RightSection>
          <ProfileBox>
            <Avatar
              src={Control_avtar}
              name={enums.HENRY}
              displayInitials={true}
            />
            <ProfileInfo>
              <StyledParagraph className="name">{enums.HENRY}</StyledParagraph>
              <StyledParagraphSmallVisible className="role">
                {enums.BUILD_MANAGER}
              </StyledParagraphSmallVisible>
            </ProfileInfo>
            <ArrowIcon className="material-icons">{enums.KEYBOARD}</ArrowIcon>
          </ProfileBox>
        </RightSection>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
export default LastBox;

const HeaderWrapper = styled.div`
  padding: 3px;
  // background:red;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  border-radius: 50px;
  border: 1.5px solid #b4dbe9ff;
  background: ${theme.light.colors.white};
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Lstspan = styled.span`
  font-size: 20px;
`;

const NavSection = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const NavItem = styled.span`
  font-size: 16px;
  font-weight: ${({ $active }) =>
    $active
      ? theme.light.fontWeights.semiBold
      : theme.light.fontWeights.default};
  color: ${({ $active }) => ($active ? theme.light.colors.black : "#9a9a9a")};
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    display: ${({ $active }) => ($active ? "block" : "none")};
    width: 36px;
    height: 2px;
    background: #22c55e;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid #bfc4cdff;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 10px;
  

  .name {
    font-size: 14px;
    font-weight: ${theme.light.fontWeights.semiBold};
  }

  .role {
    font-size: 11px;
    color: #96b3e2ff;
  }
`;

const ArrowIcon = styled.span`
  font-size: 22px;
  color: #6b7280;
  cursor: pointer;
`;
