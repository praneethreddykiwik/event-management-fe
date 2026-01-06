import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import  {Button}  from "../../components/Buttons/Button"; 

import carImage1 from "../../assets/FeaturedEvents-Imgs/carImage1.jpg";
import carImg2 from "../../assets/FeaturedEvents-Imgs/carImg2.jpg";
import carImage3 from "../../assets/FeaturedEvents-Imgs/carImage3.jpg";
import carImg4 from "../../assets/FeaturedEvents-Imgs/carImg4.jpg";

import speaker1 from "../../assets/FeaturedEvents-Imgs/Speaker1.png";
import speaker2 from "../../assets/FeaturedEvents-Imgs/Speaker2.jpg";
import speaker3 from "../../assets/FeaturedEvents-Imgs/Speaker3.jpeg";
import speaker4 from "../../assets/FeaturedEvents-Imgs/Speaker4.jpeg";



const events = [
  { img: carImage1, role: "Speaker", name: "Esther Howard",
    title: "Marketing Coordinator HNG Group" },
  { img: carImg2, role: "Speaker" , name: "Esther Howard",
    title: "Marketing Coordinator HNG Group" },
  { img: carImage3, role: "Host" ,name: "Esther Howard",
    title: "Marketing Coordinator HNG Group" },
  {
    img: carImg4,
    role: "Host",
    name: "Esther Howard",
    title: "Marketing Coordinator HNG Group",
  },
  { img: carImage1, role: "Speaker", name: "Esther Howard",
    title: "Marketing Coordinator HNG Group" },
  { img: carImg2, role: "Guest", name: "Esther Howard",
    title: "Marketing Coordinator HNG Group" },
  { img: carImg4, role: "Speaker" , name: "Esther Howard",
    title: "Marketing Coordinator HNG Group" },
];



const SIDE_WIDTH = 160;
const CENTER_WIDTH = 320;
const GAP = 12;
const VISIBLE_COUNT =5;



const FeaturedEvents = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const trackRef = useRef(null);

  const minIndex = Math.floor(VISIBLE_COUNT / 2);
  const maxIndex = events.length - minIndex - 1;

  const prevSlide = () =>
    setActiveIndex((p) => Math.max(p - 1, minIndex));

  const nextSlide = () =>
    setActiveIndex((p) => Math.min(p + 1, maxIndex));

  useEffect(() => {
    if (!trackRef.current) return;

    const cardWidth = SIDE_WIDTH + GAP;
    trackRef.current.style.transform = `translateX(-${
      (activeIndex - minIndex) * cardWidth
    }px)`;
  }, [activeIndex]);

  return (
    <Section>
      <Header>
        <h2>Featured Events</h2>

        <Actions>
          <ViewMore>View more</ViewMore>
          <Arrows>
            <button onClick={prevSlide} disabled={activeIndex === minIndex}>
              ‹
            </button>
            <button onClick={nextSlide} disabled={activeIndex === maxIndex}>
              ›
            </button>
          </Arrows>
        </Actions>
      </Header>

      <CarouselViewport>
        <CarouselTrack ref={trackRef}>
          {events.map((event, index) => {
            const isCenter = index === activeIndex;

            return (
              <EventCard key={index} className={isCenter ? "center" : ""}>
                <img src={event.img} alt={event.role} />

                {!isCenter && <RoleLabel>{event.role}</RoleLabel>}

                {isCenter && (
                  <>
                    <ImgText>
                      <p>{event.title}</p>
                      <h2>{event.name}</h2>
                    </ImgText>

                    <Overlay>
                      <OverlayLeft>
                        <Badge>{event.role}</Badge>

                        <Hosts>
                          <HostCount>+23k</HostCount>
                          <Avatars>
                            <img src={speaker1} alt="" />
                            <img src={speaker2} alt="" />
                            <img src={speaker3} alt="" />
                            <img src={speaker4} alt="" />
                          </Avatars>
                        </Hosts>

                        <BottomText>
                          Winning in Today’s Economy
                        </BottomText>
                      </OverlayLeft>

                      <Button variant="secondary">
                        Subscribe
                      </Button>
                    </Overlay>
                  </>
                )}
              </EventCard>
            );
          })}
        </CarouselTrack>
      </CarouselViewport>
    </Section>
  );
};

export default FeaturedEvents;



const Section = styled.section`
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ViewMore = styled.span`
  font-size: 14px;
  color: #007bff;
  cursor: pointer;
`;

const Arrows = styled.div`
  display: flex;
  gap: 8px;

  button {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 1px solid #ccc;
    background: #fff;
    cursor: pointer;
    font-size: 18px;

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }
`;


const CarouselViewport = styled.div`
  width: ${SIDE_WIDTH * 4 + CENTER_WIDTH + GAP * 4}px;
  overflow: hidden;
  margin: 0 auto;
`;

const CarouselTrack = styled.div`
  display: flex;
  gap: ${GAP}px;
  transition: transform 0.45s ease;
`;

const EventCard = styled.div`
  position: relative;
  width: ${SIDE_WIDTH}px;
  height: 560px;
  flex-shrink: 0;
  opacity: 0.5;
  transform: scale(0.9);
  transition: all 0.35s ease;
  border-radius: 2px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &.center {
    width: ${CENTER_WIDTH}px;
    opacity: 1;
    transform: scale(1);
  }
`;

const RoleLabel = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  text-align: center;
`;

const ImgText = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  color: #fff;

  p {
    font-size: 13px;
    opacity: 0.85;
  }

  h2 {
    font-size: 22px;
    margin-top: 4px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
`;

const OverlayLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const Badge = styled.span`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  color: #fff;
  background: rgba(255, 255, 255, 0.25);
`;

const Hosts = styled.div`
  display: flex;
  align-items: center;
`;

const HostCount = styled.span`
  font-size: 10px;
  background: #0084ff;
  padding: 4px 8px;
  border-radius: 20px;
  color: #fff;
  margin-right: 6px;
`;

const Avatars = styled.div`
  position: relative;
  width: 70px;
  height: 20px;

  img {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #0084ff;
  }

  img:nth-child(1) { left: 0; }
  img:nth-child(2) { left: 15px; }
  img:nth-child(3) { left: 30px; }
  img:nth-child(4) { left: 45px; }
`;

const BottomText = styled.div`
  font-size: 12px;
  color: #ccc;
`;


