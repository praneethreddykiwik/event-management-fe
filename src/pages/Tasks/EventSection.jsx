import styled from "styled-components";
import { Section } from "../../HOC/SectionsHOC";
import { mobile } from "../../theme/media-queries";
import {
  StyledMediumHeading,
  StyledParagraphSmall,
  StyledParagraphSmallGray,
} from "../../components/Styled/Typography.styled";
import { StyledHr } from "../../components/Styled/Common.styled";
import { Button } from "../../components/Buttons/Button";

export const EventSection = ({ children, event, onAddTask }) => {
  return (
    <Section key={event.eventUid}>
      <StyledTaskHeading>
        <StyledTitleText>
          <StyledMediumHeading left>{event.eventName}</StyledMediumHeading>
          <StyledParagraphSmall left>{event.eventVenue}</StyledParagraphSmall>
        </StyledTitleText>

        <Button
          icon="add"
          sx={{ width: "180px" }}
          whiteText
          onClick={() => onAddTask(event)}
        >
          Add Task
        </Button>
      </StyledTaskHeading>
      <StyledHr />

      {children}
    </Section>
  );
};

const StyledTitleText = styled.div`
  flex-basis: 50%;
`;

const StyledTaskHeading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  ${mobile`
    flex-direction: column;
    gap: 10px;
    margin-bottom: 18px;
  `}
`;
