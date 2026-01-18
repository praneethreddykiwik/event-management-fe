import Badge from "../../components/Badge/Badge.component";
import { BADGE_TYPES } from "../../constants/badges";

const SampleBadge = () => {
  return (
    <>
      <Badge type={BADGE_TYPES.COMPLETED}>{BADGE_TYPES.COMPLETED}</Badge>
      <Badge type={BADGE_TYPES.PENDING}>{BADGE_TYPES.PENDING}</Badge>
      <Badge type={BADGE_TYPES.INPROGRESS}>{BADGE_TYPES.INPROGRESS}</Badge>
      <Badge type={BADGE_TYPES.ACCEPTED}>{BADGE_TYPES.ACCEPTED}</Badge>
    </>
  );
};

export default SampleBadge;
