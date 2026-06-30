import { CardsRow } from "./NewEvent.styles";
import styled from "styled-components";
import EventIntroSection from "./components/EventIntroSection";
import AboutAndNextEventSection from "./components/AboutAndNextEventSection";
import ParticipantsSection from "./components/ParticipantsSection";
import PastEventsSection from "./components/PastEventsSection";

const NewEvent = () => {
  return (
    <PageWrapper>
      <EventIntroSection />
      <AboutAndNextEventSection />
      {/* <CardsRow>
        <ParticipantsSection />
        <PastEventsSection />
      </CardsRow>  */}
    </PageWrapper>
  );
};

export default NewEvent;

export const PageWrapper = styled.div`
  background-color: #e8f4ff;
  padding: 0 120px 60px;

`;
