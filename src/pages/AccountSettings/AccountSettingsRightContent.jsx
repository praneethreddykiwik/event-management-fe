import React, { useState } from "react";
import google from "../../assets/Logo/Google.svg.webp";
import * as enums from "../../myEnum";
import styled from "styled-components";
import { StyledHr } from "../../components/Styled/Common.styled";
import {
  StyledHeading,
  StyledParagraphBold,
  StyledParagraphSmallGray,
} from "../../components/Styled/Typography.styled";
import Input from "@mui/material/Input";
import { Button } from "../../components/Buttons/Button";

const AccountSettingsRightContent = () => {
  const [upgradeOptions, setUpgradeOptions] = useState([]);

  function handleCheckBoxChage(data) {
    setUpgradeOptions((prev) =>
      data.checked ? [...prev, data.item] : prev.filter((v) => v !== data.item),
    );
  }
  return (
    <StyledRightContent>
      <StyledHeading left>{enums.ACCOUNT_SETTINGS}</StyledHeading>
      <StyledHr />

      <Section medium>
        <SectionHeader>
          <StyledParagraphBold>{enums.LINKED_ACCOUNTS}</StyledParagraphBold>
          <Action>+ Add</Action>
        </SectionHeader>
        <RowLink>
          <GoogleLogo src={google} alt="google" />
          <StyledParagraphSmallGray>Google</StyledParagraphSmallGray>
        </RowLink>
      </Section>

      <Section small>
        <SectionHeader>
          <StyledParagraphBold>{enums.EMAIL_PREFERENCE}</StyledParagraphBold>
          <Action>
            <ActionSpan
              className="material-symbols-outlined"
              style={{ fontSize: "18px" }}
            >
              autorenew
            </ActionSpan>
          </Action>
        </SectionHeader>
        <StyledParagraphSmallGray left>
          {enums.EMAIL_PREFERENCE}
        </StyledParagraphSmallGray>
      </Section>

      <Section small>
        <SectionHeader>
          <StyledParagraphBold>{enums.BACKUP_AND_RESTORE}</StyledParagraphBold>
        </SectionHeader>
        <StyledParagraphSmallGray left>{enums.BACKUP}</StyledParagraphSmallGray>
      </Section>
      <StyledButtonContainer left>
        <StyledAccButton whiteText>Upgrade now </StyledAccButton>
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

const textAlign = ({ left, right }) =>
  left ? "left" : right ? "right" : "center";

const marginTop = ({ small, medium }) => (small ? 25 : medium ? 50 : 75);

const StyledRightContent = styled.div`
  flex: 1;
  padding-top: 10px;
  border-bottom: 1px solid #eee;
  padding: 0 40px;
`;

const Section = styled.div`
  margin-top: ${marginTop}px;
  margin-bottom: 50px;
`;

const SectionHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const Action = styled.button`
  color: #060058;
  font-size: 14px;
  font-weight: 500;
  margin-left: 25px;
  cursor: pointer;
`;

const ActionSpan = styled.span`
  transform: rotate(45deg);
  margin-right: 10px;
`;

const RowLink = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  //  background: red;
`;

const GoogleLogo = styled.img`
  width: 20px;
  position: relative;
  right: 4px;
  bottom: 1px;
`;

const StyledButtonContainer = styled.div`
  margin: 10px 0 25px 0;
  text-align: ${textAlign};
`;

const StyledAccButton = styled(Button)`
  width: auto;
`;

const UpgrateOptions = styled.div`
  margin: 40px 0;
  color: ${({ theme }) => theme.colors["text-gray-color"]};
`;
