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
  min-height: 768px;
  padding-left: 120px;
  padding-right: 120px;
  padding-bottom: 60px;

  @media (max-width: 768px) {
    padding: 16px;
    padding-bottom: 40px;
  }
`;
