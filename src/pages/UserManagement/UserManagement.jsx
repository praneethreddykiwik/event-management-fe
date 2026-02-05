/** @format */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { details } from "../../Mock";
import { BlueBackHOC } from "../../HOC/BlueBackHOC";
import { StyledHeading } from "../../components/Styled/Typography.styled";
import UserManagementItem from "../../pages/UserManagement/UserManagementItem";
import { StyledBaseButton } from "../../components/Styled/Buttons.styled";
import useNavigateWithQuery from "../../hooks/useNavigateWithQuery";

import PopupModal from "../../components/PopupModal/PopupModal";
import { Button } from "../../components/Buttons/Button";

// redux (same pattern as your working code)
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserAction,
  fetchAllUsersAction,
} from "../../redux/users/users.actions";
// import EditUserPoEditpup from "../../components/users/EditUserPopup";
// import EditUserPopup from "./EditUserPopUp";
import { updateAllRegInputs } from "../../redux/farms/farms.slice";
import { generateRegDataToEdit } from "../../redux/farms/metadata/reg.metadata";
import { usersSelector } from "../../redux/users/users.slice";
import EditUserPopup2 from "./EditUserPopup2";

const UserManagement = () => {
  const navigate = useNavigateWithQuery();
  const dispatch = useDispatch();

  const { allUsers } = useSelector(usersSelector);
  console.log("Manideep", allUsers);

  const [openEdit, setOpenEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  useEffect(() => {
    dispatch(fetchAllUsersAction());
  }, []);

  // EDIT USER
  const onEdit = (user) => {
    setSelectedUser(user);
    setOpenEdit(true);

    const regData = generateRegDataToEdit(user);
    dispatch(updateAllRegInputs(regData));
  };

  // DELETE USER
  const onDelete = async () => {
    await dispatch(deleteUserAction({ uid: selectedUser.uid }));
    setShowDeleteConfirm(false);
    setSelectedUser(null);
  };

  return (
    <BlueBackHOC>
      <PageWrapper>
        <StyledHeading left>User Management</StyledHeading>
        <StyledButtonContainer right>
          <StyledButton onClick={() => navigate("/registration")}>
            Create User{" "}
          </StyledButton>
        </StyledButtonContainer>

        {allUsers?.length > 0 &&
          allUsers.map((user) => (
            <UserManagementItem
              key={user.uid}
              data={user}
              onEdit={() => onEdit(user)}
              onDelete={() => {
                setSelectedUser(user);
                setShowDeleteConfirm(true);
              }}
            />
          ))}

        {/* EDIT MODAL */}
        {openEdit && (
          <EditUserPopup2
            onClose={() => setOpenEdit(false)}
            modalDetails={{
              title: "Edit User",
              description: "Edit user details",
              type: "edit",
              userUid: selectedUser?.uid,
            }}
          />
        )}

        {/* DELETE CONFIRMATION */}
        {showDeleteConfirm && (
          <PopupModal
            onClose={() => setShowDeleteConfirm(false)}
            title="Delete User"
            subtitle="Are you sure you want to delete this user?"
            width="400px"
          >
            <DeletePopup>
              <Button
                type="secondary"
                onClick={() => setShowDeleteConfirm(false)}
              >
                Cancel
              </Button>

              <Button type="danger" onClick={onDelete}>
                Delete
              </Button>
            </DeletePopup>
          </PopupModal>
        )}
      </PageWrapper>
    </BlueBackHOC>
  );
};

export default UserManagement;

const PageWrapper = styled.div`
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const DeletePopup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  padding: 20px 0;

  @media (max-width: 480px) {
    flex-direction: column;
    button {
      width: 100%;
    }
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: -70px;

  @media (max-width: 768px) {
    margin-top: 0;
    justify-content: flex-start;
  }
`;

export const StyledButton = styled(StyledBaseButton)`
  width: auto;
  color: #fff;
`;
