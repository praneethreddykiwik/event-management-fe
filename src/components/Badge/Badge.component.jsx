import { BADGE_TYPES } from "../../constants/badges";
import { Icon } from "../Icons/Icons";
import { StyledBadge, StyledBadge2 } from "../Styled/Badge.styled";

const Badge = ({ children, type }) => {
  type =
    type === BADGE_TYPES.COMPLETED || type === BADGE_TYPES.ACTIVE
      ? BADGE_TYPES.COMPLETED
      : type === BADGE_TYPES.PENDING || type === BADGE_TYPES.INACTIVE
        ? BADGE_TYPES.PENDING
        : type;

  return <StyledBadge type={type}>{children}</StyledBadge>;
};

export const Badge2 = ({ children, approved }) => {
  const badgeType = approved ? BADGE_TYPES.COMPLETED : BADGE_TYPES.PENDING;
  const badgeIcon = approved ? "check_circle" : "cancel";

  return (
    <StyledBadge2 type={badgeType}>
      {children} <Icon>{badgeIcon}</Icon>
    </StyledBadge2>
  );
};

export default Badge;
