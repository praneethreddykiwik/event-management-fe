import styled from "styled-components";
import * as enums from "../../myEnum";
import Avt1 from "../../assets/ControlPage_img/Avt1.jpeg";
import Avt2 from "../../assets/ControlPage_img/Avt2.jpeg";
import Avt3 from "../../assets/ControlPage_img/Avt3.jpeg";
import doorimg from "../../assets/ControlPage_img/doorimg.jpeg";
import { theme } from "../../theme/theme";
import {
  StyledParagraphSmallGray,
  StyledParagraphBold,
} from "../../components/Styled/Typography.styled";
import Avatar from "../../components/Avatar/Avatar";
const LastUsersBox = () => {
  return (
    <LastUsersBox2>
      <LastHeader>
        <StyledParagraphBold>{enums.LAST_HEAD}</StyledParagraphBold>

        <AvatarGroup>
          <Avatar
            src={Avt1}
            size="small"
            borderColor={theme.light.colors.white}
          />
          <Avatar
            src={Avt2}
            size="small"
            borderColor={theme.light.colors.white}
          />
          <Avatar
            src={Avt3}
            size="small"
            borderColor={theme.light.colors.white}
          />
        </AvatarGroup>
      </LastHeader>

      <UserActivity>
        <LastImg src={doorimg} />

        <LastInfo>
          <StyledParagraphBold left>{enums.HALLS}</StyledParagraphBold>
          <Paragraph>{enums.BACK_DOOR}</Paragraph>
          <SmallPara>{enums.D_TIME}</SmallPara>
        </LastInfo>
      </UserActivity>
    </LastUsersBox2>
  );
};

export default LastUsersBox;

const LastUsersBox2 = styled.div`
  background: ${theme.light.colors.white};
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  width: 103%;
  height: 150px;
`;

const LastHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AvatarGroup = styled.div`
  display: flex;
  position: relative;
  width: 80px;
  
  > * {
    position: absolute;
  }

  :nth-child(1) {
    left: 0px;
  }
  :nth-child(2) {
    left: 17px;
  }
  :nth-child(3) {
    left: 33px;
  }
  :nth-child(4) {
    left: 48px;
  }
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

const Paragraph = styled(StyledParagraphSmallGray)`
  margin-right: 25px;
`;

const SmallPara = styled(StyledParagraphBold)`
  margin-right: 100px;
`;
