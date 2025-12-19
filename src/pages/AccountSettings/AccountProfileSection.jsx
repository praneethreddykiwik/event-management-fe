import React from "react";
import {
  StyledGroupIcon,
  StyledProfileCard,
  StyledProfileDivider,
  StyledProfileHeader,
  StyledProfileLabel,
  StyledProfileRow,
  StyledProfileSubtitle,
  StyledProfileTitle,
} from "../../components/Styled/AccountSettings.styled";

export default function AccountProfileSection() {
  return (
    <StyledProfileCard>
      <StyledProfileHeader>
        <StyledProfileTitle>Wade’s Profile</StyledProfileTitle>
        <span className="material-symbols-outlined icon">keyboard_arrow_down</span>
      </StyledProfileHeader>
      <StyledProfileSubtitle>1 friend</StyledProfileSubtitle>

      <StyledProfileDivider />

      <StyledProfileRow>
        <StyledGroupIcon className="material-symbols-outlined icon">
          groups
        </StyledGroupIcon>
        <StyledProfileLabel>Invite friends</StyledProfileLabel>
      </StyledProfileRow>
    </StyledProfileCard>
  );
}
