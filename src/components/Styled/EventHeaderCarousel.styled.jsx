import styled from "styled-components";
import {
  StyledHeading,
  StyledParagraphSmallVisible,
  StyledParagraphSmallGray,
  StyledAnchorSmall,
} from "../Styled/Typography.styled";
import { StyledBaseButton } from "./Buttons.styled";

export const FirstContainer  = styled.div`
 background-color: ${({ bgColor }) => bgColor || "#d5f0e1"};
  display: flex;
  padding: 20px;
  gap: 60px;
  height: 225px;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    align-items: flex-start;
  }
`;

export const LeftSection = styled.div`
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const EventImage = styled.img`
  height: 100%;
  width: 260px;
  object-fit: cover;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const RightSection = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
    justify-content: flex-start;
  }
`;

export const NewEventRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const ShareIconSpan = styled.span`
  color: #062e70;
`;

export const HeadingTight = styled(StyledHeading)`
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const DateText = styled(StyledParagraphSmallVisible)`
  color: #a9abaa;
  font-size: 15px;
`;

export const NewEventTxt = styled(StyledParagraphSmallGray)`
  color: #062e70;
  font-weight: 600;
`;

export const ButtonsRow = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 5px;
  align-items: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 10px;
  }
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

export const AttendLink = styled(StyledAnchorSmall)`
  color: #33b133 !important;   
`;

export const Button = styled(StyledBaseButton)`
  color: #ffffff;
  padding: 0 30px;
`;
