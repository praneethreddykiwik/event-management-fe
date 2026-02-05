import styled from "styled-components";
import { Venue } from "../../components/Venue/Venue";
import {
  StyledHeading,
  StyledAnchorSmall,
} from "../../components/Styled/Typography.styled";
import venueImg1 from "../../assets/venue_imgs/venueImg1.jpeg";
import venueImg2 from "../../assets/venue_imgs/venueImg2.jpg";
import venueImg3 from "../../assets/venue_imgs/venueImg3.jpeg";
import venueImg4 from "../../assets/venue_imgs/venueImg4.jpeg";
import venueImg5 from "../../assets/venue_imgs/venueImg5.jpeg";
import venueImg6 from "../../assets/venue_imgs/venueImg6.jpeg";

export const Venues = () => {
  const venues = [
    {
      image: venueImg1,
      address: "775 Rolling Green Rd.",
      title: "Andhra Pradesh",
      description:
        "Full | Driving deep house with fat bassline, guitar hook, huge beats, euphoric synths & soulful male",
      bookings: "10K Bookings",
      available: true,
    },
    {
      image: venueImg2,
      address: "18 rue de Belleville 75020 Paris",
      title: "Marmaris, Dalaman TUR",
      description:
        "Behandlungskomplex vom 6. bis zum vollendeten 59. Lebensjahr",
      bookings: "5K Bookings",
      available: true,
    },
    {
      image: venueImg3,
      address: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
      title: "Overland Park, KS",
      description: "Need access to a restricted Solution? Let us..",
      bookings: "35K Bookings",
      available: false,
    },
    {
      image: venueImg4,
      address: "4 Novella Block, Eichmannview",
      title: "East Wichita",
      description:
        "Torsdag settes det ny strømprisrekord når døgnprisen passerer",
      bookings: "45K Bookings",
      available: true,
    },
    {
      image: venueImg5,
      address: "67B Gregorio Grove, Jaskolsville",
      title: "Platis Gialos, Mykonos, Greece",
      description:
        "On this site you can discover beautiful products with your favorite brands",
      bookings: "6K Bookings",
      available: false,
    },
    {
      image: venueImg6,
      address: "Jeans & Co, 13011, Bern, CHE",
      title: "Pasadena Store Front",
      description:
        "The risk for pet exposure to human prescription topical medications is high.",
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
          <span>‹</span>
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

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: revert;
  }
`;
