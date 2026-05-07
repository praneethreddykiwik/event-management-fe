// import styled from "styled-components";

import BookVenue from "./bookVenue";
import Customer from "./customer";
import Experience from "./experience";
import FindInspiration from "./FindInspiration";
import GetStarted from "./GetStarted";
import HeroSection from "./HeroSection";
import JoinNow from "./JoinNow";
import TrustedBy from "./TrustedBy";

const Home = () => {
  return (
    <>
     <HeroSection /> 
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

export default Home;
