import { EVENT_TEXT } from "../../../Enum/EventText";
import speaker1 from "../../../assets/speaker1.jpg";
import speaker2 from "../../../assets/speaker2.jpg";
import EventHeaderCarousel from "../../../components/Carousel/EventHeaderCarousel";

const EventIntroSection = () => {
  const headerEvents = [
 {
  image: speaker1,
  label: EVENT_TEXT.NEW_EVENT,           
  title: EVENT_TEXT.TITLE,               
  date: EVENT_TEXT.DATE_TIME,           
  watchLive: EVENT_TEXT.WATCH_LIVE,      
  attendText: EVENT_TEXT.ATTEND_IN_PERSON, 
},
  {
    image: speaker2,
    label: "New Event",
    title: "Winning In Tommorow's Economy",
    date: "Friday, 30 June 2023 at 18:00",
    watchLive: "Watch Live",
    attendText: "Attend in Person",
    bgColor: "#FFD58C"
  },
];
  return (
<EventHeaderCarousel events={headerEvents} />
  );
};

export default EventIntroSection;
