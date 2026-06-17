import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  createTaskComment,
  deleteTaskComment,
  fetchTaskComments,
  updateTaskComment,
} from "../../../redux/taskComments/taskComments.action";
import { authSelector } from "../../../redux/auth/auth.slice";
import { Comments } from "../../../components/UI/Comments/Comments";
import { taskCommentsSelector } from "../../../redux/taskComments/taskComments.slice";

export const TaskComments = ({ taskUid }) => {
  const dispatch = useDispatch();

  const { comments, loading, creating, updating, deleting, error } =
    useSelector(taskCommentsSelector);

  const authUser = useSelector(authSelector);

  useEffect(() => {
    if (taskUid) {
      dispatch(fetchTaskComments({ taskUid }));
    }
  }, [dispatch, taskUid]);

  const handleCreateComment = async (commentText) => {
    await dispatch(
      createTaskComment({
        taskUid,
        commentText,
      }),
    ).unwrap();
  };

  const handleUpdateComment = async ({ commentUid, commentText }) => {
    await dispatch(
      updateTaskComment({
        taskUid,
        commentUid,
        commentText,
      }),
    ).unwrap();
  };

  const handleDeleteComment = async (commentUid) => {
    await dispatch(
      deleteTaskComment({
        taskUid,
        commentUid,
      }),
    ).unwrap();
  };
  //   {
  //     "commentUid": "fd8cdeb6-337c-4e32-bd90-c65fa0cefcd8",
  //     "tenantUid": "c5b0b728-8dd1-414b-9e69-fa1ee00d13aa",
  //     "taskUid": "fff6acfe-47e2-4145-8fb1-218cef6b7d7b",
  //     "commentText": "<p>Comments on Abdul Wahid Syed's task</p><p></p><p><strong>Testing Scenarios</strong></p><ul><li><p>Sc 1</p></li><li><p>Sc 2</p></li><li><p>Sc 3</p></li></ul><p></p><p><strong>Points</strong></p><ol><li><p>Pt 1</p></li><li><p>Pt 2</p></li><li><p>Pt 3</p></li></ol><p></p><p><strong>Query:</strong></p><pre><code>const data = () =&gt; {}</code></pre><p></p>",
  //     "createdByUid": null,
  //     "updatedByUid": null,
  //     "deletedByUid": null,
  //     "createdAt": "2026-06-16T07:59:47.474Z",
  //     "updatedAt": null,
  //     "deletedAt": null
  // }

  console.log("abdul comments", comments);

  return (
    <Comments
      comments={comments}
      loading={loading}
      creating={creating}
      updating={updating}
      deleting={deleting}
      error={error}
      currentUserUid={authUser.uid}
      onCreateComment={handleCreateComment}
      onUpdateComment={handleUpdateComment}
      onDeleteComment={handleDeleteComment}
    />
  );
};
