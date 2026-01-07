/** @format */

import React from "react";
import styled from "styled-components";
import {details} from "../../Mock";
import { BlueBackHOC } from "../../HOC/BlueBackHOC";
import {
  StyledHeading,
} from "../../components/Styled/Typography.styled";
import UserManagementItem from "../../pages/UserManagement/UserManagementItem";

const UserManagement = () => {
  return (
    <BlueBackHOC>
      <PageWrapper>
        <StyledHeading left>User Management</StyledHeading>

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

// const SubText = styled(StyledParagraphSmall)`
//   color: ${({ theme }) => theme.colors.textSecondary};
//   margin-bottom: 16px;
// `;
