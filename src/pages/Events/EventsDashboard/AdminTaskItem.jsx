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
import { useDispatch, useSelector } from "react-redux";
import { assignEventAction } from "../../../redux/events/events.actions";
import { authSelector } from "../../../redux/auth/auth.slice";
import { Icon } from "../../../components/Icons/Icons";

const AdminTaskItem = ({ data }) => {
  const navigate = useNavigateWithQuery();
  const dispatch = useDispatch();

  const { authUser } = useSelector(authSelector);

  const onClickViewDetails = (data) => {
    navigate(paths.eventsDetails, {
      state: {
        event: data,
      },
    });
  };

  const assignToMeHandler = () => {
    const reqPayload = {
      eventUid: data.uid,
      assignedToUid: authUser.uid,
    };
    dispatch(assignEventAction({ reqPayload }));
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
          <StyledAmdinContent>
            Scheduled At: {formatDateTime(data.scheduledAt)}
          </StyledAmdinContent>
          <StyledParagraphSmall left>
            {enums.EVENT_VENUE}:{" "}
            {data.venue?.charAt(0).toUpperCase() + data.venue?.slice(1)}
          </StyledParagraphSmall>{" "}
          <StyledAmdinContents>
            {enums.EVENT_MANAGER}: {data.firstName} {data.lastName}{" "}
            <StyledAssignBtnAdminsUp>
              <Button type="transparent" onClick={assignToMeHandler}>
                Assign to me
              </Button>
            </StyledAssignBtnAdminsUp>
          </StyledAmdinContents>{" "}
        </Taskcard>
      </Left>

      <BadgeButton>
        <StyledFlex2>
          <Badge type={data.type}>{data.statusLabel}</Badge>
          <Icon variant="alternate_email" />
          <Icon variant="chat" />
          <Button type="inline-delete">Delete</Button>
        </StyledFlex2>
        <StyledAssignBtnAdminDown>
          <Button type="transparent" onClick={assignToMeHandler}>
            Assign to me
          </Button>
        </StyledAssignBtnAdminDown>
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

const StyledAssignBtnAdminDown = styled.div`
  display: none;
  ${mobile`    
    display:flex;
  `}
`;

const StyledAssignBtnAdminsUp = styled.div`
  ${mobile`    
   display:none;
  `}
`;

const StyledAmdinContent = styled(StyledParagraphSmall)`
  ${mobile`
    font-size:12px;
  `}
`;

const StyledAmdinContents = styled(StyledParagraphSmall)`
  display: flex;
  align-items: center;
  ${mobile`
    font-size:12px;
     white-space: nowrap;
  `}
`;
const StyledFlex2 = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
  ${mobile`
     gap: 12px;
  `}
`;

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

  ${mobile`
    padding: 16px 0;
  `}
`;

const StatusIcon = styled.span`
  font-size: ${({ theme }) => theme.typography["heading-h3"]["font-size"]};
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
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  padding: 16px 0;
  flex-basis: 30%;
  ${mobile`
    width: 100%;
    margin-top:-20px;
  `}
`;

const GaugeWrapper = styled.div`
  display: flex;
  margin-left: 20px;
  ${mobile`
    display: none;
  `}
`;
export default AdminTaskItem;
