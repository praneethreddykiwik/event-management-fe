import styled from "styled-components";
import Badge from "../../../components/Badge/Badge.component";
import {
  StyledParagraphBold,
  StyledParagraphSmall,
} from "../../../components/Styled/Typography.styled";
import { Card } from "../../../components/Cards/Cards";
import { Button } from "../../../components/Buttons/Button";
import { paths } from "../../../constants/paths";
import * as enums from "../../../myEnum";
import GaugeChart from "../../../components/Charts/GuageChart";
import { mobile } from "../../../theme/media-queries";
import { formatDateTime } from "../../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import {
  assignEventAction,
  fetchEventsDispatch,
} from "../../../redux/events/events.actions";
import { authSelector } from "../../../redux/auth/auth.slice";
import { Icon } from "../../../components/Icons/Icons";
import { deleteEventDispatch } from "../../../redux/events/events.actions";
import { InlineButton } from "../../../components/Buttons/InlineButton/InlineButton";
import useNavigateWithQuery from "../../../hooks/useNavigateWithQuery";
import { eventsSelector } from "../../../redux/events/events.slice";

const AdminTaskItem = ({ event }) => {
  const navigate = useNavigateWithQuery();
  const dispatch = useDispatch();
  const { authUser } = useSelector(authSelector);
  const { selectedEventFilters } = useSelector(eventsSelector);

  const onClickViewDetails = () => {
    navigate(`${paths.eventsDetails}?eventUid=${event.uid}`);
  };

  const assignToMeHandler = () => {
    const reqPayload = {
      eventUid: event.uid,
      assignedToUid: authUser?.uid,
      userName: authUser?.username,
    };
    dispatch(assignEventAction({ reqPayload }));
  };

  const onClickDelete = async () => {
    await dispatch(
      deleteEventDispatch({
        eventUid: event.uid,
        tenantUid: event.tenantUid,
        deletedByUid: event.deletedByUid,
        deleteReason: "",
      }),
    );

    const query = selectedEventFilters
      .filter((fl) => fl.selected)
      .map((m) => m.value)
      .join(",");

    dispatch(fetchEventsDispatch({ query: `?status=${query}` }));
  };

  const valueData = Math.floor(Math.random() * 101);
  const isAssignedToMe = event.assignedToUid === authUser?.uid;

  return (
    <StyledCard>
      <Left>
        <StatusIcon type={event.type} className="material-symbols-outlined">
          {event.statusIcon}
        </StatusIcon>

        <Taskcard>
          <EventName>{event.eventName}</EventName>
          <StyledAmdinContent>
            Scheduled At: {formatDateTime(event.scheduledAt)}
          </StyledAmdinContent>
          <StyledParagraphSmall left>
            {enums.EVENT_VENUE}:{" "}
            {event.venue?.charAt(0).toUpperCase() + event.venue?.slice(1)}
          </StyledParagraphSmall>{" "}
          <StyledAmdinContents>
            {enums.EVENT_MANAGER}: <StyledBold>{event.userName}</StyledBold>
            <StyledAssignBtnAdminsUp>
              {isAssignedToMe ? (
                <StyledT>Assigned To Me</StyledT>
              ) : (
                <StyledBtn type="primary" onClick={assignToMeHandler}>
                  Assign to me
                </StyledBtn>
              )}
            </StyledAssignBtnAdminsUp>
          </StyledAmdinContents>{" "}
        </Taskcard>
      </Left>

      <BadgeButton>
        <StyledFlex2>
          <Badge type={event.type}>{event.statusLabel}</Badge>
          <Icon variant="alternate_email" />
          <Icon variant="chat" />
          <InlineButton type="delete" icon="delete" onClick={onClickDelete}>
            Delete Event
          </InlineButton>
        </StyledFlex2>
        <Button onClick={onClickViewDetails} type="secondary">
          View Details
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

const StyledAssignBtnAdminsUp = styled.div`
  display: flex;
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
  gap: 10px;
  margin-right: auto;
  display: flex;
  ${mobile`
    justify-content: space-between;
    width: 100%;
    padding: 16px 0;
    flex-direction: row-reverse;
  `}
`;

const StatusIcon = styled.span`
  font-size: ${({ theme }) => theme.typography["heading-h3"]["font-size"]};
  color: ${({ theme, type }) => theme.badgeColors[`badge-${type}-primary`]};
  ${mobile`
 
  `}
`;

const Taskcard = styled.div`
  justify-items: left;
  margin-top: -2px;
`;

const EventName = styled(StyledParagraphBold)`
  margin-bottom: 5px;
  text-align: left;
`;

const BadgeButton = styled.div`
  width: 25%;
  gap: 15px;
  display: flex;
  flex-direction: column;
  align-items: left;
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

const StyledBold = styled.span`
  font-weight: bold;
  margin-left: 4px;
`;

const StyledT = styled.span`
  color: #26c867;
  margin-left: 8px;
`;

const StyledBtn = styled(Button)`
  height: 20px;
  padding: 0px 20px;
  color: white;
  margin-left: 8px;

  span {
    font-size: 12px;
  }
`;

export default AdminTaskItem;
