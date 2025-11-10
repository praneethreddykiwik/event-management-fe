import FindInspiration from "./FindInspiration";
import GetStarted from "./GetStarted";
import JoinNow from "./JoinNow";
import TrustedBy from "./TrustedBy";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <GetStarted />
      <FindInspiration />
      <TrustedBy />
      <JoinNow/>
    </div>
  );
};

export default LandingPage;
