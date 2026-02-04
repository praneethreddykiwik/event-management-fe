/** @format */
import styled from "styled-components";
import { Card } from "../../components/Cards/Cards";
import {
  StyledParagraphBold,
  StyledParagraphSmall,
} from "../../components/Styled/Typography.styled";
import { Icon } from "../../components/Icons/Icons";
import { usersRoles } from "../../constants/statuses";

const UserManagementItem = ({ data, onEdit, onDelete }) => {
  return (
    <StyledCard>
      <Left>
        <StyledParagraphBold>
          {data.firstName} {data.lastName || ""}
        </StyledParagraphBold>

        <UserMeta>Role: {data.role}</UserMeta>
        <UserMeta>Role: {usersRoles[data.role]?.label || data.role}</UserMeta>
      </Left>

      <Right>
        <IconWrapper>
          <Icon variant="edit" onClick={onEdit} />
        </IconWrapper>

        <IconWrapper danger>
          <Icon variant="delete" onClick={onDelete} />
        </IconWrapper>
      </Right>
    </StyledCard>
  );
};

export default UserManagementItem;

const StyledCard = styled(Card)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  background: ${({ theme }) => theme.colors["light-blue"]};
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
`;

const UserName = styled(StyledParagraphBold)`
`;

const UserMeta = styled(StyledParagraphSmall)`
  color: ${({ theme }) => theme.colors.textSecondary};
 
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  color: ${({ danger, theme }) =>
    danger ? theme.colors.warning : theme.colors.black};
  cursor: pointer;
`;

