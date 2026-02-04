import React from "react";
import styled from "styled-components";
// import { StyledContainer, StyledContent } from '../../components/Styled/AccountSettings.styled'
import AccountSettingsLeftNav from "./AccountSettingsLeftNav";
import AccountSettingsRightContent from "./AccountSettingsRightContent";
import Footer from "../../components/Footer/Footer";

const AccountSettings = () => {
  return (
    <>
      <StyledContainer>
        <StyledContent>
          <AccountSettingsLeftNav />
          <AccountSettingsRightContent />
        </StyledContent>
      </StyledContainer>
    </>
  );
};

export default AccountSettings;

const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.colors["light-blue"]};
  padding: 0 120px;
`;

const StyledContent = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
