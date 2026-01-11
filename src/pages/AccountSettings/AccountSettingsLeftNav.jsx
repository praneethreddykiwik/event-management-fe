import React, { useState } from "react";
import * as enums from "../../enum";
import modalImg from "../../assets/modalimg.jpg";
import {
  StyledGroupIcon,
  StyledProfileCard,
  StyledProfileDivider,
  StyledProfileHeader,
  StyledProfileLabel,
  StyledProfileRow,
  StyledProfileSubtitle,
  StyledProfileTitle,
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
          <StyledProfileTitle>Wade’s Profile</StyledProfileTitle>
          <span className="material-symbols-outlined icon">
            keyboard_arrow_down
          </span>
        </StyledProfileHeader>
        <StyledProfileSubtitle>1 friend</StyledProfileSubtitle>

        <StyledProfileDivider />

        <StyledProfileRow>
          <StyledGroupIcon className="material-symbols-outlined icon">
            groups
          </StyledGroupIcon>
          <StyledProfileLabel>Invite friends</StyledProfileLabel>
        </StyledProfileRow>
      </StyledProfileCard>

      <StyledSemiHeadingAccount>{enums.MY_ACCOUNT}</StyledSemiHeadingAccount>
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
        <CloseButton onClick={() => setShowModal(false)}>
          <span class="material-symbols-outlined">close_small</span>
        </CloseButton>
        <ModalImage src={modalImg} alt="Modal" />
        <ModalText>{TEXTS.MODAL_TEXT}</ModalText>
        <StyledAccButton type="base">Invite Friends</StyledAccButton>
      </SidebarModal>
    </StyledLeftNav>
  );
};

export default AccountSettingsLeftNav;
