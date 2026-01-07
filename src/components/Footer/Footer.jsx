import React from "react";
import { NavLink } from "react-router-dom";
// import E_logo from "../../assets/Header_images/E_logo.jpg";
import Helm_logo from "../../assets/Logos/Helm_logo.svg"
import { FOOTER_CONTENT } from "../../enum/accountsettings.common";
import styled from "styled-components";
import { authSelector } from "../../redux/auth/auth.slice";
import { useSelector } from "react-redux";
import { footerLinks, socialLinks } from "./Footer.helper";
// import SocialIcons from "./SocialIcons";

const Footer = () => {
  
  const { authStatus } = useSelector(authSelector);
  const isLoggedIn = authStatus === "authenticated";
  
  if(!isLoggedIn){
    return null;
  }

  const currentYear = new Date().getFullYear();

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

        <LogoSection>
          <Logo>
            <LogoImage src={Helm_logo} alt="logo" />
          </Logo>
          <Description>{FOOTER_CONTENT.DESCRIPTION_TEXT}</Description>
        </LogoSection>
      </FooterGrid>

      <ContactWrapper>
        <ContactRow>
          <ContactTitle>{FOOTER_CONTENT.CONTACT_US}</ContactTitle>

          <ContactItem>
            <Icon className="material-symbols-outlined">call</Icon>
            {FOOTER_CONTENT.CONTACT_PHONE}
          </ContactItem>

          <ContactItem>
            <Icon className="material-symbols-outlined">mail</Icon>
            {FOOTER_CONTENT.EMAIL_ID}
          </ContactItem>

          <ContactItem maxWidth>
            <Icon className="material-symbols-outlined">location_on</Icon>
            {FOOTER_CONTENT.LOCATION}
          </ContactItem>

          <SocialWrapper>
            {socialLinks.map((social) => (
              <SocialLink
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.name}
              </SocialLink>
            ))}
          </SocialWrapper>

        </ContactRow>
      </ContactWrapper>

      <BottomBar>
        <BottomText>{'\u00A9'} {currentYear} {FOOTER_CONTENT.ALL_RIGHTS_RESERVED}</BottomText>

        <BottomLinks>
          <NavLink to="/privacy">{FOOTER_CONTENT.PRIVACY_POLICY}</NavLink>
          <NavLink to="/terms">{FOOTER_CONTENT.TERMS_CONDITIONS}</NavLink>
        </BottomLinks>
      </BottomBar>
    </FooterContainer>
  );
};

/* ------------------------ Styled Components ------------------------ */

const FooterContainer = styled.footer`
  background: #131212;
  color: #fff;
  padding: 70px 120px 25px;
  text-align: left;

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

  @media (max-width: 980px) {
    grid-template-columns: repeat(3, 1fr);
    section:last-child {
      display: none;
    }
  }

  @media (max-width: 540px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Column = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h4`
  font-size: 1.2rem;
  margin: 0 0 8px;
  font-weight: normal;
`;

const LinkStyled = styled.article`
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

const LogoSection = styled.section`
  max-width: 280px;
  text-align: right;
`;

const Logo = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin: 0 0 12px;
`;

const Description = styled.p`
  color: #b8b8b8;
  line-height: 1.5;
`;

const ContactWrapper = styled.section`
  margin-top: 40px;
`;

const ContactRow = styled.section`
  display: flex;
  justify-content: space-around;
  gap: 60px;
  flex-wrap: wrap;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    justify-content: space-between;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ContactTitle = styled.h4`
  color: #fff;
  font-weight: normal;
  margin: 0;
`;

const ContactItem = styled.article`
  display: flex;
  gap: 10px;
  color: #b8b8b8;
  line-height: 1.4;
  max-width: ${({ maxWidth }) => (maxWidth ? "280px" : "auto")};
`;

const Icon = styled.i`
  color: #fff;
  font-size: 24px;
  margin-top: 2px;
`;

const BottomBar = styled.section`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #333;
  padding-top: 40px;
  font-size: 0.9rem;
  color: #b8b8b8;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
`;

const BottomText = styled.p`
  margin: 0;
`;

const BottomLinks = styled.nav`
  display: flex;
  gap: 20px;

  a {
    color: #b8b8b8;
    text-decoration: none;

    &:hover {
      color: #fff;
    }
  }
`;

const LogoImage = styled.img`
  // width: 64px;
  // height: 64px;
  // border-radius: 8px;
  width: 146px;
  height: 80px;
  border-radius: 8px;
`;

const SocialWrapper = styled.div`
  display: inline-flex;
  gap: 16px;
  align-items: flex-start;
  vertical-align: top;
`;

const SocialLink = styled.a`
  font-size: 14px;
  font-weight: 500;
  color: #b8b8b8;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #fff;
    text-decoration: none;
  }
`;

export default Footer;
