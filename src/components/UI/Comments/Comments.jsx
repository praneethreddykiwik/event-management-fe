import React, { useState } from "react";
import styled from "styled-components";
import {
  StyledMediumHeading,
  StyledParagraph,
} from "../../Styled/Typography.styled";
import { Button } from "../../Buttons/Button";
import { Inputs } from "../../Inputs/Inputs";
import { CommonBox } from "../../Cards/Cards";
import Skeleton from "@mui/material/Skeleton";
import { SkeletonLoaders } from "../Loaders/SkeletonLoaders";
import DOMPurify from "dompurify";
import { richTextStyles } from "./extraStyles";

const getInitials = (name = "") => {
  return name
    .trim()
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();
};

export const Comments = ({
  comments = [],
  title = "Comments",
  placeholder = "Write a comment...",
  maxWidth = "600px",
  loading = false,
  creating = false,
  updating = false,
  deleting = false,
  error = null,
  currentUserUid = null,
  onCreateComment,
  onUpdateComment,
  onDeleteComment,
}) => {
  const [newComment, setNewComment] = useState("");
  const [editingCommentUid, setEditingCommentUid] = useState(null);
  const [editingText, setEditingText] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmedComment = newComment.trim();

    if (!trimmedComment) return;

    await onCreateComment?.(trimmedComment);

    setNewComment("");
  };

  const handleEditClick = (comment) => {
    setEditingCommentUid(comment.commentUid);
    setEditingText(comment.commentText || "");
  };

  const handleCancelEdit = () => {
    setEditingCommentUid(null);
    setEditingText("");
  };

  const handleSaveEdit = async (commentUid) => {
    const trimmedText = editingText.trim();

    if (!trimmedText) return;

    await onUpdateComment?.({
      commentUid,
      commentText: trimmedText,
    });

    setEditingCommentUid(null);
    setEditingText("");
  };

  const handleDelete = async (commentUid) => {
    await onDeleteComment?.(commentUid);
  };

  console.log("abdul !newComment.trim() || creating", { newComment, creating });

  return (
    <Wrapper maxWidth={maxWidth}>
      <StyledTitleLoc left>
        {title} ({comments.length})
      </StyledTitleLoc>

      <CommentFormLoc>
        <Inputs
          type="rich-text-editor"
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
          error={error}
          placeholder={placeholder}
        />

        <ActionsRow>
          <ButtonLoc
            type="submit"
            disabled={!newComment.trim() || creating}
            onClick={handleSubmit}
            small
          >
            {creating ? "Posting..." : "Save"}
          </ButtonLoc>
        </ActionsRow>

        <CommentsList>
          {loading ? (
            <SkeletonLoaders count={3} />
          ) : comments.length === 0 ? (
            <EmptyState>No comments yet.</EmptyState>
          ) : (
            comments.map((comment) => {
              const authorName = comment.createdByName || "Unknown User";
              const avatar = comment.avatar;
              const isEditing = editingCommentUid === comment.commentUid;

              const canModify =
                comment.canEdit ||
                comment.canDelete ||
                (currentUserUid && currentUserUid === comment.createdByUid);

              return (
                <CommentItem key={comment.commentUid}>
                  <Avatar>
                    {avatar ? (
                      <AvatarImage src={avatar} alt={authorName} />
                    ) : (
                      getInitials(authorName)
                    )}
                  </Avatar>

                  <CommentContent className="comment-content">
                    <CommentTopRow>
                      <Author>{authorName}</Author>
                      <Timestamp>
                        {comment.createdAt
                          ? new Date(comment.createdAt).toLocaleString()
                          : ""}
                      </Timestamp>
                    </CommentTopRow>

                    {isEditing ? (
                      <>
                        <CommentTextarea
                          value={editingText}
                          onChange={(event) =>
                            setEditingText(event.target.value)
                          }
                        />

                        <ActionsRow>
                          <ButtonLoc
                            type="button"
                            variant="secondary"
                            onClick={handleCancelEdit}
                            disabled={updating}
                          >
                            Cancel
                          </ButtonLoc>

                          <Button
                            type="button"
                            onClick={() => handleSaveEdit(comment.commentUid)}
                            disabled={!editingText.trim() || updating}
                          >
                            {updating ? "Saving..." : "Save"}
                          </Button>
                        </ActionsRow>
                      </>
                    ) : (
                      <>
                        <CommentText
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(comment.commentText),
                          }}
                        >
                          {/* {comment.commentText} */}
                        </CommentText>

                        {canModify && (
                          <CommentActions>
                            <TextButton
                              type="button"
                              onClick={() => handleEditClick(comment)}
                            >
                              Edit
                            </TextButton>

                            <TextButton
                              type="button"
                              onClick={() => handleDelete(comment.commentUid)}
                              disabled={deleting}
                            >
                              Delete
                            </TextButton>
                          </CommentActions>
                        )}
                      </>
                    )}
                  </CommentContent>
                </CommentItem>
              );
            })
          )}
        </CommentsList>
      </CommentFormLoc>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 0 auto;
  padding: 16px;
`;

const ButtonLoc = styled(Button)`
  max-width: 200px;
`;

const StyledTitleLoc = styled(StyledMediumHeading)`
  margin-bottom: 16px;
  margin-top: 26px;
`;

const CommentFormLoc = styled(CommonBox)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CommentTextarea = styled.textarea`
  width: 100%;
  min-height: 90px;
  resize: vertical;
  padding: 12px;
  border: 1px solid #dfe1e6;
  border-radius: 6px;
  font-family: inherit;
  font-size: 14px;
  color: #172b4d;
  outline: none;

  &:focus {
    border-color: #2684ff;
    box-shadow: 0 0 0 2px rgba(38, 132, 255, 0.2);
  }

  &::placeholder {
    color: #6b778c;
  }
`;

const ActionsRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const CommentsList = styled.div`
  border-radius: 8px;
  background: #ffffff;
`;

const CommentItem = styled.div`
  display: flex;
  gap: 12px;
  padding: 16px 0;
  border-bottom: 1px solid #ebecf0;

  &:last-child {
    border-bottom: none;
  }
`;

const Avatar = styled.div`
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  border-radius: 50%;
  background: #6554c0;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  overflow: hidden;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CommentContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const CommentTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 4px;
`;

const Author = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #172b4d;
`;

const Timestamp = styled.span`
  font-size: 12px;
  color: #6b778c;
  white-space: nowrap;
`;

const CommentText = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: #172b4d;
  white-space: pre-wrap;
  word-break: break-word;
  text-align: left;

  ${richTextStyles}
`;

const CommentActions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 8px;
`;

const TextButton = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  color: #0052cc;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }

  &:disabled {
    color: #a5adba;
    cursor: not-allowed;
    text-decoration: none;
  }
`;

const EmptyState = styled(StyledParagraph)`
  padding: 20px;
`;
