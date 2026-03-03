import styled from "styled-components";
import { mobile } from "../../../theme/media-queries";
import Badge from "../../../components/Badge/Badge.component";
import { Button } from "../../../components/Buttons/Button";
import { StyledHeading } from "../../../components/Styled/Typography.styled";
import { BADGE_TYPES } from "../../../constants/badges";
import { useLocation } from "react-router-dom";

export const TitleBox = () => {
  const { state } = useLocation();
  const event = state?.event;

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
        <Button type="outlined" icon="edit">
          Edit Event
        </Button>
        <Button type="delete" icon="delete">
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
