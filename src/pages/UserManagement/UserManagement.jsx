import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { BlueBackHOC } from "../../HOC/BlueBackHOC";
import {
  StyledHeading,
  StyledParagraphBold,
} from "../../components/Styled/Typography.styled";
import UserManagementItem from "../../pages/UserManagement/UserManagementItem";
import { StyledBaseButton } from "../../components/Styled/Buttons.styled";
import useNavigateWithQuery from "../../hooks/useNavigateWithQuery";

import PopupModal from "../../components/PopupModal/PopupModal";
import { Button } from "../../components/Buttons/Button";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserAction,
  fetchAllUsersAction,
} from "../../redux/users/users.actions";
import { updateAllRegInputs } from "../../redux/farms/farms.slice";
import { generateRegDataToEdit } from "../../redux/farms/metadata/reg.metadata";
import {
  setUserMgtGridView,
  usersSelector,
} from "../../redux/users/users.slice";
import EditUserPopup2 from "./EditUserPopup2";
import { mobile } from "../../theme/media-queries";
import { UserFilterCards } from "./UserFilterCards";
import { Icon } from "../../components/Icons/Icons";

const UserManagement = () => {
  const navigate = useNavigateWithQuery();
  const dispatch = useDispatch();

  const { allUsers, selectedRoleFilters, userMgtGridView } =
    useSelector(usersSelector);

  const [openEdit, setOpenEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  useEffect(() => {
    dispatch(fetchAllUsersAction());
  }, []);

  const filteredUsers = allUsers.filter((user) => {
    const selectedRoles = selectedRoleFilters
      ?.filter((f) => f.selected)
      .map((f) => f.value);

    if (!selectedRoles || selectedRoles.length === 0) return true;

    return selectedRoles.includes(user.role);
  });

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
    dispatch(fetchAllUsersAction());
    setShowDeleteConfirm(false);
    setSelectedUser(null);
  };

  const viewClickHandler = () => {
    dispatch(setUserMgtGridView(!userMgtGridView));
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
        <UserFilterCards />

        <AlignBox onClick={viewClickHandler}>
          <Icon selected={!userMgtGridView}>view_list</Icon>
          <Icon selected={userMgtGridView}>grid_view</Icon>
        </AlignBox>

        <UsersCtn $gridView={userMgtGridView}>
          {filteredUsers?.length ? (
            filteredUsers.map((user) => (
              <UserManagementItem
                key={user.uid}
                data={user}
                onEdit={() => onEdit(user)}
                onDelete={() => {
                  setSelectedUser(user);
                  setShowDeleteConfirm(true);
                }}
              />
            ))
          ) : (
            <StyledParagraphBold>No users available!</StyledParagraphBold>
          )}
        </UsersCtn>

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

// ================= STYLES =================

const PageWrapper = styled.div`
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${mobile`
  padding: 16px;
  `}
`;

const UsersCtn = styled.div`
  display: flex;
  ${({ $gridView }) =>
    $gridView
      ? `
          flex-wrap: wrap;
          flex-direction: row;
        `
      : `
          flex-direction: column;
        `};

  ${mobile`
    flex-direction: column;
  `}
  gap: 20px;
`;

const AlignBox = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 8px;
  gap: 10px;
  cursor: pointer;

  ${mobile`
      display: none;
    `}
`;
const HeaderContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between; /*  KEY FIX */
`;

const DeletePopup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  padding: 24px 0;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: -70px;

  ${mobile`
    margin-top: 0;
    justify-content: center;
  `}
`;

const StyledButton = styled(StyledBaseButton)`
  width: auto;
  color: ${({ theme }) => theme.colors.white};
`;
