import styled from "styled-components";
import { HALLS_DASHBOARD } from "../../enum/control_common";
import Control_avtar from "../../assets/ControlPage_img/control_avtar.jpeg";

const LastBox = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LeftSection>
          <Lstspan className="material-icons">
            {HALLS_DASHBOARD.COTTAGE_ICON}
          </Lstspan>
          <Header3>{HALLS_DASHBOARD.HEADER_CROS}</Header3>
        </LeftSection>

        <NavSection>
          <NavItem $active>{HALLS_DASHBOARD.HALLS2}</NavItem>
          <NavItem>{HALLS_DASHBOARD.DEVICE}</NavItem>
          <NavItem>{HALLS_DASHBOARD.ANALYTICS}</NavItem>
        </NavSection>

        <RightSection>
          <ProfileBox>
            <ProfileImg src={Control_avtar} />
            <ProfileInfo>
              <Ltspan className="name">{HALLS_DASHBOARD.HENRY}</Ltspan>
              <Ltspan className="role">{HALLS_DASHBOARD.BUILD_MANAGER}</Ltspan>
            </ProfileInfo>
            <ArrowIcon className="material-icons">
              {HALLS_DASHBOARD.KEYBOARD}
            </ArrowIcon>
          </ProfileBox>
        </RightSection>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
export default LastBox;

const HeaderWrapper = styled.div`
  padding: 3px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  border-radius: 50px;
  border: 1.5px solid #b4dbe9ff;
  background: #ffffff;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Lstspan = styled.span`
  font-size: 20px;
`;

const Header3 = styled.h3`
  font-size: 15px;
  font-weight: 600;
  margin: 0;
`;

const NavSection = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const NavItem = styled.span`
  font-size: 16px;
  font-weight: ${({ $active }) => ($active ? "600" : "400")};
  color: ${({ $active }) => ($active ? "#000" : "#9a9a9a")};
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

const ProfileImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 40%;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 14px;

  .name {
    font-size: 14px;
    font-weight: 600;
  }

  .role {
    font-size: 11px;
    color: #96b3e2ff;
  }
`;

const Ltspan = styled.span``;

const ArrowIcon = styled.span`
  font-size: 22px;
  color: #6b7280;
  cursor: pointer;
`;
