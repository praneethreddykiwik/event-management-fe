import React, { useState } from "react";
import google from "../../assets/Logo/Google.svg.webp";
import * as enums from "../../myEnum";
import {
  Action,
  ActionSpan,
  RowLink,
  Section,
  SectionHeader,
  StyledAccButton,
  StyledButtonContainer,
  StyledRightContent,
  SubText,
  TextLink,
  Title,
  UpgrateOptions,
  GoogleLogo,
} from "../../components/Styled/AccountSettings.styled";
import { Input } from "../../components/Inputs/Input";
import { StyledHr } from "../../components/Styled/Common.styled";
import { StyledHeading } from "../../components/Styled/Typography.styled";

const AccountSettingsRightContent = () => {
  const [upgradeOptions, setUpgradeOptions] = useState([]);

  function handleCheckBoxChage(data) {
    setUpgradeOptions((prev) =>
      data.checked ? [...prev, data.item] : prev.filter((v) => v !== data.item)
    );
  }
  return (
    <StyledRightContent>
      <StyledHeading left>{enums.ACCOUNT_SETTINGS}</StyledHeading>
      <StyledHr />

      <Section medium>
        <SectionHeader>
          <Title>{enums.LINKED_ACCOUNTS}</Title>
          <Action>+ Add</Action>
        </SectionHeader>
        <RowLink>
          <GoogleLogo src={google} alt="google" />
          <TextLink>Google</TextLink>
        </RowLink>
      </Section>

      <Section small>
        <SectionHeader>
          <Title>{enums.EMAIL_PREFERENCE}</Title>
          <Action>
            <ActionSpan
              className="material-symbols-outlined"
              style={{ fontSize: "18px" }}
            >
              autorenew
            </ActionSpan>
          </Action>
        </SectionHeader>
        <SubText left>{enums.EMAIL_PREFERENCE}</SubText>
      </Section>

      <Section small>
        <SectionHeader>
          <Title>{enums.BACKUP_AND_RESTORE}</Title>
        </SectionHeader>
        <SubText left>{enums.BACKUP}</SubText>
      </Section>
      <StyledButtonContainer left>
        <StyledAccButton>Upgrade now </StyledAccButton>
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
