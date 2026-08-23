import React, { useState } from "react";
import * as enums from "../../myEnum";
import modalImg from "../../assets/modalImg.jpg";
import styled from "styled-components";
import {
  StyledParagraphBold,
  StyledParagraphSmallGray,
  StyledSemiHeading,
  StyledParagraphSmallVisible,
} from "../../components/Styled/Typography.styled";
import { Button } from "../../components/Buttons/Button";

const AccountSettingsLeftNav = () => {
  const [active, setActive] = useState("Account Settings");

  const [showModal, setShowModal] = useState(true);

  const menuItems = [
    { label: "Account Settings", icon: "settings" },
    { label: "Favorites", icon: "star" },
    { label: "Subscription", icon: "credit_card" },
    { label: "Security", icon: "verified_user" },
    { label: "Actions", icon: "flag" },
    { label: "Support", icon: "forum" },
  ];

  return (
    <StyledLeftNav>
      <StyledProfileCard>
        <StyledProfileHeader>
          <StyledParagraphBold>Wade’s Profile</StyledParagraphBold>
          <span className="material-symbols-outlined icon">
            keyboard_arrow_down
          </span>
        </StyledProfileHeader>
        <StyledParagraphSmallGray left>1 friend</StyledParagraphSmallGray>

        <StyledProfileDivider />

        <StyledProfileRow>
          <StyledGroupIcon className="material-symbols-outlined icon">
            groups
          </StyledGroupIcon>
          <StyledParagraphSmallGray>Invite friends</StyledParagraphSmallGray>
        </StyledProfileRow>
      </StyledProfileCard>

      <StyledSemiHeadingGray>{enums.MY_ACCOUNT}</StyledSemiHeadingGray>
      <Nav>
        {menuItems.map((item) => (
          <Item
            key={item.label}
            active={active === item.label}
            onClick={() => setActive(item.label)}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            {item.label}
          </Item>
        ))}
      </Nav>
      <SidebarModal show={showModal}>
        <CloseButton onClick={() => setShowModal(false)}>
          <span class="material-symbols-outlined">close_small</span>
        </CloseButton>
        <ModalImage src={modalImg} alt="Modal" />
        <StyledParagraphSmallVisible>
          {enums.MODAL_TEXT}
        </StyledParagraphSmallVisible>
        <StyledAccButton type="base">Invite Friends</StyledAccButton>
      </SidebarModal>
    </StyledLeftNav>
  );
};

export default AccountSettingsLeftNav;

const StyledLeftNav = styled.div`
  width: 240px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.2) 0 4px 6px;
`;

const StyledProfileCard = styled.div`
  background-color: ${({ theme }) => theme.colors["light-blue"]};
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 0 0 1px #dbe7f1 inset;
  margin: 10px;
`;

const StyledProfileHeader = styled.div`
  display: flex;
`;
const StyledProfileDivider = styled.div`
  height: 1px;
  background: #dbe7f1;
  margin: 5px -16px;
`;

const StyledProfileRow = styled.div`
  display: flex;
  align-items: center;
  padding-top: 4px;
  cursor: pointer;
  gap: 10px;
`;

const StyledGroupIcon = styled.span`
  color: #aeaeae;
`;

const StyledSemiHeadingGray = styled(StyledSemiHeading)`
  margin-top: 44px;
  color: ${({ theme }) => theme.colors["text-gray-color"]};
`;

const Nav = styled.nav`
  color: ${({ theme }) => theme.colors.white};
  padding: 20px 0;
`;

const Item = styled.li`
  display: flex;
  padding: 14px 20px;
  cursor: pointer;
  background: ${({ active }) => (active ? "#DEF7E6" : "transparent")};
  color: ${({ active }) => (active ? "#000" : "#A0A0A0")};

  &:hover {
    background: #def7e6;
    color: ${({ theme }) => theme.colors.black};
  }

  .material-symbols-outlined {
    font-size: 22px;
    padding-right: 10px;
    color: #a0a0a0;
  }
`;

const SidebarModal = styled.div`
  position: relative;
  margin: 10px;
  background: #e2f3e8;
  border: 1px solid #8dcfa6;
  border-radius: 8px;
  padding: 20px;
  display: ${({ show }) => (show ? "block" : "none")};
  z-index: 10;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const ModalImage = styled.img`
  border-radius: 6px;
  margin-bottom: 15px;
`;

const StyledAccButton = styled(Button)`
  width: auto;
  background: ${({ theme }) => theme.colors.white};
`;
