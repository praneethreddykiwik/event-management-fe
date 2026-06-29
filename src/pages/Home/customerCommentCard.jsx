import styled from "styled-components";
import {
  StyledParagraph,
  StyledParagraphBold,
  StyledParagraphSmallVisible,
} from "../../components/Styled/Typography.styled";
import Avatar from "../../components/Avatar/Avatar";
const CommentCard = ({ comment }) => {
  return (
    <StyledCommentsContainer>
      <StyledParagraphContainer left>{[comment.text]}</StyledParagraphContainer>
      <StyledProfile>
        <Avatar
          src={comment.image}
          name={`${[comment.name]}`}
          displayInitials={true}
        />
        <StyledProfileName>
          <StyledProfileHead>{[comment.name]}</StyledProfileHead>
          <StyledAnchors>{[comment.link]}</StyledAnchors>
        </StyledProfileName>
      </StyledProfile>
    </StyledCommentsContainer>
  );
};
export default CommentCard;
const StyledCommentsContainer = styled.div`
  height: 300px;
  width: 90%;
`;

const StyledParagraphContainer = styled(StyledParagraph)`
  color: ${({ theme }) => theme.colors.white};
`;

const StyledProfile = styled.div`
  display: flex;
  margin-top: 30px;
  align-items: center;
`;


const StyledProfileName = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
`;

const StyledProfileHead = styled(StyledParagraphBold)`
  color: ${({ theme }) => theme.colors.white};
`;

const StyledAnchors = styled(StyledParagraphSmallVisible)`
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 0px;
`;
