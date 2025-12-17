import React from "react";

import { HEADINGS } from "../../enum/common";
import {
  StyledAccButton,
  StyledButtonContainer,
  StyledHeadingTitle,
  StyledHr,
  StyledLink,
  StyledMediumHeadingAccount,
  StyledRightContent,
  StyledSection,
  StyledSectionText,
} from "../../components/Styled/AccountSettings.styled";
import AccountSettingsForm from "./AccountSettingsForm";
import { sections } from "./AccountSettings.helper";

const AccountSettingsRightContent = () => {
  // ----- CONFIG FOR MAPPING -----
  

  return (
    <StyledRightContent>
      <StyledHeadingTitle left>
        {HEADINGS.ACCOUNT_SETTINGS}
      </StyledHeadingTitle>

      <StyledHr />

      {/* ---- Using MAP here ---- */}
      {sections.map((section, index) => (
        <StyledSection key={index}>
          <StyledMediumHeadingAccount left small>
            {section.heading}
            {section.link && <StyledLink>{section.link.text}</StyledLink>}
          </StyledMediumHeadingAccount>

          <StyledSectionText left>{section.content}</StyledSectionText>
        </StyledSection>
      ))}

      <StyledButtonContainer left>
        <StyledAccButton style={{ marginTop: "10px" }}>
          Upgrade now
        </StyledAccButton>
      </StyledButtonContainer>

      <StyledHr />

      <AccountSettingsForm />
    </StyledRightContent>
  );
};

export default AccountSettingsRightContent;