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

export const TitleBox = () => {
  const { currentEvent: event } = useSelector(eventsSelector);

  const navigate = useNavigateWithQuery();
  const dispatch = useDispatch();

  const { eventManagers } = useSelector(usersSelector);

  const onClickEdit = () => {
    const createEventInputs = generateEventDataToEdit(eventManagers, event);
    dispatch(updateAllEventInputs(createEventInputs));
    navigate(`${paths.createEvent}`, {
      state: {
        mode: "edit",
      },
    });
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
        <Button type="delete" icon="delete" onClick={onClickTitleDelete}>
          Delete Event
        </Button>
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
