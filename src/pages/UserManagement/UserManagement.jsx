/** @format */

import React from "react";
import styled from "styled-components";
import {details} from "../../Mock";
import { BlueBackHOC } from "../../HOC/BlueBackHOC";
import {
  StyledHeading,
} from "../../components/Styled/Typography.styled";
import UserManagementItem from "../../pages/UserManagement/UserManagementItem";
import { StyledBaseButton } from "../../components/Styled/Buttons.styled";
import useNavigateWithQuery from "../../hooks/useNavigateWithQuery";

const UserManagement = () => {
  const navigate = useNavigateWithQuery();
  return (
    <BlueBackHOC>
      <PageWrapper>
        <StyledHeading left>User Management</StyledHeading>        
          <StyledButtonContainer right>
            <StyledAccButton onClick={() => navigate("/registration")}>Create User </StyledAccButton>
          </StyledButtonContainer>

        {details.map((user) => (
          <UserManagementItem key={user.uid} data={user} />
        ))}
      </PageWrapper>
    </BlueBackHOC>
  );
};

export default UserManagement;

const PageWrapper = styled.div`
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: -70px;
`;

export const StyledAccButton = styled(StyledBaseButton)`
  width: auto;
  color: #fff;
`;
