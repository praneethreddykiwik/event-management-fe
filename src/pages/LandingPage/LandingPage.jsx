import BookVenue from "./bookVenue";
import Customer from "./customer";
import Experience from "./experience";
import FindInspiration from "./FindInspiration";
import GetStarted from "./GetStarted";
import JoinNow from "./JoinNow";
import TrustedBy from "./TrustedBy";

const LandingPage = () => {
  return (
    <>
      <GetStarted />
      <FindInspiration />
      <TrustedBy />
      <JoinNow />
      <Experience />
      <Customer />
      <BookVenue />
    </>
  );
};

export default LandingPage;
