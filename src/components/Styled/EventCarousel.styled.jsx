import styled from "styled-components";
import {
  StyledParagraphSmallGray,
  StyledParagraphSmallVisible,
  StyledParagraphBold,StyledMediumHeading
} from "../Styled/Typography.styled";

export const CarouselWrapper = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center; 
  gap: 16px;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const ArrowCircle = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #eaf5ee;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
`;

export const NextEventCard = styled.div`
  width: 100%;
  border-radius: 12px;
  background-color: ${({ bgColor }) => bgColor || "#cba50c"};
  padding: 20px;
  color: white;
  text-align: left;   

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;  
  gap: 8px;
`;

export const SmallHeading = styled(StyledParagraphBold)`
  margin: 0;
  text-align: left;
`;

export const EventTitle = styled(StyledMediumHeading)`
  color: white;
  margin: 0;
  text-align: left;
`;

export const EventLocationRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const LocationText = styled(StyledParagraphSmallGray)`
  font-size: 14px;
  margin: 0;
  text-align: left;
`;

export const EventDateRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  margin-top: 4px;
  width: 100%;
`;

export const NotificationIcon = styled.span`
  color: black;
  cursor: pointer;
`;

export const PodcastIcon = styled.span`
  color: black;
  cursor: pointer;
  margin-left: auto;  
`;

export const EventDateText = styled(StyledParagraphSmallVisible)`
  font-size: 13px;
  margin: 0;
  text-align: left;
`;