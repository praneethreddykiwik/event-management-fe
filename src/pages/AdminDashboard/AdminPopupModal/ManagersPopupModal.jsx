import styled from "styled-components";
import bin from "../../../assets/admin's_icons/bin_icon.svg";
import edit from "../../../assets/admin's_icons/edit_icon.svg";

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
import { useSelector } from "react-redux";
import CreateManagerPopup from "./CreateManagerPopup";

const ManagersPopupModal = ({ onClose }) => {
  const { eventManagers } = useSelector(usersSelector);
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
        {open && <CreateManagerPopup onClose={() => setOpen(false)} />}
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
              <StyledFlex flex={2}>
                <StyledPopupActions>
                  <span className="material-symbols-outlined">
                    "edit"
                  </span>
                  <StyledPopupIcons src={bin} alt="delete" />
                </StyledPopupActions>
              </StyledFlex>
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

  // button {
  //   background-color: #26c867;
  //   color: #ffffff;
  // }
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
const StyledFlex = styled.div`
  flex: ${({ flex }) => flex};
  display: flex;
  justify-content: center;
`;
const StyledPopupActions = styled.div`
  display: flex;
  gap: 16px;
  margin-left: 50px;
`;

const StyledPopupIcons = styled.img`
  cursor: pointer;
`;

const StyledDividerline = styled.div`
  width: 100%;
  height: 1px;
  background: #e5e7eb;
`;
