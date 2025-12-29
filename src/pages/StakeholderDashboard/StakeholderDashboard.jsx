import styled from "styled-components";
import { Button } from "../../components/Buttons/Button";

// Reusable Typography
import {
  StyledHeading,
  StyledSemiHeading,
  StyledParagraphSmallGray,
  StyledParagraphSmall,
} from "../../components/Styled/Typography.styled";

const StakeholderDashboard = () => {
  return (
    <PageWrapper>
      <Container>
        {/* Header */}
        <Header>
          <TitleWrapper>
            <StyledHeading left>
              Task Assignments
            </StyledHeading>
          </TitleWrapper>

          <SubtitleWrapper>
            <StyledParagraphSmallGray left>
              View and respond to your task assignments
            </StyledParagraphSmallGray>
          </SubtitleWrapper>
        </Header>

        {/* Pending Task */}
        <Card>
          <CardHeader>
            <TaskContent>
              <TaskTextWrapper>
                <TaskTitle>
                  <StyledSemiHeading left>
                    Provide catering for 200 attendees
                  </StyledSemiHeading>
                </TaskTitle>

                <StyledParagraphSmall left>
                  Annual Conference 2025
                </StyledParagraphSmall>

                <StyledParagraphSmallGray left>
                  Date: March 15, 2025
                </StyledParagraphSmallGray>
              </TaskTextWrapper>
            </TaskContent>

            <Badge variant="pending">pending</Badge>
          </CardHeader>

          <ActionsRow>
            <ButtonWrapper>
              <AcceptButton>
                <Button type="icon" icon="check"> Accept </Button>
              </AcceptButton>
            </ButtonWrapper>

            <ButtonWrapper>
              <Button type="outlined">
                Decline
              </Button>
            </ButtonWrapper>
          </ActionsRow>
        </Card>

        {/* Accepted Task */}
        <Card>
          <CardHeader>
            <TaskContent>
              <TaskTextWrapper>
                <TaskTitle>
                  <StyledSemiHeading left>
                    Set up audio equipment
                  </StyledSemiHeading>
                </TaskTitle>

                <StyledParagraphSmall left>
                  Product Launch Event
                </StyledParagraphSmall>

                <StyledParagraphSmallGray left>
                  Date: April 20, 2025
                </StyledParagraphSmallGray>
              </TaskTextWrapper>
            </TaskContent>

            <Badge variant="accepted">accepted</Badge>
          </CardHeader>

          <AcceptedText>
            <span className="material-symbols-outlined">
              check_circle
            </span>
            <StyledParagraphSmall>
              You've accepted this assignment
            </StyledParagraphSmall>
          </AcceptedText>
        </Card>
      </Container>
    </PageWrapper>
  );
};

export default StakeholderDashboard;

/* ===================== STYLES ===================== */

const PageWrapper = styled.div`
  background-color: #f5f5f5;
  min-height: 100%;
  padding: 80px;
  padding-top: 32px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const Container = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
`;

const Header = styled.div`
  margin-bottom: 20px;
`;

const TitleWrapper = styled.div`
  margin-top: 4px;
  margin-bottom: 4px;

  p {
    font-size: 26px;
    margin: 0;
    line-height: 32px;
  }
`;

const SubtitleWrapper = styled.div`
  p {
    margin: 0;
    line-height: 18px;
  }
`;

const Card = styled.div`
  border: 1.5px solid #e0e0e0;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 16px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TaskContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const TaskTextWrapper = styled.div`
  p {
    margin: 6px 0;
  }

  p:first-child {
    margin-top: 0;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;


const TaskTitle = styled.div`
  p {
    font-size: 18px;
    line-height: 22px;
    margin: 0;
    font-weight: 500;
  }
`;

const Badge = styled.span`
  font-size: 12px;
  padding: 4px 12px;
  border-radius: 999px;
  color: ${({ variant }) =>
    variant === "accepted" ? "#fff" : "#333"};
  background-color: ${({ variant }) =>
    variant === "accepted" ? "#4f46e5" : "#d6d6d6"};
  height: fit-content;
`;

const ActionsRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`;

const ButtonWrapper = styled.div`
  flex: 1;
`;

/* Accept button override */
const AcceptButton = styled.div`
  button {
    background-color: #4f46e5;
    color: #ffffff;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    span {
      color: #ffffff;
    }

    .material-symbols-outlined {
      color: #ffffff;
      border: 2px solid #ffffff;
      border-radius: 50%;
      font-size: 8px;
      padding: 4px;
      line-height: 1;
    }
  }
`;

const AcceptedText = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: #16a34a;

  .material-symbols-outlined {
    font-size: 18px;
  }
`;
