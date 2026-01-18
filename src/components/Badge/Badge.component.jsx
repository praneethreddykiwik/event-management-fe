import { BADGE_TYPES } from "../../constants/badges";
import { StyledBadge } from "../Styled/Badge.styled";

const Badge = ({ children, type }) => {
  type =
    type === BADGE_TYPES.COMPLETED || type === BADGE_TYPES.ACTIVE
      ? BADGE_TYPES.COMPLETED
      : type === BADGE_TYPES.PENDING || type === BADGE_TYPES.INACTIVE
      ? BADGE_TYPES.PENDING
      : type;

  return <StyledBadge type={type}>{children}</StyledBadge>;
};

export default Badge;
