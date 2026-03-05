import styled from "styled-components";
import {
  StyledParagraph,
  StyledSemiHeading,
} from "../../../components/Styled/Typography.styled";
import { useLocation } from "react-router-dom";

export const SecondBoxCol = () => {
  const { state } = useLocation();
  const event = state?.event;

  return (
    <StyledEventBodyContainerRight>
      <StyledEventBodyContainerRightTop>
        <StyledEventBodyHeader left>Assigned Manager</StyledEventBodyHeader>
        <StyledEvenInfoCard>
          <StyledEvenInfoCardIcon>
            <StyledSpan className="material-symbols-outlined">
              person
            </StyledSpan>
          </StyledEvenInfoCardIcon>

          <StyledParagraph2 left>{event.firstName}</StyledParagraph2>
        </StyledEvenInfoCard>
      </StyledEventBodyContainerRightTop>
      <StyledEventBodyContainerRightBototm>
        <StyledEventBodyContainerRightBototmHeader>
          <StyledEvenInfoCard2>
            <StyledEventBodyHeader left>Description</StyledEventBodyHeader>
            <StyledParagraph2 left>{event.comments}</StyledParagraph2>
          </StyledEvenInfoCard2>
        </StyledEventBodyContainerRightBototmHeader>
      </StyledEventBodyContainerRightBototm>
    </StyledEventBodyContainerRight>
  );
};

const StyledEventBodyContainerRight = styled.div`
  justify-content: start;
  display: flex;
  flex-direction: column;
  width: 30%;
`;

const StyledEventBodyContainerRightTop = styled.div`
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadows["level-1"]};
  margin-bottom: 40px;
  height: 50%;
  padding: 25px;
  border-radius: 10px;
  border: ${({ theme }) => theme.borders["border-gray"]};
`;

const StyledEventBodyContainerRightBototm = styled.div`
  border: ${({ theme }) => theme.borders["border-gray-lite"]};
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadows["level-1"]};
  border-radius: 10px;
  height: 50%;
  padding: 15px 35px;
  border: ${({ theme }) => theme.borders["border-gray"]};
`;

const StyledEventBodyContainerRightBototmHeader = styled.div``;

const StyledParagraph2 = styled(StyledParagraph)`
  max-width: "60%";
`;

const StyledEvenInfoCard = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledEvenInfoCard2 = styled.div`
  width: 100%;
`;

const StyledEvenInfoCardIcon = styled.div``;

const StyledSpan = styled.span``;

const StyledEventBodyHeader = styled(StyledSemiHeading)``;
