import styled from "styled-components";
import * as enums from "../../myEnum";
import Avt1 from "../../assets/ControlPage_img/Avt1.jpeg";
import Avt2 from "../../assets/ControlPage_img/Avt2.jpeg";
import Avt3 from "../../assets/ControlPage_img/Avt3.jpeg";
import doorimg from "../../assets/ControlPage_img/doorimg.jpeg";
import {StyledMediumHeading, StyledParagraphSmallGray, StyledParagraphBold } from "../../components/Styled/Typography.styled";

const LastUsersBox = () => {
  return (
    <LastUsersBox2>
      <LastHeader>
        <HeaderTitle>{enums.LAST_HEAD}</HeaderTitle>

        <AvatarGroup>
          <Avtimg src={Avt1} />
          <Avtimg src={Avt2} />
          <Avtimg src={Avt3} />
        </AvatarGroup>
      </LastHeader>

      <UserActivity>
        <LastImg src={doorimg} />

        <LastInfo>
          <Header4>{enums.HALLS}</Header4>
          <Paragraph>{enums.BACK_DOOR}</Paragraph>
          <SmallPara>{enums.D_TIME}</SmallPara>
        </LastInfo>
      </UserActivity>
    </LastUsersBox2>
  );
};

export default LastUsersBox;

const LastUsersBox2 = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  width: 103%;
  height: 150px;
`;

const LastHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderTitle = styled(StyledParagraphBold)`
`;

const AvatarGroup = styled.div`
  display: flex;
`;

const Avtimg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid #fff;
  margin-left: -8px;
`;

const UserActivity = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 14px;
`;

const LastImg = styled.img`
  width: 70px;
  height: 80px;
  border-radius: 4px;
  object-fit: cover;
`;

const LastInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Header4 = styled(StyledMediumHeading)`
  margin-right: 130px;
  margin-top: 10px;
`;

const Paragraph = styled(StyledParagraphSmallGray)`
  margin-right: 25px;
`;

const SmallPara = styled(StyledParagraphBold)`
  margin-right: 100px;
`;
