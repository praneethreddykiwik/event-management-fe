import styled from "styled-components";
import { Venue } from "../../components/Venue/Venue";
import { StyledHeading, StyledAnchorSmall} from "../../components/Styled/Typography.styled";

export const Venues = () => {
  const venues = [
    {
      image: "public/venue_imgs/venue img1.jpeg",
      address: "775 Rolling Green Rd.",
      name: "Andhra Pradesh",
      description: "Full | Driving deep house with fat bassline, guitar hook, huge beats, euphoric synths & soulful male",
      bookings: "10K Bookings",
      available: true,
    },
    {
      image: "public/venue_imgs/venue img2.jpg",
      address: "18 rue de Belleville 75020 Paris",
      name: "Marmaris, Dalaman TUR",
      description: "Behandlungskomplex vom 6. bis zum vollendeten 59. Lebensjahr",
      bookings: "5K Bookings",
      available: true,
    },
    {
      image: "public/venue_imgs/venue img3.jpeg",
      address: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
      name: "Overland Park, KS",
      description: "Need access to a restricted Solution? Let us..",
      bookings: "35K Bookings",
      available: false,
    },
    {
      image: "public/venue_imgs/venue img4.jpeg",
      address: "4 Novella Block, Eichmannview",
      name: "East Wichita",
      description: "Torsdag settes det ny strømprisrekord når døgnprisen passerer",
      bookings: "45K Bookings",
      available: true,
    },
    {
      image: "public/venue_imgs/venue img5.jpeg",
      address: "67B Gregorio Grove, Jaskolsville",
      name: "Platis Gialos, Mykonos, Greece",
      description: "On this site you can discover beautiful products with your favorite brands",
      bookings: "6K Bookings",
      available: false,
    },
    {
      image: "public/venue_imgs/venue img6.jpeg",
      address: "Jeans & Co, 13011, Bern, CHE",
      name: "Pasadena Store Front",
      description: "The risk for pet exposure to human prescription topical medications is high.",
      bookings: "22K Bookings",
      available: true,
    },
  ];

  return (
    <Wrapper>
      <Header>
        <Left>
          <StyledHeading left>Venues</StyledHeading>
          <StyledAnchorSmall>View more</StyledAnchorSmall>
        </Left>

        <Right>
          <span >‹</span>
          <span>›</span>
        </Right>
      </Header>

      <Grid>
        {venues.map((venue, index) => (
          <Venue key={index} venueDetails={venue} />
        ))}
      </Grid>
    </Wrapper>
  );
};


const Wrapper = styled.div`
  padding: 20px;
  background: #f6fbfc;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Right = styled.div`
  span {
    font-size: 20px;
    margin-left: 10px;
    cursor: pointer;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;