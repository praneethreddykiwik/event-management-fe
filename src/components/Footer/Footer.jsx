import React from "react";
import { NavLink } from "react-router-dom";
import { FOOTER_CONTENT } from "../../enum/common";
import styled from "styled-components";

const Footer = () => {
  const footerLinks = {
    Event: [
      { label: "Create Events", to: "/create" },
      { label: "Pricing", to: "/pricing" },
      { label: "Events Mobile App", to: "/mobile-app" },
      { label: "Virtual Event Platform", to: "/virtual" },
    ],
    About: [
      { label: "About us", to: "/about" },
      { label: "Why us", to: "/why-us" },
      { label: "Security", to: "/security" },
      { label: "Testimonials", to: "/testimonials" },
    ],
    Help: [
      { label: "Account", to: "/account" },
      { label: "Support Center", to: "/support" },
      { label: "FAQ", to: "/faq" },
    ],
  };

  return (
    <FooterContainer>
      <FooterGrid>
        {Object.entries(footerLinks).map(([section, links]) => (
          <Column key={section}>
            <Title>{section}</Title>

            {links.map((item) => (
              <LinkStyled key={item.to}>
                <NavLink to={item.to}>{item.label}</NavLink>
              </LinkStyled>
            ))}
          </Column>
        ))}

        {/* Logo section */}
        <LogoSection>
          <Logo>eventz</Logo>
          <Description>{FOOTER_CONTENT.DESCRIPTION_TEXT} </Description>
        </LogoSection>
      </FooterGrid>

      <div style={{ marginTop: "40px" }}>
        <ContactRow>
          <ContactRow>{FOOTER_CONTENT.CONTACT_US}</ContactRow>
          <ContactItem>
            <Icon className="material-symbols-outlined">call</Icon>
            {FOOTER_CONTENT.CONTACT_PHONE}
          </ContactItem>

          <ContactItem>
            <Icon className="material-symbols-outlined">mail</Icon>
            {FOOTER_CONTENT.EMAIL_ID}
          </ContactItem>

          <ContactItem style={{ maxWidth: "280px" }}>
            <Icon className="material-symbols-outlined">location_on</Icon>
            {FOOTER_CONTENT.LOCATION}
          </ContactItem>
        </ContactRow>
      </div>

      {/* ---------------- Bottom Bar ---------------- */}
      <BottomBar>
        <span>{FOOTER_CONTENT.ALL_RIGHTS_RESERVED}</span>

        <div>
          <NavLink to="/privacy" style={{ marginRight: "20px" }}>
            {FOOTER_CONTENT.PRIVACY_POLICY}
          </NavLink>
          <NavLink to="/terms">{FOOTER_CONTENT.TERMS_CONDITIONS}</NavLink>
        </div>
      </BottomBar>
    </FooterContainer>
  );
};

/* ------------------------ Styled Components ------------------------ */

const FooterContainer = styled.footer`
  background: #131212;
  color: #fff;
  padding: 70px 120px 25px 120px;
  font-family: "Inter", sans-serif;

  @media (max-width: 1024px) {
    padding: 50px;
  }

  @media (max-width: 540px) {
    padding: 25px;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px;
  padding-bottom: 20px;
  //  border-bottom: 1px solid #333;

  /* FLEX fallback */
  @supports not (display: grid) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (max-width: 980px) {
    grid-template-columns: repeat(3, 1fr);
    div:last-child {
      display: none;
    }
  }
  @media (max-width: 540px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: left;
`;

const Title = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 8px;
  font-weight: normal;
  margin-top: 0;
`;

const LinkStyled = styled.div`
  a {
    font-size: 14px;
    color: #b8b8b8;
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      color: #fff;
    }
  }
`;

const LogoSection = styled.div`
  max-width: 280px;
  text-align: right;
`;

const Logo = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 12px;
  align-items: center;
`;

const Description = styled.p`
  color: #b8b8b8;
  line-height: 1.5;
`;

const ContactRow = styled.div`
  display: flex;
  justify-content: right;
  gap: 60px;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    gap: 30px;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    text-align: left;
    gap: 20px;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  color: #b8b8b8;
  font-size: 1rem;
  gap: 10px;
  text-align: left;
  line-height: 1.4;

  span {
    display: inline-block;
  }
`;

const Icon = styled.span`
  color: #fff;
  font-size: 24px;
  margin-top: 2px;
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #333;
  padding-top: 40px;
  font-size: 0.9rem;
  color: #b8b8b8;

  a {
    color: #b8b8b8;
    text-decoration: none;

    &:hover {
      color: #fff;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
`;

export default Footer;
