import styled from "styled-components";
import Badge from "../../../components/Badge/Badge.component";
import {
  StyledParagraphBold,
  StyledParagraphSmall,
  StyledParagraphSmallGray,
} from "../../../components/Styled/Typography.styled";
import { Card } from "../../../components/Cards/Cards";
import { Button } from "../../../components/Buttons/Button";
import { paths } from "../../../constants/paths";
import useNavigateWithQuery from "../../../hooks/useNavigateWithQuery";
import * as enums from "../../../myEnum";
import GaugeChart from "../../../components/Charts/GuageChart";
import { mobile } from "../../../theme/media-queries";
import { formatDateTime } from "../../../utils/utils";

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
          <StyledParagraphSmallGray>
            Scheduled At: {formatDateTime(data.scheduledAt)}
          </StyledParagraphSmallGray>
          <StyledParagraphSmallGray>
            {enums.EVENT_VENUE}:{" "}
            {data.venue?.charAt(0).toUpperCase() + data.venue?.slice(1)}
          </StyledParagraphSmallGray>{" "}
          <StyledParagraphSmallGray>
            {enums.EVENT_MANAGER}: {data.firstName} {data.lastName}
          </StyledParagraphSmallGray>{" "}
        </Taskcard>
      </Left>

      <BadgeButton>
        <Badge type={data.type}>{data.statusLabel}</Badge>
        <Button onClick={() => onClickViewDetails(data)} type="secondary">
          {enums.ADMIN_DETAILS}
        </Button>
      </BadgeButton>
      <GaugeWrapper>
        <GaugeChart
          value={valueData}
          fill={valueData <= 30 ? "red" : valueData <= 70 ? "orange" : "green"}
        />
      </GaugeWrapper>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  display: flex;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;
  ${mobile`
    flex-direction: column;
    gap: 10px;
    padding: 12px;
  `}
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
  margin-top: -2px;
`;

const EventName = styled(StyledParagraphBold)`
  margin-bottom: 5px;
`;

const BadgeButton = styled.div`
  width: 25%;
  gap: 15px;
  display: flex;
  align-items: center;
  margin-left: auto;

  ${mobile`
    width: 100%;
    margin-left: 0;
    justify-content: flex-start;
  `}
`;

const GaugeWrapper = styled.div`
  ${mobile`
    display: none;
  `}
`;
export default AdminTaskItem;
