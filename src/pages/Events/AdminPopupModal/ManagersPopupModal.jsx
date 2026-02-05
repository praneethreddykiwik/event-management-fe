import styled from "styled-components";
import {
  StyledParagraphSmallVisible,
  StyledSemiHeading,
} from "../../../components/Styled/Typography.styled";
import { Button } from "../../../components/Buttons/Button";
import Badge from "../../../components/Badge/Badge.component";
import PopupModal from "../../../components/PopupModal/PopupModal";
import { useState } from "react";
import * as enums from "../../../myEnum";
import { usersSelector } from "../../../redux/users/users.slice";
import { useDispatch, useSelector } from "react-redux";
import EditUserPopup from "../../../components/users/EditUserPopup";
import { Icon } from "../../../components/Icons/Icons";
import {
  deleteUserAction,
  fetchManagersAction,
} from "../../../redux/users/users.actions";
import { updateAllRegInputs } from "../../../redux/farms/farms.slice";
import {
  generateRegDataToEdit,
  registrationMetaData,
} from "../../../redux/farms/metadata/reg.metadata";
import { theme } from "../../../theme/theme";

const det = {
  add: {
    title: "Add Manager",
    description: "Make sure to choose the Manager's role as Event Manager",
    type: "add",
    userUid: "",
  },
  edit: {
    title: "Edit Manager",
    description: "Edit Details",
    type: "edit",
    userUid: "",
  },
};

const TABLE_HEADERS = [
  { label: enums.MANAGE_EVENT_MANAGER_NAME, flex: 2 },
  { label: enums.MANAGE_EVENT_MANAGER_EMAIL, flex: 3 },
  { label: enums.MANAGE_EVENT_MANAGER_MOBILE, flex: 2 },
  {
    label: enums.MANAGE_EVENT_MANAGER_ASSIGN_EVENTS,
    flex: 2.2,
  },
  { label: enums.MANAGE_EVENT_MANAGER_STATUS, flex: 2 },
  { label: enums.MANAGE_EVENT_MANAGER_ACTIONS, flex: 1 },
];

const ManagersPopupModal = ({ onClose }) => {
  const { eventManagers } = useSelector(usersSelector);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [modalDetails, setModalDetails] = useState({});

  const onClickAddManager = () => {
    setModalDetails(det.add);
    setOpen(true);
    dispatch(updateAllRegInputs(registrationMetaData));
  };

  const onDelete = async (uid) => {
    const payload = { uid };
    await dispatch(deleteUserAction(payload));
    await dispatch(fetchManagersAction());
  };

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [selectedUserUid, setSelectedUserUid] = useState(null);

  const onClickDeleteIcon = (uid) => {
    setSelectedUserUid(uid);
    setShowDeleteConfirm(true);
  };

  const onEdit = (user) => {
    setOpen(true);
    setModalDetails({ ...det.edit, userUid: user.uid });

    const regDataToEdit = generateRegDataToEdit(user);
    dispatch(updateAllRegInputs(regDataToEdit));
  };

  return (
    <PopupModal
      onClose={onClose}
      title={enums.MANAGE_EVENT_MANAGER_TITLE}
      subtitle={enums.MANAGE_EVENT_MANAGER_SUBTITLE}
      width="800px"
    >
      <StyledActionRow>
        <Button type="icon" icon="add" onClick={onClickAddManager}>
          Add Manager
        </Button>
        {open && (
          <EditUserPopup
            onClose={() => setOpen(false)}
            modalDetails={modalDetails}
          />
        )}
      </StyledActionRow>

      <StyledTableWrapper>
        <StyledPopupHeaderRow>
          {TABLE_HEADERS.map(({ label, flex }) => (
            <StyledPopupCol key={label} flex={flex}>
              {label}
            </StyledPopupCol>
          ))}
        </StyledPopupHeaderRow>

        <StyledDividerline />

        <StyledTableBody>
          {eventManagers?.map((item) => (
            <StyledPopupRow key={item.id}>
              <StyledPopupData flex={2}>{item.firstName}</StyledPopupData>
              <StyledPopupData flex={3}>{item.email}</StyledPopupData>
              <StyledPopupData flex={2.2}>{item.mobile}</StyledPopupData>
              <StyledPopupData flex={1.5}>{item.assignedEvent}</StyledPopupData>
              <StyledPopupData flex={1}>
                <Badge type={item.status}>{item.status}</Badge>
              </StyledPopupData>
              {showDeleteConfirm && (
                <PopupModal
                  onClose={() => setShowDeleteConfirm(false)}
                  title={enums.MANAGE_EVENT_MANAGER_DELETE}
                  subtitle={enums.MANAGE_EVENT_MANAGER_CONFIRMATION}
                  width="400px"
                >
                  <DeletePopup>
                    <Button
                      type="secondary"
                      onClick={() => setShowDeleteConfirm(false)}
                    >
                      {enums.MANAGE_EVENT_MANAGER_DELETE_NO}
                    </Button>

                    <Button
                      type="danger"
                      onClick={async () => {
                        await onDelete(selectedUserUid);
                        setShowDeleteConfirm(false);
                        setSelectedUserUid(null);
                      }}
                    >
                      {enums.MANAGE_EVENT_MANAGER_DELETE_YES}
                    </Button>
                  </DeletePopup>
                </PopupModal>
              )}

              <StyledPopupActions style={{ marginRight: "10px" }}>
                <Icon variant="edit" onClick={() => onEdit(item)} />
                <Icon
                  variant="delete"
                  onClick={() => onClickDeleteIcon(item.uid)}
                />
              </StyledPopupActions>
            </StyledPopupRow>
          ))}
        </StyledTableBody>
      </StyledTableWrapper>
    </PopupModal>
  );
};

export default ManagersPopupModal;

const DeletePopup = styled.div`
  display: flex;
  justifycontent: flex-end;
  gap: 15px;
  padding: 20px 0px;
`;

const StyledActionRow = styled.div`
  display: flex;
  width: fit-content;
  margin: 0px 0;
  margin-left: auto;
`;

const StyledTableWrapper = styled.div`
  width: 100%;
`;

const StyledTableBody = styled.div`
  height: 340px;
  overflow-y: auto;
`;

const StyledPopupRow = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 0px;
  border-bottom: ${({ header, theme }) =>
    header ? "none" : theme.borders["border-gray"]};
`;

const StyledPopupHeaderRow = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 0px;
`;

const StyledPopupCol = styled(StyledSemiHeading)`
  flex: ${({ flex }) => flex};
  text-align: left;
  font-size: ${theme.light.typography["caption"]["font-size"]};
`;

const StyledPopupData = styled(StyledParagraphSmallVisible)`
  flex: ${({ flex }) => flex};
  font-size: ${({ theme }) =>
    theme.typography["body-small"]["font-size"]};
  font-weight: ${({ theme }) =>
    theme.typography["body-small"]["font-weight"]};
  line-height: ${({ theme }) =>
    theme.typography["body-small"]["line-height"]};
  color: ${({ theme }) => theme.color};
`;

const StyledPopupActions = styled.div`
  display: flex;
  gap: 16px;
  margin-left: 50px;
  flex: 1;
  justify-content: center;
`;

const StyledDividerline = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors["gray-disabled"]};
`;