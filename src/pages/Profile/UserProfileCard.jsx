import React from "react";
import styled from "styled-components";
import Speaker1 from "../../assets/Profile_images/Speaker1.png";
import { Button } from "../../components/Buttons/Button";
import { StyledMediumHeading } from "../../components/Styled/Typography.styled";

import { PROFILE_DATA } from "../../enum/ProfileText";
import { ActivityData } from "./profile.helper";

const UserProfileCard = () => {
  return (
    <StyleLeftCard>
      <StyleProfileImageContainer>
        <StyleProfileImage src={Speaker1} alt="profile" />
        <StyleEditIconCircle>
          <StyleSpan className="material-icons">edit</StyleSpan>
        </StyleEditIconCircle>
      </StyleProfileImageContainer>

      <StyleUserName>{PROFILE_DATA.FIRSTNAME}</StyleUserName>
      <StyleUserRole>{PROFILE_DATA.LASTNAME}</StyleUserRole>

      <StyleUserLocation>
        <StyleSpan className="material-icons">location_on</StyleSpan>
        {PROFILE_DATA.LOCATION}
      </StyleUserLocation>

      <StyleEditProfileWrapper>
        <Button type="base">{PROFILE_DATA.EDIT_PROFILE}</Button>
      </StyleEditProfileWrapper>

      <StyleActivitiesBox>
        <StyleHeadingside>
          <StyledMediumHeading>
            {PROFILE_DATA.LAST_ACTIVITIES}
          </StyledMediumHeading>
        </StyleHeadingside>

        {ActivityData.map((item, index) => (
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

export default UserProfileCard;


export const StyleLeftCard = styled.div`
  width: 300px;
  max-width: 100%;
  background: white;
  padding: 25px 20px;
  margin-top: 70px;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 900px) {
    width: 100%;
    margin-top: 30px;
  }
`;

export const StyleProfileImageContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyleProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const StyleEditIconCircle = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #2ecc71;
  border-radius: 50%;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .material-icons {
    color: white;
    font-size: 16px;
  }
`;

export const StyleUserName = styled.h2`
  margin-top: 10px;
`;

export const StyleUserRole = styled.p`
  color: #777;
`;

export const StyleUserLocation = styled.p`
  margin: 10px 0 20px;
  color: #666;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  text-align: center;
`;

export const StyleEditProfileWrapper = styled.div`
  width: 100%;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;

  button {
    width: 230px;
  }
`;

export const StyleActivitiesBox = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 12px;
  margin-top: 10px;
`;

export const StyleHeadingside = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
`;

export const StyleActivityRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 9px;
  color: #666;
`;

export const StyleViewMoreButton = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

export const StyleJoinedDate = styled.p`
  margin-top: 40px;
  font-size: 14px;
  color: #666;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  text-align: center;
`;

export const StyleHelpIconCircle = styled.span`
  color: #19183aff;
  background: none;
  font-size: 18px;
`;

export const StyleSpan = styled.span``;
