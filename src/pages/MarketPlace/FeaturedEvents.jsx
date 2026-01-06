import styled from "styled-components";

import CarImage1 from "../../assets/FeaturedEvents-Imgs/CarImage1.webp";
import CarImage2 from "../../assets/FeaturedEvents-Imgs/CarImg2.jpg";
import CarImage3 from "../../assets/FeaturedEvents-Imgs/CarImage3.webp";
import CarImage4 from "../../assets/FeaturedEvents-Imgs/CarImg4.jpg";
import CarImage5 from "../../assets/FeaturedEvents-Imgs/CarImg5.webp";

import Speaker1 from "../../assets/FeaturedEvents-Imgs/Speaker1.png";
import Speaker2 from "../../assets/FeaturedEvents-Imgs/Speaker2.jpg";
import Speaker4 from "../../assets/FeaturedEvents-Imgs/Speaker4.jpeg";

export const FeaturedEvents = () => {
  return (
    <FeaturedSection>
      <Header>
        <h2>Featured Events</h2>
        <Actions>
          <ViewAll>View all</ViewAll>
          <Arrows>
            <button>&lt;</button>
            <button>&gt;</button>
          </Arrows>
        </Actions>
      </Header>

      <Carousel>
        <EventCard className="side">
          <img src={CarImage1} alt="Speaker" />
          <EventInfo>Speaker</EventInfo>
        </EventCard>

        <EventCard className="side">
          <img src={CarImage2} alt="Speaker" />
          <EventInfo>Speaker</EventInfo>
        </EventCard>

        <EventCard className="side">
          <img src={CarImage3} alt="Host" />
          <EventInfo>Host</EventInfo>
        </EventCard>

        <EventCard className="center">
          <img src={CarImage4} alt="Featured Host" />

          <ImgText>
            <p>Marketing Coordinator HNG Groups</p>
            <h2>Esther Howard</h2>
          </ImgText>

          <Overlay>
            <OverlayLeft>
              <Badge>Hosts</Badge>

              <Hosts>
                <HostCount>+23k</HostCount>
                <MultiImgs>
                  <img src={Speaker1} alt="Speaker 1" />
                  <img src={Speaker2} alt="Speaker 2" />
                  <img src={Speaker4} alt="Speaker 3" />
                </MultiImgs>
              </Hosts>

              <BottomText>bwefbweuih</BottomText>
            </OverlayLeft>

            <SubscribeBtn href="#">Subscribe</SubscribeBtn>
          </Overlay>
        </EventCard>

        <EventCard className="side">
          <img src={CarImage5} alt="Speaker" />
          <EventInfo>Speaker</EventInfo>
        </EventCard>
      </Carousel>
    </FeaturedSection>
  );
};



const FeaturedSection = styled.section`
  max-width: 1200px;
  margin: 50px auto;
  padding: 0 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    font-size: 24px;
    font-weight: bold;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const ViewAll = styled.span`
  font-size: 14px;
  color: #007bff;
  cursor: pointer;
`;

const Arrows = styled.div`
  display: flex;
  gap: 8px;

  button {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 1px solid #ccc;
    background: #e1dada;
    cursor: pointer;
  }
`;

const Carousel = styled.div`
  display: flex;
  gap: 10px;
  overflow: hidden;
`;

const EventCard = styled.div`
  width: 150px;
  height: 570px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &.side {
    opacity: 0.7;
    transform: scale(0.9);
  }

  &.center {
    width: 300px;
  }

  img {
    height: 100%;
    width: auto;
    object-fit: cover;
  }
`;

const EventInfo = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 14px;
  text-align: center;
`;

const ImgText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 20px;

  p {
    color: #fff;
    font-size: 14px;
  }

  h2 {
    color: #0d0d0e;
  }
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  background: rgba(3, 3, 3, 0.48);
  display: flex;
  align-items: center;
  padding: 10px;
`;

const OverlayLeft = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Badge = styled.span`
  padding: 4px 10px;
  border-radius: 30px;
  color: #eee;
  margin-right: 15px;
  background: #555;
`;

const Hosts = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const HostCount = styled.span`
  font-size: 10px;
  background: #0084ff;
  padding: 4px 8px;
  border-radius: 30px;
  color: #fff;
  margin-right: 10px;
`;

const MultiImgs = styled.div`
  position: relative;
  width: 60px;

  img {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #0084ff;
  }

  img:nth-child(1) {
    left: 0;
    z-index: 3;
  }

  img:nth-child(2) {
    left: 15px;
    z-index: 2;
  }

  img:nth-child(3) {
    left: 30px;
    z-index: 1;
  }
`;

const BottomText = styled.div`
  margin-left: 10px;
  font-size: 12px;
  color: #ccc;
`;

const SubscribeBtn = styled.a`
  margin-left: auto;
  padding: 8px 18px;
  border-radius: 30px;
  font-size: 14px;
  text-decoration: none;
  background: #28a745;
  color: #fff;

  &:hover {
    background: #218838;
  }
`;
