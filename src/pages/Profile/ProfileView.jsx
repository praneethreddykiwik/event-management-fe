import React from "react";
import Speaker1 from "../../assets/Profile_images/Speaker1.png";
import { Button } from "../../components/Buttons/Button";
import { StyledOutlinedButton } from "../../components/Styled/Buttons.styled";
import { StyledMediumHeading } from "../../components/Styled/Typography.styled";
import { getActivityData } from "./profile.helper";
import { PROFILE_DATA } from "../../enum/ProfileText";
import {
  StyleLeftCard,
  StyleProfileImageContainer,
  StyleProfileImage,
  StyleEditIconCircle,
  StyleSpan,
  StyleUserName,
  StyleUserRole,
  StyleUserLocation,
  StyleEditProfileWrapper,
  StyleActivitiesBox,
  StyleHeadingside,
  StyleActivityRow,
  StyleViewMoreButton,
  StyleJoinedDate,
  StyleHelpIconCircle,
} from "./Profile.Style";

const ProfileLeftCard = () => {
const activityData = getActivityData();

  return (
    <StyleLeftCard>
      <StyleProfileImageContainer>
        <StyleProfileImage src={Speaker1} alt="profile" />
        <StyleEditIconCircle>
          <StyleSpan className="material-icons">edit</StyleSpan>
        </StyleEditIconCircle>
      </StyleProfileImageContainer>

      {/* Static for now */}
      <StyleUserName>Wade Warren</StyleUserName>
      <StyleUserRole>Event planner</StyleUserRole>

      <StyleUserLocation>
        <StyleSpan className="material-icons">location_on</StyleSpan>
        {PROFILE_DATA.LOCATION}
      </StyleUserLocation>

      <StyleEditProfileWrapper>
        <Button type="base">{PROFILE_DATA.EDIT_PROFILE}</Button>
      </StyleEditProfileWrapper>

      <StyleActivitiesBox>
        <StyleHeadingside>
          <StyledMediumHeading>{PROFILE_DATA.LAST_ACTIVITIES}</StyledMediumHeading>
        </StyleHeadingside>

        {activityData.map((item, index) => (
          <StyleActivityRow key={index}>
            <StyleSpan>{item.label}</StyleSpan>
            <StyleSpan>{item.value}</StyleSpan>
          </StyleActivityRow>
        ))}

        <StyleViewMoreButton>
          <Button type="outlined">{PROFILE_DATA.VIEW_MORE}</Button>
        </StyleViewMoreButton>

        <StyleJoinedDate>
          {PROFILE_DATA.JOINED_LABEL} {PROFILE_DATA.JOINED_DATE}
          <StyleHelpIconCircle className="material-icons">
            {PROFILE_DATA.HELP_ICON}
          </StyleHelpIconCircle>
        </StyleJoinedDate>
      </StyleActivitiesBox>
    </StyleLeftCard>
  );
};

export default ProfileLeftCard;
