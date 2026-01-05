import styled from "styled-components";
import Badge from "../../components/Badge/Badge.component";
import { StyledOutlinedButton } from "../../components/Styled/Buttons.styled";
import {
  StyledParagraphBold,
  StyledParagraphSmall,
} from "../../components/Styled/Typography.styled";
import { ADMIN_COMMON } from "../../Enum/Admin.common";
import { Card } from "../../components/Cards/Cards";

const AdminTaskItem = ({ data }) => {
  return (
    <StyledCard>
      <Left>
        <Taskcard>
          <EventName>{data.eventName}</EventName>
          <TaskDate>Scheduled At: {data.scheduledAt}</TaskDate>
          <TaskAssignee>
            {ADMIN_COMMON.EVENT_MANAGER}: {data.firstName}
          </TaskAssignee>
        </Taskcard>
      </Left>
      <BadgeButton>
        <Badge type={data.type}>{data.status}</Badge>
        <ViewButton>{ADMIN_COMMON.ADMIN_DETAILS}</ViewButton>
      </BadgeButton>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  display: flex;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
`;
const Left = styled.div`
  // padding: 20px 0;
  display: flex;
  gap: 10px;
`;

const Taskcard = styled.div`
  justify-items: left;
  margin: -1px;
`;
const EventName = styled(StyledParagraphBold)`
  margin-top: 0;
  margin-bottom: 5px;
`;
const TaskAssignee = styled(StyledParagraphSmall)`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;
const TaskDate = styled(StyledParagraphSmall)`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;
const BadgeButton = styled.div`
  width: 25%;
  gap: 5px;
  display: flex;
  align-content: center;
  align-items: center;
  margin: 0;
`;
const ViewButton = styled(StyledOutlinedButton)`
  background-color: #eeeeee;
`;

export default AdminTaskItem;
