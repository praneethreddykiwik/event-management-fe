import React, { useState } from "react";
import { HEADINGS } from "../../enum/common";
import modalImg from "../../assets/modalimg.jpg";
import {
  CloseButton,
  Item,
  List,
  ModalImage,
  ModalText,
  Nav,
  SidebarModal,
  StyledAccButton,
  StyledLeftNav,
  StyledSemiHeadingAccount,
} from "../../components/Styled/AccountSettings.styled";
import AccountProfileSection from "./AccountProfileSection";

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
    <>
      <StyledLeftNav>
        <AccountProfileSection />
        <StyledSemiHeadingAccount>
          {HEADINGS.MY_ACCOUNT}
        </StyledSemiHeadingAccount>
        <Nav>
          <List>
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
          </List>
        </Nav>
        <SidebarModal show={showModal}>
          <CloseButton onClick={() => setShowModal(false)}>×</CloseButton>
          {/* ❌ */}
          <ModalImage src={modalImg} alt="Modal" />
          <ModalText>Invite your friends to share the wonderful experience.
          </ModalText>
          <StyledAccButton onClick={() => setShowModal(false)}>
            Invite Friends
          </StyledAccButton>
        </SidebarModal>
      </StyledLeftNav>
    </>
  );
};

export default AccountSettingsLeftNav;
