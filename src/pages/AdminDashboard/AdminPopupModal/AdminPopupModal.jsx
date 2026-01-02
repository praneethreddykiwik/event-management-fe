import styled from "styled-components";
import bin from "../../../assets/admin's_icons/bin_icon.svg";
import edit from "../../../assets/admin's_icons/edit_icon.svg";
import AdminPopupCard from "./AdminPopupCard";

import {
  StyledParagraphSmallVisible,
  StyledSemiHeading,
} from "../../../components/Styled/Typography.styled";
import { Button } from "../../../components/Buttons/Button";
import Badge from "../../../components/Badge/Badge.component";
import PopupModal from "../../../components/PopupModal/PopupModal";
import { VIEW_AND_MANAGE_EVENT_MANAGER } from "../../../Enum/PopupModal.common";

const AdminPopupModal = ({ onClose }) => {
  const adminPopupData = AdminPopupCard();

  const TABLE_HEADERS = [
    { label: VIEW_AND_MANAGE_EVENT_MANAGER.NAME, flex: 2 },
    { label: VIEW_AND_MANAGE_EVENT_MANAGER.EMAIL, flex: 3 },
    { label: VIEW_AND_MANAGE_EVENT_MANAGER.MOBILE, flex: 2 },
    { label: VIEW_AND_MANAGE_EVENT_MANAGER.ASSIGN_EVENTS, flex: 2.2 },
    { label: VIEW_AND_MANAGE_EVENT_MANAGER.STATUS, flex: 2 },
    { label: VIEW_AND_MANAGE_EVENT_MANAGER.ACTIONS, flex: 1 },
  ];

  return (
    <PopupModal
      onClose={onClose}
      title={VIEW_AND_MANAGE_EVENT_MANAGER.TITLE}
      subtitle={VIEW_AND_MANAGE_EVENT_MANAGER.SUBTITLE}
    >
      <StyledActionRow>
        <Button type="icon" icon="add">
          Add Manager
        </Button>
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
          {adminPopupData?.map((item) => (
            <StyledPopupRow key={item.id}>
              <StyledPopupData flex={2}>{item.name}</StyledPopupData>
              <StyledPopupData flex={3}>{item.mail}</StyledPopupData>
              <StyledPopupData flex={2.2}>{item.mobile}</StyledPopupData>
              <StyledPopupData flex={1.5}>{item.assignedEvent}</StyledPopupData>
              <StyledPopupData flex={1.5}>
                <Badge type={item.status}>{item.status}</Badge>
              </StyledPopupData>
              <StyledPopupData>
                <StyledPopupActions>
                  <StyledPopupIcons src={edit} alt="edit" />
                  <StyledPopupIcons src={bin} alt="delete" />
                </StyledPopupActions>
              </StyledPopupData>
            </StyledPopupRow>
          ))}
        </StyledTableBody>
      </StyledTableWrapper>
    </PopupModal>
  );
};

export default AdminPopupModal;

const StyledActionRow = styled.div`
  display: flex;
  width: fit-content;
  margin: 16px 0;
  margin-left: auto;

  button {
    background-color: #26c867;
    color: #ffffff;
  }
`;

const StyledTableWrapper = styled.div`
  width: 100%;
`;

const StyledTableBody = styled.div`
  height: 200px;
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
`;

const StyledPopupIcons = styled.img`
  cursor: pointer;
`;

const StyledDividerline = styled.div`
  width: 100%;
  height: 1px;
  background: #e5e7eb;
`;
