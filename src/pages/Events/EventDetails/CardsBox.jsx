import styled from "styled-components";
import {
  StyledParagraph,
  StyledSemiHeading,
} from "../../../components/Styled/Typography.styled";
import { useLocation } from "react-router-dom";
import { Icon } from "../../../components/Icons/Icons";

export const SecondBoxCol = () => {
  const { state } = useLocation();
  const event = state?.event;

  return (
    <StyledCtn>
      <StyledTopBox>
        <StyledEventBodyHeader left>Assigned Manager</StyledEventBodyHeader>
        <StyledEvenInfoCard>
          <Icon variant="person" />
          <StyledParagraph2 left>{event.firstName}</StyledParagraph2>
        </StyledEvenInfoCard>
      </StyledTopBox>
      <StyledBottomBox>
        <StyledEvenInfoCard2>
          <StyledEventBodyHeader left>Description</StyledEventBodyHeader>
          <StyledParagraph2 left>{event.comments}</StyledParagraph2>
        </StyledEvenInfoCard2>
      </StyledBottomBox>
    </StyledCtn>
  );
};

const StyledCtn = styled.div`
  justify-content: start;
  display: flex;
  flex-direction: column;
`;

const StyledTopBox = styled.div`
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadows["level-1"]};
  margin-bottom: 24px;
  height: 50%;
  padding: 14px 24px;
  border-radius: 10px;
  border: ${({ theme }) => theme.borders["border-gray"]};
`;

const StyledBottomBox = styled.div`
  border: ${({ theme }) => theme.borders["border-gray-lite"]};
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadows["level-1"]};
  border-radius: 10px;
  height: 50%;
  padding: 14px 24px;
  border: ${({ theme }) => theme.borders["border-gray"]};
`;

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

const StyledSpan = styled.span``;

const StyledEventBodyHeader = styled(StyledSemiHeading)``;
