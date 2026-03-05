import styled from "styled-components";
import { Button } from "../../components/Buttons/Button";
import { Icon } from "../../components/Icons/Icons";
import { mobile } from "../../theme/media-queries"; 

import Badge from "../../components/Badge/Badge.component";

import {
  StyledHeading,
  StyledSemiHeading,
  StyledParagraphSmallGray,
  StyledParagraphSmall,
} from "../../components/Styled/Typography.styled";
import { BADGE_TYPES } from "../../constants/badges";

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
          <StyledHeading left>Task Assignments</StyledHeading>
          <StyledParagraphSmallGray left>
            View and respond to your task assignments
          </StyledParagraphSmallGray>
        </Header>

        {/* Task Cards */}
        {TASKS.map((task) => (
          <Card key={task.id}>
            <CardHeader>
              <TaskTextWrapper>
                <StyledSemiHeading left>{task.title}</StyledSemiHeading>

                <StyledParagraphSmall left>
                  {task.eventName}
                </StyledParagraphSmall>

                <StyledParagraphSmallGray left>
                  Date: {task.eventDate}
                </StyledParagraphSmallGray>
              </TaskTextWrapper>

              <Badge type={task.status}>{task.status}</Badge>
            </CardHeader>

            {/* Pending Actions */}
            {task.status === BADGE_TYPES.PENDING && (
              <ActionsRow>
                <ButtonWrapper>
                  <Button type="icon" icon="check" sx={{ width: "100%" }}>
                    Accept
                  </Button>
                </ButtonWrapper>

                <ButtonWrapper>
                  <Button type="outlined" sx={{ width: "100%" }}>
                    Decline
                  </Button>
                </ButtonWrapper>
              </ActionsRow>
            )}

            {/* Accepted State */}
            {task.status === BADGE_TYPES.ACCEPTED && (
              <AcceptedText>
                {/* <span className="material-symbols-outlined">check_circle</span> */}
                <Icon
                  variant="check_circle"
                  sx={{ fontSize: "18px", color: "#16a34a" }}
                />
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
  background-color: ${({ theme }) => theme.color["light-blue"]};
  padding: 80px;
  padding-top: 32px;

  ${mobile`
    padding: 26px;
    padding-top: 16px;
  `}
`;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);

  ${mobile`
    padding: 14px;
  `}
`;

const Header = styled.div`
  margin-bottom: 20px;

  ${mobile`
    padding: 0px;
  `}
`;

const Card = styled.div`
  border: 1.5px solid #e0e0e0;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 16px;

  ${mobile`
    padding: 12px;
  `}
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
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

const ActionsRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;

  ${mobile`
    flex-direction: column;
    gap: 8px;
  `}
`;

const ButtonWrapper = styled.div`
  flex: 1;
`;

const AcceptedText = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 6px;
`;
