import styled from "styled-components";
import {
  StyledParagraph,
  StyledParagraphBold,
  StyledParagraphSmallVisible,
} from "../../../components/Styled/Typography.styled";

const CommentCard = ({ comment }) => {
  return (
    <StyledCommentsContainer>
      <StyledParagraphContainer>{[comment.text]}</StyledParagraphContainer>
      <StyledProfile>
        <StyledProfileImg src={comment.image} />
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
  font: ${({ theme }) => theme.typography["body-regular"]};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  text-align: left;
`;

const StyledProfile = styled.div`
  display: flex;
  margin-top: 30px;
  align-items: center;
`;

const StyledProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
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
  margin-top: -20px;
`;
