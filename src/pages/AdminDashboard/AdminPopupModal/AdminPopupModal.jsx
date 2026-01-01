import styled from "styled-components";
import close from "../../../assets/admin's_icons/close_icon.svg";
import bin from "../../../assets/admin's_icons/bin_icon.svg";
import edit from "../../../assets/admin's_icons/edit_icon.svg";
import AdminPopupCard from "./AdminPopupCard";

import {
  StyledMediumHeading,
  StyledParagraphSmall,
  StyledParagraphSmallVisible,
  StyledSemiHeading,
} from "../../../components/Styled/Typography.styled";
import { Button } from "../../../components/Buttons/Button";

const AdminPopupModal = ({ onClose }) => {
  const adminPopupData = AdminPopupCard();

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <StyledBackdrop onClick={handleBackdropClick}>
      <StyledPopupModal>
        <StyledPopupHeader>
          <StyledheaderTxt>
            <StyledPopupTitle>Event Managers</StyledPopupTitle>
            <StyledPopupSubtitle>
              View and manage event managers
            </StyledPopupSubtitle>
          </StyledheaderTxt>

          <StyledCloseIcon src={close} alt="close" onClick={onClose} />
        </StyledPopupHeader>

        <StyledActionRow>
          <Button type="icon" icon="add">
            Add Manager
          </Button>
        </StyledActionRow>

        <StyledTableWrapper>
          <StyledPopupRow>
            <StyledPopupCol flex={2}>Name</StyledPopupCol>
            <StyledPopupCol flex={3}>Email</StyledPopupCol>
            <StyledPopupCol flex={2}>Mobile</StyledPopupCol>
            <StyledPopupCol flex={1.7}>Assigned Events</StyledPopupCol>
            <StyledPopupCol flex={1.5}>Status</StyledPopupCol>
            <StyledPopupCol flex={1}>Actions</StyledPopupCol>
          </StyledPopupRow>

          <StyledDividerline />

          <StyledTableBody>
            {adminPopupData?.map((item) => (
              <StyledPopupRow key={item.id || item.mail}>
                <StyledPopupData flex={2}>{item.name}</StyledPopupData>
                <StyledPopupData flex={3}>{item.mail}</StyledPopupData>
                <StyledPopupData flex={2.2}>{item.mobile}</StyledPopupData>
                <StyledPopupData flex={1.5}>
                  {item.assignedEvent}
                </StyledPopupData>
                <StyledPopupData flex={1.5}>
                  <StyledPopupStatus active={item.status}>
                    {item.status ? "Active" : "Inactive"}
                  </StyledPopupStatus>
                </StyledPopupData>
                <StyledPopupData flex={1}>
                  <StyledPopupActions>
                    <StyledPopupIcons src={edit} alt="edit" />
                    <StyledPopupIcons src={bin} alt="delete" />
                  </StyledPopupActions>
                </StyledPopupData>
              </StyledPopupRow>
            ))}
          </StyledTableBody>
        </StyledTableWrapper>
      </StyledPopupModal>
    </StyledBackdrop>
  );
};

export default AdminPopupModal;

const StyledBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const StyledPopupModal = styled.div`
  background: #fff;
  width: 60%;
  max-height: 80vh;
  border-radius: 12px;
  padding: 24px;
  overflow: hidden;
`;

const StyledPopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const StyledheaderTxt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledCloseIcon = styled.img`
  height: 15px;
  cursor: pointer;
`;

const StyledPopupTitle = styled(StyledMediumHeading)`
  margin: 0;
`;

const StyledPopupSubtitle = styled(StyledParagraphSmall)`
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.black};
`;

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
  max-height: 200px;
  overflow-y: auto;
`;

const StyledPopupRow = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 0;
  border-bottom: ${({ header }) => (header ? "none" : "1px solid #e5e7eb")};
  font-weight: ${({ header }) => (header ? "600" : "400")};
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
`;

const StyledPopupIcons = styled.img`
  cursor: pointer;
`;

const StyledPopupStatus = styled.span`
  padding: 4px 12px;
  border-radius: 14px;
  font-size: 13px;
  color: #fff;
  background: ${({ active }) => (active ? "#4f46e5" : "#6b7280")};
`;

const StyledDividerline = styled.div`
  width: 100%;
  height: 1px;
  background: #e5e7eb;
`;
