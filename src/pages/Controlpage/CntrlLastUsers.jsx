import styled from "styled-components";
import { HALLS_DASHBOARD } from "../../enum/control_common";
import Avt1 from "../../assets/ControlPage_img/Avt1.jpeg";
import Avt2 from "../../assets/ControlPage_img/Avt2.jpeg";
import Avt3 from "../../assets/ControlPage_img/Avt3.jpeg";
import doorimg from "../../assets/ControlPage_img/doorimg.jpeg";

const LastUsersBox = () => {
  return (
    <LastUsersBox2>
      <LastHeader>
        <HeaderTitle>{HALLS_DASHBOARD.LAST_HEAD}</HeaderTitle>

        <AvatarGroup>
          <Avtimg src={Avt1} />
          <Avtimg src={Avt2} />
          <Avtimg src={Avt3} />
        </AvatarGroup>
      </LastHeader>

      <UserActivity>
        <LastImg src={doorimg} />

        <LastInfo>
          <Header4>{HALLS_DASHBOARD.HALLS}</Header4>
          <Paragraph>{HALLS_DASHBOARD.BACK_DOOR}</Paragraph>
          <SmallPara>{HALLS_DASHBOARD.D_TIME}</SmallPara>
        </LastInfo>
      </UserActivity>
    </LastUsersBox2>
  );
};

export default LastUsersBox;

const LastUsersBox2 = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  height: 140px;
`;

const LastHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #111;
`;

const AvatarGroup = styled.div`
  display: flex;
`;

const Avtimg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin-left: -8px;
  border: 2px solid #fff;
`;

const UserActivity = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 14px;
  align-items: center;
`;

const LastImg = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 3px;
  object-fit: cover;
`;

const LastInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header4 = styled.h4`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #111;
  margin-right: 110px;
`;

const Paragraph = styled.p`
  margin: 4px 0;
  font-size: 14px;
  color: #555;
`;

const SmallPara = styled.p`
  margin: 0;
  font-size: 18px;
  color: #0c0c0cff;
  margin-right: 70px;
  font-weight: 550;
`;
