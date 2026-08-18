import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BlueBackHOC } from "../../../HOC/BlueBackHOC";
import {
  StyledHeading,
  StyledParagraphBold,
  StyledParagraphGray,
  StyledSemiHeading,
} from "../../../components/Styled/Typography.styled";
import UserManagementItem from "../UserManagementItem";
import useNavigateWithQuery from "../../../hooks/useNavigateWithQuery";

import PopupModal from "../../../components/PopupModal/PopupModal";
import { Button } from "../../../components/Buttons/Button";

import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserAction,
  fetchAllUsersAction,
} from "../../../redux/users/users.actions";
import { updateAllRegInputs } from "../../../redux/farms/farms.slice";
import { generateRegDataToEdit } from "../../../redux/farms/metadata/reg.metadata";
import {
  setUserMgtGridView,
  usersSelector,
} from "../../../redux/users/users.slice";
import EditUserPopup2 from "../EditUserPopup2";
import { mobile } from "../../../theme/media-queries";
import { Icon } from "../../../components/Icons/Icons";
import { SkeletonLoaders } from "../../../components/UI/Loaders/SkeletonLoaders";
import FilterCards from "../../../components/Filters/FilterCards/FilterCards";
import {
  isFilterSelected,
  updateFilters,
} from "../../../components/Filters/FilterCards/FilterCards.helper";
import { useSearchParams } from "react-router-dom";
import { USER_ROLE_FILTERS } from "../../../constants/user.constants";
import { StyledMediumHeadingWhite } from "../../NewEvent/NewEvent.styles";

const AssignedUserRoles = () => {
  const navigate = useNavigateWithQuery();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const { allUsers, userMgtGridView, allUsersLoading, roleCounts } =
    useSelector(usersSelector);

  const [openEdit, setOpenEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const filterCards = searchParams.get("filterCards");
  const selectedValues = filterCards ? filterCards.split(",") : [];
  const selectedRoleFilters = USER_ROLE_FILTERS.map((filter) => ({
    ...filter,
    selected:
      filterCards === null
        ? filter.selected
        : selectedValues.includes(filter.value),
  }));

  const selectedRole = selectedRoleFilters
    .filter((fl) => fl.selected)
    .map((m) => m.value)
    .join(",");

  useEffect(() => {
    const query = selectedRoleFilters
      .filter((fl) => fl.selected)
      .map((m) => m.value)
      .join(",");
    dispatch(fetchAllUsersAction({ query }));
  }, []);

  //  EDIT USER
  const onEdit = (user) => {
    setSelectedUser(user);
    setOpenEdit(true);

    const regData = generateRegDataToEdit(user);
    dispatch(updateAllRegInputs(regData));
  };

  //  DELETE USER
  const onDelete = async () => {
    await dispatch(deleteUserAction({ uid: selectedUser.uid }));
    const query = selectedRoleFilters
      .filter((fl) => fl.selected)
      .map((m) => m.value)
      .join(",");

    dispatch(fetchAllUsersAction({ query }));
    setShowDeleteConfirm(false);
    setSelectedUser(null);
  };

  const viewClickHandler = () => {
    dispatch(setUserMgtGridView(!userMgtGridView));
  };

  const onClickFilter = (key) => {
    const updated = updateFilters(key, selectedRoleFilters);

    const query = updated
      .filter((fl) => fl.selected)
      .map((m) => m.value)
      .join(",");

    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set("filterCards", query);
      return params;
    });

    dispatch(fetchAllUsersAction({ query }));
  };

  const isSelected = (key) => {
    return isFilterSelected(key, selectedRoleFilters);
  };

  return (
    <BlueBackHOC>
      <PageWrapper>
        <StyledSemiHeading left>User Filters</StyledSemiHeading>
        <StyledButtonContainer right>
          <StyledButton onClick={() => navigate("/registration")} whiteText>
            Create User{" "}
          </StyledButton>
        </StyledButtonContainer>

        <FilterCards
          countObj={roleCounts}
          getColor={() => "#000000"}
          onCardClick={onClickFilter}
          isSelected={isSelected}
          isLoading={allUsersLoading}
        />

        <AlignBox onClick={viewClickHandler}>
          <Icon selected={!userMgtGridView}>view_list</Icon>
          <Icon selected={userMgtGridView}>grid_view</Icon>
        </AlignBox>

        <UsersCtn $gridView={userMgtGridView}>
          {allUsers?.length ? (
            allUsers.map((user) => (
              <UserManagementItem
                key={user.uid}
                loading={allUsersLoading}
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
            selectedRole={selectedRole}
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

export default AssignedUserRoles;

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

const StyledButton = styled(Button)`
  width: auto;
`;
