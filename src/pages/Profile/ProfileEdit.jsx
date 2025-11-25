import React from "react";
import Speaker1 from "../../assets/Profile_images/Speaker1.png";
import { StyledOutlinedButton } from "../../components/Styled/Buttons.styled";

import {
  StyleRightForm,
  StyleProfileTitle,
  StyleProfileSubtitle,
  StyleProfileImageLarge,
  StyleNameRow,
  StyleInputBox,
  StyleFlextable,
  StyleDescribetext,
  StyleLabels,
  StylePasswordRow,
  StyleEmailRow,
  StyleEditIconEmail,
} from "./Profile.Style";
import { PROFILE_DATA} from "../../enum/ProfileText";

const ProfileRightCard = () => {
  return (
    <StyleRightForm>
      <StyleProfileTitle>{PROFILE_DATA.PROFILE }</StyleProfileTitle>
      <StyleProfileSubtitle>{PROFILE_DATA.EVENTS_PROFILE}</StyleProfileSubtitle>

      <StyleProfileImageLarge src={Speaker1} />

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
          <StyleEditIconEmail className="material-icons">edit</StyleEditIconEmail>
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

export default ProfileRightCard;
