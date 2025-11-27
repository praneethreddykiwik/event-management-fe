import { PageWrapper, CardsRow } from "./NewEvent.styles";
import EventIntroSection from "./components/EventIntroSection";
import AboutAndNextEventSection from "./components/AboutAndNextEventSection";
import ParticipantsSection from "./components/ParticipantsSection";
import PastEventsSection from "./components/PastEventsSection";

const NewEvent = () => {
  return (
    <PageWrapper>
      <EventIntroSection />
     <AboutAndNextEventSection /> 
      <CardsRow>
        <ParticipantsSection />
        <PastEventsSection />
      </CardsRow>
    </PageWrapper>
  );
};

export default NewEvent;
