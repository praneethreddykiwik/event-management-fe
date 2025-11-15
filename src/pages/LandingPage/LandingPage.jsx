import BookVenue from "./bookVenue";
import Customer from "./customer";
import Experience from "./experience";
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
      <JoinNow />
      <Experience />
      <Customer />
      <BookVenue />
    </div>
  );
};

export default LandingPage;
