import React from "react";
import {
  StyledHeading,
  StyledParagraphSmallGray,
} from "../../components/Styled/Typography.styled";

import { mobile } from "../../theme/media-queries";
import styled from "styled-components";
import Speaker1 from "../../assets/Profile_images/Speaker1.png";
import { PROFILE_DATA } from "../../myEnum/ProfileText";
import { theme } from "../../theme/theme";
import Avatar from "../../components/Avatar/Avatar";
import { Button } from "../../components/Buttons/Button";

const ProfileEdit = () => {
  return (
    <StyleRightForm>
      <StyledHeading left>{PROFILE_DATA.PROFILE}</StyledHeading>
      <StyledParagraphSmallGray left>
        {PROFILE_DATA.EVENTS_PROFILE}
      </StyledParagraphSmallGray>

      
      <StyleProfileImageContainer>
      <Avatar
        src={Speaker1}
        alt="profile"
        name={PROFILE_DATA.FIRSTNAME}
        displayInitials={true}
        size="xlarge"
      />
      </StyleProfileImageContainer>
      <StyleNameRow>
        <StyleInputBox placeholder="Wade" />
        <StyleInputBox placeholder="Warren" />
      </StyleNameRow>

      <StyleFlextable>
        <StyleDescribetext>
          <StyledParagraphSmallGray left>
            {PROFILE_DATA.EMAIL}
          </StyledParagraphSmallGray>
          <StyledParagraphSmallGray left>
            {" "}
            {PROFILE_DATA.EMAIL_LOG}{" "}
          </StyledParagraphSmallGray>
        </StyleDescribetext>

        <StyleEmailRow>
          <StyleInputBox placeholder="wadewarren@gmail.com" />
          <StyleEditIconEmail className="material-icons">
            edit
          </StyleEditIconEmail>
        </StyleEmailRow>
      </StyleFlextable>

      <StylePasswordRow>
        <StyleDescribetext>
          <StyledParagraphSmallGray left>
            {PROFILE_DATA.PASSWORD}
          </StyledParagraphSmallGray>
          <StyledParagraphSmallGray left>
            {" "}
            {PROFILE_DATA.PASSWORD_LOG}
          </StyledParagraphSmallGray>
        </StyleDescribetext>

        <Button type="outlined">{PROFILE_DATA.CHANGE_BTN}</Button>
      </StylePasswordRow>
    </StyleRightForm>
  );
};

export default ProfileEdit;

const StyleRightForm = styled.div`
  margin-top: 275px;
  flex: 1;
  text-align: left;
  background: ${theme.light.colors.white};
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  ${mobile`
    margin-top: 0px;
    padding: 15px;
  `}
`;
const StyleProfileImageContainer = styled.div`
  ${mobile`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  `}
`;

const StyleProfileImageLarge = styled.img`
  width: 110px;
  height: 110px;
  margin: 10px 30px;
  border-radius: 50%;

  ${mobile`
    width: 80px;
    height: 80px;
    margin: 10px auto;
    display: block;
  `}
`;

const StyleNameRow = styled.div`
  display: flex;
  gap: 120px;
  border-bottom: 1px solid #8c8c8c;
  padding: 60px 20px 20px 20px;

  ${mobile`
    flex-direction: column;
    gap: 15px;
    padding: 20px 10px;
  `}
`;

const StyleInputBox = styled.input`
  width: 100%;
  padding: 10px 1px 10px 10px;
  border-radius: 24px;
  border: 2px solid #ccc;
`;

const StyleFlextable = styled.label`
  display: flex;
  border-bottom: 1px solid #8c8c8c;
  padding: 40px 20px;

  ${mobile`
    flex-direction: column;
    gap: 10px;
    padding: 20px 10px;
  `}
`;

const StyleDescribetext = styled.div`
  width: 70%;

  ${mobile`
    width: 100%;
  `}
`;

const StylePasswordRow = styled.div`
  display: flex;
  gap: 20px;
  padding: 40px 20px;
  border-bottom: 1px solid #a9a7a7ff;

  ${mobile`
    flex-direction: column;
    padding: 20px 10px;
  `}
`;

const StyleEmailRow = styled.div`
  position: relative;
  width: 490px;

  ${mobile`
    width: 100%;
  `}
`;

const StyleEditIconEmail = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #21bc67ff;
  cursor: pointer;
`;
