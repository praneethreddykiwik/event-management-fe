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
import {
  assignEventAction,
  fetchEventsDispatch,
} from "../../../redux/events/events.actions";
import { authSelector } from "../../../redux/auth/auth.slice";
import { Icon } from "../../../components/Icons/Icons";
import { deleteEventDispatch } from "../../../redux/events/events.actions";
import { InlineButton } from "../../../components/Buttons/InlineButton/InlineButton";
import { setCurrentEvent } from "../../../redux/events/events.slice";

const AdminTaskItem = ({ data }) => {
  const navigate = useNavigateWithQuery();
  const dispatch = useDispatch();
  const { authUser } = useSelector(authSelector);

  const onClickViewDetails = (data) => {
    dispatch(setCurrentEvent(data));
    navigate(paths.eventsDetails);
  };

  const assignToMeHandler = () => {
    const reqPayload = {
      eventUid: data.uid,
      assignedToUid: authUser.uid,
      userName: authUser.username,
    };
    dispatch(assignEventAction({ reqPayload }));
  };

  const onClickDelete = async () => {
    await dispatch(
      deleteEventDispatch({
        eventUid: data.uid,
        tenantUid: data.tenantUid,
        deletedByUid: data.deletedByUid,
        deleteReason: "",
      }),
    );
    dispatch(fetchEventsDispatch());
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
            {enums.EVENT_MANAGER}: {data.userName}{" "}
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
          <InlineButton type="delete" icon="delete" onClick={onClickDelete}>
            Delete Event
          </InlineButton>
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
    margin-right: 100%;
    display:flex;
  `}
`;

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

export default AdminTaskItem;
