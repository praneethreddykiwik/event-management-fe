import React, { useState } from "react";
import styled from "styled-components";

import { CAROUSEL_TYPES } from "./carouselTypes";

const Carousel = ({ carouselList = [], type = CAROUSEL_TYPES.TYPE1 }) => {
  const [index, setIndex] = useState(0);

  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + carouselList.length) % carouselList.length);

  const handleNext = () => setIndex((prev) => (prev + 1) % carouselList.length);
  return (
    <FirstContainer type={type}>
      {type === "type2" && (
        <>
          <ArrowCircleLeft onClick={handlePrev}>
            <span className="material-symbols-outlined">chevron_left</span>
          </ArrowCircleLeft>

          <ArrowCircleRight onClick={handleNext}>
            <span className="material-symbols-outlined">chevron_right</span>
          </ArrowCircleRight>
        </>
      )}

      <SlideWrapper type={type}>
        <SlideTrack style={{ transform: `translateX(-${index * 100}%)` }}>
          {carouselList.map((slide, i) => (
            <SlideItem key={i} type={type}>
              {slide}
            </SlideItem>
          ))}
        </SlideTrack>
      </SlideWrapper>

      {type === "type1" && (
        <RightSide>
          <ArrowButton onClick={handlePrev}>
            <span className="material-symbols-outlined">chevron_left</span>
          </ArrowButton>
          <ArrowButton onClick={handleNext}>
            <span className="material-symbols-outlined">chevron_right</span>
          </ArrowButton>
        </RightSide>
      )}

      {type === "type3" && (
        <BottomLeftArrows>
          <PlainArrow
            onClick={handlePrev}
            className="material-symbols-outlined"
          >
            chevron_left
          </PlainArrow>

          <PlainArrow
            onClick={handleNext}
            className="material-symbols-outlined"
          >
            chevron_right
          </PlainArrow>
        </BottomLeftArrows>
      )}
    </FirstContainer>
  );
};

export default Carousel;

/* ---------------- FIRST CONTAINER ---------------- */
export const FirstContainer = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
  overflow: visible;

  ${({ type, bgColor }) =>
    type === "type1" &&
    `
    background-color: ${bgColor || "#d5f0e1"};
    padding: 20px;
    gap: 60px;
    height: 225px;
  `}

  ${({ type }) =>
    type === "type2" &&
    `
    background-color: #ffffff;
    padding: 0;
    height: auto;
  `}

   ${({ type }) =>
    type === "type3" &&
    `
    background-color: #ffffff;
    padding: 20px;
    height: auto;
  `}
`;

/* ---------------- SLIDE WRAPPER ---------------- */
export const SlideWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

/* ---------------- TRACK ---------------- */
export const SlideTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

/* ---------------- SLIDE ITEM ---------------- */
export const SlideItem = styled.div`
  min-width: 100%;
  display: flex;
  box-sizing: border-box;

  ${({ type }) =>
    type === "type1" &&
    `
    height: 225px;
    justify-content: flex-start;
  `}

  ${({ type }) =>
    type === "type2" &&
    `justify-content: center;
  `}
    ${({ type }) =>
    type === "type3" &&
    `
    justify-content: flex-start;
  `}
`;

/* ---------------- TYPE 1 ARROWS ---------------- */
export const RightSide = styled.div`
  position: absolute;
  top: 20px;
  right: 15px;
  display: flex;
  gap: 40px;
`;

export const ArrowButton = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #b4e2c7;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ArrowCircleLeft = styled.div`
  width: 42px;
  height: 42px;
  background: #eaf8ee;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 0px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 3;
`;

export const ArrowCircleRight = styled(ArrowCircleLeft)`
  left: auto;
  right: 0px;
`;

export const BottomLeftArrows = styled.div`
  position: absolute;
  bottom: 15px;
  left: 35px;
  display: flex;
  gap: 50px;
  align-items: center;
`;


export const PlainArrow = styled.span`
  font-size: 28px;
  cursor: pointer;
  color: #000;   
  user-select: none;
`;
