import { BADGE_TYPES } from "../../Enum/common";
import { StyledBadge } from "../Styled/Badge.styled";

const Badge = ({ children, type }) => {
  type = (type === BADGE_TYPES.COMPLETED || type === BADGE_TYPES.ACTIVE) ? BADGE_TYPES.COMPLETED : (type === BADGE_TYPES.PENDING || type === BADGE_TYPES.INACTIVE) ? BADGE_TYPES.PENDING : type ;
  return <StyledBadge type={type}>{children}</StyledBadge>;

  //   switch (type) {
  //     case "completed":
  //       console.log("type completed", type);
  //       return <StyledCompletedBadge>{children}</StyledCompletedBadge>;
  //     case "inprogress":
  //       console.log("type inprogress", type);
  //       return <StyledInProgressBadge>{children}</StyledInProgressBadge>;
  //     case "pending":
  //       console.log("type pending", type);
  //       return <StyledPendingBadge>{children}</StyledPendingBadge>;
  //     default:
  //       console.log("type default", type);
  //       return <StyledBadge>{children}</StyledBadge>;
  //   }
};

export default Badge;

// inactive-color
