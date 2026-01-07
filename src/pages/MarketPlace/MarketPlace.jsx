import { StyledHeading } from "../../components/Styled/Typography.styled";
import { BlueBackHOC } from "../../HOC/BlueBackHOC";
import FeaturedEvents from "./FeaturedEvents";
import { Venues } from "./Venues";
import MarketDescription from "./MarketDescription";

export const MarketPlace = () => {
  return (
    <BlueBackHOC>
      
      <MarketDescription />
      {/* <FeaturedEvents /> */}
      {/* <Venues /> */}
      <StyledHeading></StyledHeading>
      {/* <MarketDescription /> */}
      <FeaturedEvents />
      <Venues />
      {/* </BlueBackHOC> */}
    </BlueBackHOC>
  );
};