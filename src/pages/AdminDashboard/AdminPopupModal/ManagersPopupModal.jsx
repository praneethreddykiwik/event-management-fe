import styled from "styled-components";
import {
  StyledParagraphSmallVisible,
  StyledSemiHeading,
} from "../../../components/Styled/Typography.styled";
import { Button } from "../../../components/Buttons/Button";
import Badge from "../../../components/Badge/Badge.component";
import PopupModal from "../../../components/PopupModal/PopupModal";
import { useState } from "react";
import { MANAGE_EVENT_MANAGER } from "../../../enum/common";
import { usersSelector } from "../../../redux/users/users.slice";
import { useDispatch, useSelector } from "react-redux";
import CreateManagerPopup from "./CreateManagerPopup";
import EditUserPopup from "../../../components/users/EditUserPopup";
import { Icon } from "../../../components/Icons/Icons";
import {
  deleteUserAction,
  fetchManagersAction,
} from "../../../redux/users/users.actions";

const ManagersPopupModal = ({ onClose }) => {
  const { eventManagers } = useSelector(usersSelector);
  const dispatch = useDispatch();

  console.log("abdul eventManagers", eventManagers);

  const [open, setOpen] = useState(false);

  const onClickAddManager = () => {
    setOpen(true);
  };

  const TABLE_HEADERS = [
    { label: MANAGE_EVENT_MANAGER.MANAGE_EVENT_MANAGER_NAME, flex: 2 },
    { label: MANAGE_EVENT_MANAGER.MANAGE_EVENT_MANAGER_EMAIL, flex: 3 },
    { label: MANAGE_EVENT_MANAGER.MANAGE_EVENT_MANAGER_MOBILE, flex: 2 },
    {
      label: MANAGE_EVENT_MANAGER.MANAGE_EVENT_MANAGER_ASSIGN_EVENTS,
      flex: 2.2,
    },
    { label: MANAGE_EVENT_MANAGER.MANAGE_EVENT_MANAGER_STATUS, flex: 2 },
    { label: MANAGE_EVENT_MANAGER.MANAGE_EVENT_MANAGER_ACTIONS, flex: 1 },
  ];

  const onDelete = async (uid) => {
    const payload = { uid };
    debugger;
    await dispatch(deleteUserAction(payload));
    await dispatch(fetchManagersAction());
  };

  const onEdit = () => {
    debugger;
  };

  return (
    <PopupModal
      onClose={onClose}
      title={MANAGE_EVENT_MANAGER.MANAGE_EVENT_MANAGER_TITLE}
      subtitle={MANAGE_EVENT_MANAGER.MANAGE_EVENT_MANAGER_SUBTITLE}
    >
      <StyledActionRow>
        <Button type="icon" icon="add" onClick={onClickAddManager}>
          Add Manager
        </Button>
        {open && (
          <EditUserPopup
            onClose={() => setOpen(false)}
            title={"Add Manager"}
            subtitle={"Make sure to choose the Manager's role as Event Manager"}
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
              <StyledPopupActions>
                <Icon variant="edit" onClick={onEdit} />
                <Icon variant="delete" onClick={() => onDelete(item.uid)} />
              </StyledPopupActions>
            </StyledPopupRow>
          ))}
        </StyledTableBody>
      </StyledTableWrapper>
    </PopupModal>
  );
};

export default ManagersPopupModal;

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
  border-bottom: ${({ header }) => (header ? "none" : "1px solid #e5e7eb")};
`;

const StyledPopupHeaderRow = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 0px;
`;

const StyledPopupCol = styled(StyledSemiHeading)`
  flex: ${({ flex }) => flex};
  text-align: left;
  font-size: 12px;
`;
const StyledPopupData = styled(StyledParagraphSmallVisible)`
  flex: ${({ flex }) => flex};
  text-align: left;
`;

const StyledPopupActions = styled.div`
  display: flex;
  gap: 16px;
  margin-left: 50px;
  flex: 1;
  display: flex;
  justify-content: center;
`;

const StyledDividerline = styled.div`
  width: 100%;
  height: 1px;
  background: #e5e7eb;
`;
