import React, { useState } from "react";
import google from "../../assets/Logo/Google.svg.webp";
import { HEADINGS, TEXTS } from "../../enum/accountsettings.common";
import {
  Action,
  ActionSpan,
  Icon,
  RowLink,
  Section,
  SectionHeader,
  StyledAccButton,
  StyledButtonContainer,
  StyledHeadingTitle,
  StyledHr,
  StyledRightContent,
  SubText,
  TextLink,
  Title,
  UpgrateOptions,
  GoogleLogo,
} from "../../components/Styled/AccountSettings.styled";
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

      <Section medium>
        <SectionHeader>
          <Title>{HEADINGS.LINKED_ACCOUNTS}</Title>
          <Action>+ Add</Action>
        </SectionHeader>
        <RowLink>
          <GoogleLogo src={google} alt="google" />
          <TextLink>Google</TextLink>
        </RowLink>
      </Section>

      <Section small>
        <SectionHeader>
          <Title>{HEADINGS.EMAIL_PREFERENCE}</Title>
          <Action>
            <ActionSpan
              className="material-symbols-outlined"
              style={{ fontSize: "18px" }}
            >
              autorenew
            </ActionSpan>
          </Action>
        </SectionHeader>
        <SubText left>{TEXTS.EMAIL_PREFERENCE}</SubText>
      </Section>

      <Section small>
        <SectionHeader>
          <Title>{HEADINGS.BACKUP}</Title>
        </SectionHeader>
        <SubText left>{TEXTS.BACKUP}</SubText>
      </Section>
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