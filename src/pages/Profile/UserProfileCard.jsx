import React from "react";
import styled from "styled-components";
import Speaker1 from "../../assets/Profile_images/Speaker1.png";
import { Button } from "../../components/Buttons/Button";
import {
  StyledMediumHeading,
  StyledSemiHeading,
  StyledParagraph,
  StyledParagraphSmallVisible,
} from "../../components/Styled/Typography.styled";
import { mobile } from "../../theme/media-queries";
import { PROFILE_DATA } from "../../myEnum/ProfileText";
import { ActivityData } from "./profile.helper";
import { useNavigate } from "react-router-dom";
import { theme } from "../../theme/theme";
import Avatar from "../../components/Avatar/Avatar";

const UserProfileCard = () => {
  const navigate = useNavigate();
  return (
    <StyleLeftCard>
      <StyleProfileImageContainer>
        
        <Avatar
          src={Speaker1}
          alt="profile"
          size="large"
          name={PROFILE_DATA.FIRSTNAME}
          displayInitials={true}
        />

        <StyleEditIconCircle>
          <StyleSpan className="material-icons">edit</StyleSpan>
        </StyleEditIconCircle>
      </StyleProfileImageContainer>

      <StyledSemiHeading>{PROFILE_DATA.FIRSTNAME}</StyledSemiHeading>
      <StyledParagraph>{PROFILE_DATA.LASTNAME}</StyledParagraph>

      <StyleUserLocation>
        <StyleSpan className="material-icons">location_on</StyleSpan>
        <StyledParagraphSmallVisible>
          {PROFILE_DATA.LOCATION}
        </StyledParagraphSmallVisible>
      </StyleUserLocation>

      <StyleEditProfileWrapper>
        <Button type="base">{PROFILE_DATA.EDIT_PROFILE}</Button>
      </StyleEditProfileWrapper>

      <StyleActivitiesBox>
        <StyledMediumHeading>
          {PROFILE_DATA.LAST_ACTIVITIES}
        </StyledMediumHeading>

        {ActivityData.map((item, index) => (
          <StyleActivityRow key={index}>
            <StyleSpan>{item.label}</StyleSpan>
            <StyleSpan>{item.value}</StyleSpan>
          </StyleActivityRow>
        ))}

        <Button type="outlined">{PROFILE_DATA.VIEW_MORE}</Button>

        <StyleJoinedDate>
          {PROFILE_DATA.JOINED_LABEL} {PROFILE_DATA.JOINED_DATE}
          <StyleHelpIconCircle
            className="material-icons"
            onClick={() => navigate("/get-in-touch")}
          >
            {PROFILE_DATA.HELP_ICON}
          </StyleHelpIconCircle>
        </StyleJoinedDate>
      </StyleActivitiesBox>
    </StyleLeftCard>
  );
};

export default UserProfileCard;

const StyleLeftCard = styled.div`
  width: 300px;
  max-width: 100%;
  background: ${theme.light.colors.white};
  padding: 25px 20px;
  margin-top: 70px;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  ${mobile`
    width: 100%;
    margin-top: 20px;
    padding: 18px 14px;
  `}
`;

const StyleProfileImageContainer = styled.div`
  position: relative;
  display: inline-block;

  ${mobile`
    display: flex;
    justify-content: center;
    width: 100%;
  `}
`;

const StyleProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;

  ${mobile`
    width: 65px;
    height: 65px;
  `}
`;

const StyleEditIconCircle = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #2ecc71;
  border-radius: 50%;
  padding: 6px;
  display: flex;
  cursor: pointer;

  .material-icons {
    color: ${theme.light.colors.white};
    font-size: 16px;
  }
`;

const StyleUserLocation = styled.p`
  margin-bottom: 20px;
  color: #666;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  ${mobile`
    font-size: 14px;
    text-align: center;
  `}
`;

const StyleEditProfileWrapper = styled.div`
  button {
    width: 230px;
  }

  ${mobile`
    button {
      width: 100%;
    }
  `}
`;

const StyleActivitiesBox = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 12px;
  margin-top: 10px;

  ${mobile`
    padding: 12px;
  `}
`;

const StyleActivityRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 9px;
  color: ${({ theme }) => theme.colors["inactive-color"]};

  ${mobile`
    font-size: 14px;
  `}
`;

const StyleJoinedDate = styled.p`
  margin-top: 40px;
  font-size: ${theme.light.typography["body-small"]["font-size"]};
  color: ${({ theme }) => theme.colors["inactive-color"]};
  display: flex;
  justify-content: center;
  gap: 6px;

  ${mobile`
    margin-top: 25px;
    font-size: 13px;
    text-align: center;
  `}
`;

const StyleHelpIconCircle = styled.span`
  font-size: 18px;

  ${mobile`
    font-size: 16px;
  `}
`;

const StyleSpan = styled.span``;
