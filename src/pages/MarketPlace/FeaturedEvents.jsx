import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Button } from "../../components/Buttons/Button";

import carImage1 from "../../assets/FeaturedEvents-Imgs/carImage1.jpg";
import carImg2 from "../../assets/FeaturedEvents-Imgs/carImg2.jpg";
import carImage3 from "../../assets/FeaturedEvents-Imgs/carImage3.jpg";
import carImg4 from "../../assets/FeaturedEvents-Imgs/CarImg4.jpg";

import speaker1 from "../../assets/FeaturedEvents-Imgs/Speaker1.png";
import speaker2 from "../../assets/FeaturedEvents-Imgs/Speaker2.jpg";
import speaker3 from "../../assets/FeaturedEvents-Imgs/Speaker3.jpeg";
import speaker4 from "../../assets/FeaturedEvents-Imgs/Speaker4.jpeg";

const events = [
  {
    img: carImage1,
    role: "SPEAKER",
    name: "Sydney",
    title: "Marketing Coordinator HNG Group",
  },
  {
    img: carImg2,
    role: "SPEAKER",
    name: "Esther Howard",
    title: "Marketing Coordinator HNG Group",
  },
  {
    img: carImage3,
    role: "HOST",
    name: "Mike",
    title: "Marketing Coordinator HNG Group",
  },
  {
    img: carImg4,
    role: "HOST",
    name: "Niki",
    title: "Marketing Coordinator HNG Group",
  },
  {
    img: carImage1,
    role: "SPEAKER",
    name: "Tyla",
    title: "Marketing Coordinator HNG Group",
  },
  {
    img: carImg2,
    role: "GUEST",
    name: "smithi john",
    title: "Marketing Coordinator HNG Group",
  },
  {
    img: carImg4,
    role: "SPEAKER",
    name: "Angelina",
    title: "Marketing Coordinator HNG Group",
  },
];

const SIDE_WIDTH = 150;
const CENTER_WIDTH = 450;
const GAP = 0;
const VISIBLE_COUNT = 5;

const FeaturedEvents = () => {
  const [activeIndex, setActiveIndex] = useState(Math.floor(events.length / 2));
  const trackRef = useRef(null);

  const prevSlide = () => {
    setActiveIndex((prev) => {
      const next = prev - 1;
      return next < 0 ? events.length - 1 : next;
    });
  };

  const nextSlide = () => {
    setActiveIndex((prev) => {
      const next = prev + 1;
      return next >= events.length ? 0 : next;
    });
  };

  useEffect(() => {
    if (!trackRef.current) return;

    const sideCount = Math.floor(VISIBLE_COUNT / 2);
    const sideSpace = sideCount * SIDE_WIDTH;

    const targetLeft = sideSpace;

    const currentLeft = activeIndex * SIDE_WIDTH;

    const translateX = targetLeft - currentLeft;

    trackRef.current.style.transform = `translateX(${translateX}px)`;
  }, [activeIndex]);

  return (
    <Section>
      <Header>
        <h2>Featured Event Managers</h2>
        <Actions>
          <ViewMore>View more</ViewMore>
          <Arrows>
            <button onClick={prevSlide}>‹</button>
            <button onClick={nextSlide}>›</button>
          </Arrows>
        </Actions>
      </Header>

      <CarouselViewport>
        <CarouselTrack ref={trackRef}>
          {events.map((event, index) => {
            const isCenter = index === activeIndex;

            return (
              <EventCard
                key={index}
                $isCenter={isCenter}
                style={{
                  transform: isCenter ? "scale(1)" : "scale(0.94)",
                }}
              >
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
                        <Hosts>
                          <Badge>{event.role}</Badge>

                          <StyledHostAvatars>
                            <StyledHostCount>
                              <HostCount>+23k</HostCount>
                            </StyledHostCount>
                            <Avatars>
                              <img src={speaker1} alt="" />
                              <img src={speaker2} alt="" />
                              <img src={speaker3} alt="" />
                              <img src={speaker4} alt="" />
                            </Avatars>
                          </StyledHostAvatars>
                        </Hosts>

                        <BottomText>Winning in Today’s Economy</BottomText>
                      </OverlayLeft>

                      <StyledSubscribeBtn>
                        <Button>Subscribe</Button>
                      </StyledSubscribeBtn>
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

const Hosts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
`;

const StyledHostCount = styled.div`
  display: flex;
  margin-left: auto;
`;
const StyledHostAvatars = styled.div`
  display: flex;
  margin-left: 20px;
  gap: 5px;
`;

const StyledSubscribeBtn = styled.div`
  width: 120px;
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const ViewMore = styled.span`
  font-size: 15px;
  color: #007bff;
  cursor: pointer;
  font-weight: 500;
`;

const Arrows = styled.div`
  display: flex;
  gap: 12px;

  button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #ddd;
    background: white;
    cursor: pointer;
    font-size: 20px;
    display: grid;
    place-items: center;
    transition: all 0.2s;

    &:hover:not(:disabled) {
      background: #f8f9fa;
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }
`;

const CarouselViewport = styled.div`
  width: ${SIDE_WIDTH * 4 + CENTER_WIDTH}px;
  margin: 0 auto;
  overflow: hidden;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const CarouselTrack = styled.div`
  display: flex;
  gap: ${GAP}px;
  transition: transform 0.55s cubic-bezier(0.32, 0.72, 0, 1);
  will-change: transform;
`;

const EventCard = styled.div`
  position: relative;
  width: ${SIDE_WIDTH}px;
  height: 560px;
  flex-shrink: 0;
  overflow: hidden;
  transition: all 0.225s ease;
  border-radius: 5px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    transition: filter 0.7s ease;
  }

  ${({ $isCenter }) =>
    $isCenter &&
    `width: ${CENTER_WIDTH}px;
    img {
      filter: grayscale(0%) !important;
    }
  `}

  @media (max-width: 576px) {
    width: 30%;
  }
`;

const RoleLabel = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  color: #ffffff99;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`;

const ImgText = styled.div`
  text-align: center;
  position: absolute;
  top: 24px;
  left: 24px;
  right: 24px;
  pointer-events: none;

  p {
    font-size: 20px;
    color: #ffffff;
    text-align: left;
    font-weight: 400;
  }

  h2 {
    font-size: 26px;
    line-height: 0;
    text-align: left;
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  backdrop-filter: blur(10px);
`;

const OverlayLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Badge = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-weight: 500;
`;

const HostCount = styled.div`
  font-size: 12px;
  background: #0084ff;
  padding: 4px 10px;
  border-radius: 100px;
  color: #000000;
`;

const Avatars = styled.div`
  position: relative;
  width: 80px;

  img {
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid #0084ff;
    object-fit: cover;
  }

  img:nth-child(1) {
    left: 0px;
  }
  img:nth-child(2) {
    left: 17px;
  }
  img:nth-child(3) {
    left: 33px;
  }
  img:nth-child(4) {
    left: 48px;
  }
`;

const BottomText = styled.div`
  font-size: 15px;
  color: #ffffff;
  font-weight: 500;
  margin-right: auto;
`;
