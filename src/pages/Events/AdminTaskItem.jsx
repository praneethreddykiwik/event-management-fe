import styled from "styled-components";
import Badge from "../../components/Badge/Badge.component";
import {
  StyledParagraphBold,
  StyledParagraphSmall,
} from "../../components/Styled/Typography.styled";
import { Card } from "../../components/Cards/Cards";
import { Button } from "../../components/Buttons/Button";
import { paths } from "../../constants/paths";
import useNavigateWithQuery from "../../hooks/useNavigateWithQuery";
import { ADMIN_COMMON } from "../../enum/Admin.common";
import GaugeChart from "../../components/Charts/GuageChart";

const AdminTaskItem = ({ data }) => {
  console.log("my data", data);

  const navigate = useNavigateWithQuery();

  const onClickViewDetails = (data) => {
    navigate(paths.eventsDetails, {
      state: {
        event: data,
      },
    });
  };
  const valueData = Math.floor(Math.random() * 101);
  return (
    <StyledCard>
      <Left>
        <StatusIcon type={data.type} className="material-symbols-outlined">
          {data.statusIcon}
        </StatusIcon>

        <Taskcard>
          <EventName>{data.eventName}</EventName>
          <TaskDate>Scheduled At: {data.scheduledAt}</TaskDate>
          <TaskAssignee>
            {ADMIN_COMMON.EVENT_MANAGER}: {data.firstName}
          </TaskAssignee>
        </Taskcard>
      </Left>

      <BadgeButton>
        <Badge type={data.type}>{data.statusLabel}</Badge>
        <Button onClick={() => onClickViewDetails(data)} type="secondary">
          {ADMIN_COMMON.ADMIN_DETAILS}
        </Button>
      </BadgeButton>
      <GaugeChart
        value={valueData}
        fill={valueData <= 30 ? "red" : valueData <= 70 ? "orange" : "green"}
      />
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
  display: flex;
  gap: 10px;
`;

const StatusIcon = styled.span`
  font-size: 20px;
  color: ${({ theme, type }) => theme.badgeColors[`badge-${type}-primary`]};
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
  gap: 15px;
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export default AdminTaskItem;
