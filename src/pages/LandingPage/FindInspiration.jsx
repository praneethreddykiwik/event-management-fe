import { SectionContainer } from "../../components/Styled/Common.styled";
import styled from "styled-components";
import venue_hall from "../../assets/landingPage/venue.jpg";
import { StyledSemiHeading } from "../../components/Styled/Typography.styled";

import forward_arrow from "../../assets/landingPage/arrow_forward.png";
import { Button } from "../../components/Buttons/Button";
const FindInspiration = () => {
  return (
    <SectionContainer sx={{ flexDireaction: " column " }}>
      <ImageContainer>
        <Image src={venue_hall} />
      </ImageContainer>
      <ContainerTwo>
        <StyledSemiHeading left>
          Seamless Events, Unforgettable Venue
        </StyledSemiHeading>
        <Content>
          Experience the convenience on our wedsite. Effortlessly explore a wide
          range of events that match your interests, while also having the
          ability to create and manage your own events seamlessly. Find
          inspiration, connect with others, and make every event a success, all
          in one place.
        </Content>
        <BtnContainer>
          <Button type="transparent">
            Find inspiration <Icon src={forward_arrow} />
          </Button>
        </BtnContainer>
      </ContainerTwo>
    </SectionContainer>
  );
};


const ImageContainer= styled.div`
  background-color: #838383ff;
  width: 55vw;
  display: flex;
  margin-top: 30px;
`;

const ContainerTwo = styled.div`
  width: 55vw;
`;

const Content = styled.p`
  text-align: left;
  font-size: 13px;
`;
const Image = styled.img`
  width: 55vw;
  height: 45vh;
`;

const Icon = styled.img`
  margin-left: 5px;
  width: 10px;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: left;
`;

export default FindInspiration;
