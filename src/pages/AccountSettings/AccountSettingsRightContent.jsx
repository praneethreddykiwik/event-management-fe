import React, { useState } from "react";

import { HEADINGS } from "../../enum/accountsettings.common";
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
  UpgrateOptions
} from "../../components/Styled/AccountSettings.styled";
import { sections } from "./AccountSettings.helper";
import { Input } from "../../components/Inputs/Input";

const AccountSettingsRightContent = () => {

  const [upgradeOptions, setUpgradeOptions] = useState([]);

  function handleCheckBoxChage(data) {
    setUpgradeOptions((prev) =>
      data.checked ? [...prev, data.item] : prev.filter((v) => v !== data.item)
    );
  }
  return (
    <StyledRightContent>
      <StyledHeadingTitle left>{HEADINGS.ACCOUNT_SETTINGS}</StyledHeadingTitle>

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
        <StyledAccButton type="base">Upgrade now </StyledAccButton>
      </StyledButtonContainer>

      <StyledHr />

      <UpgrateOptions>
        <Input
          type="checkbox-group"
          name="upgradeOptions"
          placeholder=""
          list={[
            "Block adult contents from gallery",
            "Opt out of recommendation based on views and subscriptions",
            "Don’t allow search engines to index my profile",
            "Allow auto update of contents",
          ]}
          value={upgradeOptions}
          onChange={handleCheckBoxChage}
        />
      </UpgrateOptions>
    </StyledRightContent>
  );
};

export default AccountSettingsRightContent;