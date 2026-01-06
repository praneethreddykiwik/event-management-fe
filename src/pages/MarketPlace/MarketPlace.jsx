import { StyledHeading } from "../../components/Styled/Typography.styled";
import { BlueBackHOC } from "../../HOC/BlueBackHOC";
import  FeaturedEvents  from "./FeaturedEvents";
import { Venues } from "./Venues";

export const MarketPlace = () => {
  return (
    <BlueBackHOC>
      <StyledHeading>Welcome to market place.</StyledHeading>
      {/* <MarketDescription /> */}
     <FeaturedEvents />
      {/* <Venues /> */}
    {/* </BlueBackHOC> */}
    </BlueBackHOC>
  );
};
