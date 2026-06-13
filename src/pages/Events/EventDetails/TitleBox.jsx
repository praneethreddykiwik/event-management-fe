import styled from "styled-components";
import { mobile } from "../../../theme/media-queries";
import Badge from "../../../components/Badge/Badge.component";
import { Button } from "../../../components/Buttons/Button";
import { StyledHeading } from "../../../components/Styled/Typography.styled";
import { BADGE_TYPES } from "../../../constants/badges";
import { paths } from "../../../constants/paths";
import { useDispatch, useSelector } from "react-redux";
import { deleteEventDispatch } from "../../../redux/events/events.actions";
import { usersSelector } from "../../../redux/users/users.slice";
import { generateEventDataToEdit } from "../../../redux/farms/metadata/event.metadata";
import useNavigateWithQuery from "../../../hooks/useNavigateWithQuery";
import { updateAllEventInputs } from "../../../redux/farms/farms.slice";
import { eventsSelector } from "../../../redux/events/events.slice";
import { fetchManagersAction } from "../../../redux/users/users.actions";
import { RBACHOC } from "../../../RBAC/RBAC";

export const TitleBox = () => {
  const { eventDetails: event } = useSelector(eventsSelector);

  const navigate = useNavigateWithQuery();
  const dispatch = useDispatch();

  const { eventManagers } = useSelector(usersSelector);

  const onClickEdit = () => {
    const callback = (eventManagersRes) => {
      const createEventInputs = generateEventDataToEdit(
        eventManagersRes,
        event,
      );
      dispatch(updateAllEventInputs(createEventInputs));

      navigate(`${paths.createEvent}?eventUid=${event.uid}`, {
        state: {
          mode: "edit",
        },
      });
    };
    if (!eventManagers.length) {
      dispatch(fetchManagersAction({ callback }));
    } else {
      callback(eventManagers);
    }
  };

  const onClickTitleDelete = () => {
    dispatch(
      deleteEventDispatch({
        eventUid: event.uid,
        tenantUid: event.tenantUid,
        deletedByUid: event.deletedByUid,
        deleteReason: "",
      }),
    );
    navigate(paths.eventsDashboard);
  };

  return (
    <StyledCtn>
      <StyledTitleBox>
        <StyledHeading>{event.eventName}</StyledHeading>
        <StyledBadgeCtn>
          <StyledBadge type={event.type}>{event.eventType}</StyledBadge>
          <StyledBadge type={BADGE_TYPES.ACCEPTED}>
            {BADGE_TYPES.CORPORATE}
          </StyledBadge>
        </StyledBadgeCtn>
      </StyledTitleBox>
      <StyledBtnCtn>
        <Button type="outlined" icon="edit" onClick={onClickEdit}>
          Edit Event
        </Button>
        <RBACHOC perm="event:delete">
          <Button type="delete" icon="delete" onClick={onClickTitleDelete}>
            Delete Event
          </Button>
        </RBACHOC>
      </StyledBtnCtn>
    </StyledCtn>
  );
};

const StyledCtn = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
`;

const StyledTitleBox = styled.div``;
const StyledBtnCtn = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-basis: 40%;

  ${mobile`
    flex-wrap: wrap;
      flex-basis: 100%;
  `}
`;

const StyledBadgeCtn = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

const StyledBadge = styled(Badge)`
  height: 10%;
`;
