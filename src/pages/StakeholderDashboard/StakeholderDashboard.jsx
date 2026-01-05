import styled from "styled-components";
import { Button } from "../../components/Buttons/Button";

import Badge from "../../components/Badge/Badge.component";
import { BADGE_TYPES } from "../../enum/common";

import {
  StyledHeading,
  StyledSemiHeading,
  StyledParagraphSmallGray,
  StyledParagraphSmall,
} from "../../components/Styled/Typography.styled";

const TASKS = [
  {
    id: 1,
    title: "Provide catering for 200 attendees",
    eventName: "Annual Conference 2025",
    eventDate: "March 15, 2025",
    status: BADGE_TYPES.PENDING,
  },
  {
    id: 2,
    title: "Set up audio equipment",
    eventName: "Product Launch Event",
    eventDate: "April 20, 2025",
    status: BADGE_TYPES.ACCEPTED,
  },
];

const StakeholderDashboard = () => {
  return (
    <PageWrapper>
      <Container>
        {/* Header */}
        <Header>
          <TitleWrapper>
            <StyledHeading left>Task Assignments</StyledHeading>
          </TitleWrapper>

          <SubtitleWrapper>
            <StyledParagraphSmallGray left>
              View and respond to your task assignments
            </StyledParagraphSmallGray>
          </SubtitleWrapper>
        </Header>

        {/* Task Cards */}
        {TASKS.map((task) => (
          <Card key={task.id}>
            <CardHeader>
              <TaskTextWrapper>
                <TaskTitle>
                  <StyledSemiHeading left>{task.title}</StyledSemiHeading>
                </TaskTitle>

                <StyledParagraphSmall left>
                  {task.eventName}
                </StyledParagraphSmall>

                <StyledParagraphSmallGray left>
                  Date: {task.eventDate}
                </StyledParagraphSmallGray>
              </TaskTextWrapper>

              <CompactBadge>
                <Badge type={task.status}>{task.status}</Badge>
              </CompactBadge>
            </CardHeader>

            {/* Pending Actions */}
            {task.status === BADGE_TYPES.PENDING && (
              <ActionsRow>
                <ButtonWrapper>
                  <AcceptButton>
                    <Button type="icon" icon="check">
                      Accept
                    </Button>
                  </AcceptButton>
                </ButtonWrapper>

                <ButtonWrapper>
                  <Button type="outlined">Decline</Button>
                </ButtonWrapper>
              </ActionsRow>
            )}

            {/* Accepted State */}
            {task.status === BADGE_TYPES.ACCEPTED && (
              <AcceptedText>
                <span className="material-symbols-outlined">check_circle</span>
                <StyledParagraphSmall>
                  You've accepted this assignment
                </StyledParagraphSmall>
              </AcceptedText>
            )}
          </Card>
        ))}
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

const CompactBadge = styled.div`
  display: inline-flex;
  align-self: flex-start;
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

const ActionsRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`;

const ButtonWrapper = styled.div`
  flex: 1;
`;

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
