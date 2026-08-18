import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { eventsSelector } from "../../../redux/events/events.slice";
import { usersSelector } from "../../../redux/users/users.slice";
import { generateNewEventsInputs } from "../../../redux/farms/metadata/event.metadata";
import { updateAllEventInputs } from "../../../redux/farms/farms.slice";
import useNavigateWithQuery from "../../../hooks/useNavigateWithQuery";
import { paths } from "../../../constants/paths";
import { EventCards } from "./EventCards/EventCards";
import CreateEventButtons from "./CreateEventManagerB";
import ManagersPopupModal from "./AdminPopupModal/ManagersPopupModal";

const EventsDashboard = () => {
  const dispatch = useDispatch();
  const [openManagersPopup, setOpenManagersPopup] = useState(false);

  const { eventsStatusCounts } = useSelector(eventsSelector);

  const { eventManagers } = useSelector(usersSelector);
  const navigate = useNavigateWithQuery();

  const onCreateEvent = () => {
    const createEventInputs = generateNewEventsInputs(eventManagers);
    dispatch(updateAllEventInputs(createEventInputs));
    navigate(`${paths.createEvent}`);
  };

  return (
    <>
      <EventCards events={eventsStatusCounts} eventManagers={eventManagers} />
      <CreateEventButtons
        onCreateEvent={onCreateEvent}
        setOpenManagersPopup={setOpenManagersPopup}
      />
      {openManagersPopup && (
        <ManagersPopupModal onClose={() => setOpenManagersPopup(false)} />
      )}
    </>
  );
};

export default EventsDashboard;


