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
  StyledParagraphBoldWhite,
} from "../NewEvent.styles";

import Controls from "./Controls";
import * as enums from "../../../myEnum";

const PastEventsSection = () => {
  return (
    <PastEventsCard>
      <VideoThumbnail>
        <OverlayText>
          <TopRow>
            <LeftGroup>
              <StyledMediumHeadingWhite left small>
                {enums.PAST_EVENTS}
              </StyledMediumHeadingWhite>
              <ShareIconWhite className="material-symbols-outlined">
                share
              </ShareIconWhite>
            </LeftGroup>

            <ExpandIconWhite className="material-symbols-outlined">
              arrows_output
            </ExpandIconWhite>
          </TopRow>

          <StyledHeadingBigWhite left style={{ whiteSpace: "pre-line" }}>
            {enums.PAST_EVENT_LOCATION}
          </StyledHeadingBigWhite>

          <StyledParagraphBoldWhite left>
            {enums.PAST_EVENT_DATE}
          </StyledParagraphBoldWhite>
        </OverlayText>
      </VideoThumbnail>

      <Controls />
    </PastEventsCard>
  );
};

export default PastEventsSection;
