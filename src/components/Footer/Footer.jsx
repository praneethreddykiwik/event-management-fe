import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

import HelmLogo from "../../assets/Logos/HelmGreenLogo.png";
import { authSelector } from "../../redux/auth/auth.slice";
import { contactDetails, footerLinks, socialLinks } from "./Footer.helper";
import * as enums from "../../myEnum";
import { laptop, mobile, tablet } from "../../theme/media-queries";

const Footer = () => {
  const { authStatus } = useSelector(authSelector);
  if (authStatus !== "authenticated") return null;

  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterInner>
        {/* Top Grid */}
        <FooterGrid>
          {Object.entries(footerLinks).map(([section, links]) => (
            <Column key={section}>
              <Title>{section}</Title>
              {links.map(({ to, label }) => (
                <FooterLink key={to}>
                  <NavLink to={to}>{label}</NavLink>
                </FooterLink>
              ))}
            </Column>
          ))}

          <LogoSection>
            <Logo>
              <LogoImage src={HelmLogo} alt="Helm Events Logo" />
            </Logo>
            <Description>{enums.DESCRIPTION_TEXT}</Description>
          </LogoSection>
        </FooterGrid>

        {/* Contact Section */}
        <ContactWrapper>
          <ContactRow>
            <ContactTitle>{enums.CONTACT_US}</ContactTitle>

            {contactDetails.map(({ id, icon, valueKey, maxWidth }) => (
              <ContactItem key={id} maxWidth={maxWidth}>
                <Icon className="material-symbols-outlined">{icon}</Icon>
                {id === "email" ? (
                  <a href={`mailto:${enums[valueKey]}`}>{enums[valueKey]}</a>
                ) : (
                  <span>{enums[valueKey]}</span>
                )}
              </ContactItem>
            ))}

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

        {/* Bottom Bar */}
        <BottomBar>
          <BottomText>
            {"\u00A9"} {currentYear} {enums.ALL_RIGHTS_RESERVED}
          </BottomText>

          <BottomLinks>
            <NavLink to="/privacy">{enums.PRIVACY_POLICY}</NavLink>
            <NavLink to="/terms">{enums.TERMS_CONDITIONS}</NavLink>
          </BottomLinks>
        </BottomBar>
      </FooterInner>
    </FooterContainer>
  );
};

/*  Layout  */

const FooterContainer = styled.footer`
  width: 100%;
  background: #131212;
  color: #b8b8b8;
`;

const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 70px 24px 25px;
  text-align: left;

  ${laptop`
    padding: 50px 24px;
  `}
  ${mobile`
    padding: 25px 16px;
  `}
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px;
  padding-bottom: 20px;

  ${mobile`
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    section:last-child {
      display: none;
    }
  `}

  ${tablet`
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    section:last-child {
      display: none;
    }
  `}
`;

/*  Columns  */

const Column = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${mobile`
    gap: 5px;
  `}
`;

const Title = styled.h4`
  margin-bottom: 8px;
  color: #fff;
`;

const FooterLink = styled.article`
  a {
    font-size: 14px;
    color: #b8b8b8;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #fff;
    }
    ${mobile`
      font-size: 11px;
    `}
  }
`;

/* ================= Logo ================= */

const LogoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  width: 280px;
`;

const Logo = styled.div`
  margin-bottom: 12px;
`;

const LogoImage = styled.img`
  width: 146px;
  height: 80px;
  border-radius: 8px;
`;

const Description = styled.p`
  color: #b8b8b8;
  line-height: 1.5;
`;

/* ================= Contact ================= */

const ContactWrapper = styled.section`
  margin-top: 40px;
`;

const ContactRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 40px;
`;

const ContactTitle = styled.h4`
  font-weight: 400;
`;

const ContactItem = styled.article`
  display: flex;
  gap: 10px;
  color: #b8b8b8;
  max-width: ${({ maxWidth }) => (maxWidth ? "280px" : "auto")};
`;

const Icon = styled.i`
  font-size: 22px;
`;

/* ================= Social ================= */

const SocialWrapper = styled.div`
  display: flex;
  gap: 16px;
  ${mobile`
    margin: 0 auto;
  `}
`;

const SocialLink = styled.a`
  font-size: 14px;
  font-weight: 500;
  color: #b8b8b8;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`;

/* ================= Bottom Bar ================= */

const BottomBar = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  border-top: 1px solid #333;
  font-size: 0.9rem;

  ${mobile`
    flex-direction: column-reverse;
    gap: 12px;
    text-align: center;
  `}
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
  ${mobile`
    justify-content: space-evenly;
  `}
`;

export default Footer;
