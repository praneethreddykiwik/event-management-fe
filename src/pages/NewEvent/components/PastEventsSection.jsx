import {
  PastEventsCard,
  VideoThumbnail,
  OverlayText,
  TopRow,
  LeftGroup,
  StyledMediumHeadingWhite,
  ShareIconWhite,
  ExpandIconWhite,
  StyledHeadingBigWhite,
  StyledParagraphBoldWhite
} from "../NewEvent.styles";

import Controls from "./Controls";
import { EVENT_TEXT } from "../../../Enum/EventText";

const PastEventsSection = () => {
  return (
    <PastEventsCard>
      <VideoThumbnail>
        <OverlayText>
          <TopRow>
            <LeftGroup>
              <StyledMediumHeadingWhite left small>{EVENT_TEXT.PAST_EVENTS}</StyledMediumHeadingWhite>
              <ShareIconWhite className="material-symbols-outlined">share</ShareIconWhite>
            </LeftGroup>

            <ExpandIconWhite className="material-symbols-outlined">arrows_output</ExpandIconWhite>
          </TopRow>

          <StyledHeadingBigWhite left style={{ whiteSpace: "pre-line" }}>
            {EVENT_TEXT.PAST_EVENT_LOCATION}
          </StyledHeadingBigWhite>

          <StyledParagraphBoldWhite left>
            {EVENT_TEXT.PAST_EVENT_DATE}
          </StyledParagraphBoldWhite>
        </OverlayText>
      </VideoThumbnail>

      <Controls />
    </PastEventsCard>
  );
};

export default PastEventsSection;
