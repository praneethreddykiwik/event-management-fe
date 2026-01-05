import React from "react";
import styled from "styled-components";
import Speaker1 from "../../assets/Profile_images/Speaker1.png";
import { StyledOutlinedButton } from "../../components/Styled/Buttons.styled";
import { PROFILE_DATA } from "../../enum/ProfileText";

const ProfileEdit = () => {
  return (
    <StyleRightForm>
      <StyleProfileTitle>{PROFILE_DATA.PROFILE}</StyleProfileTitle>
      <StyleProfileSubtitle>{PROFILE_DATA.EVENTS_PROFILE}</StyleProfileSubtitle>

      <StyleProfileImageLarge src={Speaker1} alt="profile" />

      <StyleNameRow>
        <StyleInputBox placeholder="Wade" />
        <StyleInputBox placeholder="Warren" />
      </StyleNameRow>

      <StyleFlextable>
        <StyleDescribetext>
          <StyleLabels>{PROFILE_DATA.EMAIL}</StyleLabels>
          {PROFILE_DATA.EMAIL_LOG}
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
          <StyleLabels>{PROFILE_DATA.PASSWORD}</StyleLabels>
          {PROFILE_DATA.PASSWORD_LOG}
        </StyleDescribetext>

        <StyledOutlinedButton>{PROFILE_DATA.CHANGE_BTN}</StyledOutlinedButton>
      </StylePasswordRow>
    </StyleRightForm>
  );
};

export default ProfileEdit;

/* ====================== STYLED COMPONENTS ====================== */

export const StyleRightForm = styled.div`
  margin-top: 249px;
  flex: 1;
  text-align: left;
  background: white;
  padding: 20px;
  border-radius: 1px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 1200px) {
    margin-top: 180px;
  }

  @media (max-width: 900px) {
    margin-top: 30px;
    width: 100%;
  }
`;

export const StyleProfileTitle = styled.h2`
  margin: 10px 30px;
`;

export const StyleProfileSubtitle = styled.p`
  margin: 10px 30px;
  color: #666;
`;

export const StyleProfileImageLarge = styled.img`
  width: 110px;
  height: 110px;
  margin: 10px 30px;
  border-radius: 50%;
`;

export const StyleNameRow = styled.div`
  display: flex;
  gap: 120px;
  margin-bottom: 20px;
  border-bottom: 1px solid #8c8c8c;
  padding: 60px 20px 20px 20px;

  @media (max-width: 1200px) {
    gap: 40px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
    padding: 30px 10px;
  }
`;

export const StyleInputBox = styled.input`
  width: 100%;
  padding: 10px 1px 10px 10px;
  border-radius: 24px;
  border: 2px solid #ccc;
`;

export const StyleFlextable = styled.label`
  color: #8c8c8c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #8c8c8c;
  padding: 40px 20px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`;

export const StyleLabels = styled.div``;

export const StyleDescribetext = styled.div`
  width: 70%;
  color: #8c8c8c;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const StylePasswordRow = styled.div`
  display: flex;
  gap: 20px;
  padding: 40px 20px;
  border-bottom: 1px solid #a9a7a7ff;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 20px 10px;
  }
`;

export const StyleEmailRow = styled.div`
  position: relative;
  width: 490px;

  @media (max-width: 1200px) {
    width: 350px;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const StyleEditIconEmail = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #21bc67ff;
  cursor: pointer;
`;
