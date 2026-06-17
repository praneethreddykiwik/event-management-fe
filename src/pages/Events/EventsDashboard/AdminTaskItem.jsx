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
import { generateAssignEventReq } from "../../../models/requests/event.req.model";
import { RBACHOC } from "../../../RBAC/RBAC";
import { InlineDropdown } from "../../../components/Buttons/InlineButton/InlineDropdown";
import { useState } from "react";
import { Inputs } from "../../../components/Inputs/Inputs";
import { Menu } from "../../../components/UI/Menu/Menu";

const AdminTaskItem = ({ event, gridView }) => {
  const navigate = useNavigateWithQuery();
  const dispatch = useDispatch();
  const { authUser } = useSelector(authSelector);
  const { selectedEventFilters } = useSelector(eventsSelector);
  // 1. Define your bookmarks array state (add this inside AdminTaskItem)
  const [bookmarks, setBookmarks] = useState([
    { id: "work", label: "Work", checked: true },
    { id: "personal", label: "Personal", checked: false },
    { id: "urgent", label: "Urgent", checked: false },
  ]);

  const handleToggleBookmark = (name) => {
    console.log("boormakrs: ", bookmarks);
    setBookmarks((prev) =>
      prev.map((b) => ({
        ...b,
        checked: b.id === name ? true : false,
      })),
    );
    console.log("boormakrs: 2", bookmarks);
  };

  const onClickViewDetails = () => {
    navigate(`${paths.eventsDetails}?eventUid=${event.uid}`);
  };

  const assignToMeHandler = () => {
    const assigneventpayload = {
      reqPayload: generateAssignEventReq({
        eventUid: event.uid,
        assignedToUid: authUser?.uid,
        userName: authUser?.username,
      }),
    };
    dispatch(assignEventAction(assigneventpayload));
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
    <StyledCard showGridView={gridView}>
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
          </StyledParagraphSmall>
          <StyledAmdinContents showGridView={gridView}>
            <StyledParagraphSmall left>
              {enums.EVENT_MANAGER}: <StyledBold>{event.userName}</StyledBold>
            </StyledParagraphSmall>

            <StyledAssignBtnAdminsUp showGridView={gridView}>
              {isAssignedToMe ? (
                <StyledT>Assigned To Me</StyledT>
              ) : (
                <StyledBtn type="primary" onClick={assignToMeHandler}>
                  Assign to me
                </StyledBtn>
              )}
            </StyledAssignBtnAdminsUp>
          </StyledAmdinContents>
        </Taskcard>
      </Left>

      <BadgeButton showGridView={gridView}>
        <StyledFlex2 showGridView={gridView}>
          <StyledFlex2>
            <Badge type={event.type}>{event.statusLabel}</Badge>
          </StyledFlex2>
          <StyledFlex2>
            <Icon variant="chat" />
            <Menu title='Save to Bookmarks' icon="bookmark" iconColor="black" align="right">
              <MenuHeader>Save to Bookmarks</MenuHeader>

              <CheckboxListWrapper>
                {bookmarks.map((b) => (
                  <Inputs
                    key={b.id}
                    type="checkbox"
                    name={b.id}
                    value={b.checked}
                    list={[b.label]}
                    onChange={(e) => {
                      console.log("target: ", e.target);
                      handleToggleBookmark(e.target.name);
                    }}
                  />
                ))}
              </CheckboxListWrapper>
            </Menu>
            <Icon variant="alternate_email" />
            <RBACHOC perm="event:delete">
              <InlineButton
                type="delete"
                icon="delete"
                onClick={onClickDelete}
                showGridView={gridView}
              >
                Delete Event
              </InlineButton>
            </RBACHOC>
          </StyledFlex2>
        </StyledFlex2>
        <Button onClick={onClickViewDetails} type="secondary">
          View Details
        </Button>
      </BadgeButton>

      {!gridView && (
        <GaugeWrapper>
          <GaugeChart
            value={valueData}
            fill={
              valueData <= 30 ? "red" : valueData <= 70 ? "orange" : "green"
            }
          />
        </GaugeWrapper>
      )}
    </StyledCard>
  );
};

const StyledAssignBtnAdminsUp = styled.div`
  display: flex;
  ${mobile`    
   display:none;
  `};
`;

const StyledAmdinContent = styled(StyledParagraphSmall)`
  ${mobile`
    font-size:12px;
  `}
`;

const StyledAmdinContents = styled(StyledParagraphSmall)`
  display: flex;
  flex-direction: ${(props) => (props.showGridView ? "column" : "")};
  align-items: start;
  gap: 8px;
  ${mobile`
    font-size:12px;
  `}
`;

const StyledFlex2 = styled.div`
  display: flex;
  justify-content: ${(props) => (props.showGridView ? "space-between" : "")};
  gap: ${(props) => (props.showGridView ? "10px" : "18px")};
  align-items: center;
  ${mobile`
     gap: 12px;
  `}
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: ${(props) => (props.showGridView ? "column" : "row")};
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;
  width: ${(props) => (props.showGridView ? "32%" : "")};

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
  width: ${(props) => (props.showGridView ? "100%" : "25%")};
  gap: 15px;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-left: ${(props) => (props.showGridView ? "unset" : "auto")};
  padding: 16px 0;
  ${(props) => (props.showGridView ? "padding-bottom: 0" : "")};
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
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 8px;
`;

const StyledBtn = styled(Button)`
  height: 20px;
  padding: 0px 20px;
  color: white;
  span {
    font-size: 12px;
  }
`;

const DropdownHeader = styled.div`
  padding: 6px 16px;
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  color: #70757a;
  border-bottom: 1px solid #f1f3f4;
  margin-bottom: 4px;
`;

const CheckboxRow = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  color: #3c4043;
  user-select: none;
  white-space: nowrap;

  &:hover {
    background-color: #f1f3f4;
  }
  input {
    cursor: pointer;
    margin: 0;
  }
`;

const CheckboxListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px 8px;

  /* Selects each factory item container wrapper to create unified spacing */
  & > * {
    padding: 6px 8px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #f1f3f4;
    }
  }
`;

const MenuHeader = styled.div`
  padding: 6px 16px;
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  color: #70757a;
  border-bottom: 1px solid #f1f3f4;
  margin-bottom: 4px;
  white-space: nowrap;
`;

export default AdminTaskItem;
