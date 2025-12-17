<<<<<<< HEAD
import React, { useState } from "react";
import styled from "styled-components";

const profileImg = "";
const logoSvg = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#16a34a"/>
    <path d="M7 12l3 3 7-7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AccountSettingsPage = () => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [sidebarProfileOpen, setSidebarProfileOpen] = useState(false);
  const [linkedAccounts] = useState(["Google"]);
  const [emailPref, setEmailPref] = useState("All");
  const [backupEnabled, setBackupEnabled] = useState(false);
  const [privacyOptions, setPrivacyOptions] = useState({
    blockAdult: false,
    optOutRecommendations: false,
    noIndex: false,
    autoUpdate: false,
  });

  const togglePrivacy = (key) =>
    setPrivacyOptions((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <Page>
      <Topbar>
        <TopbarInner>
          <Brand>
            <LogoWrap>{logoSvg}</LogoWrap>
            <SiteName>eventz</SiteName>
          </Brand>

          <Nav>
            <NavItem>Home</NavItem>
            <NavItem>Events ▾</NavItem>
            <NavItem>Venues ▾</NavItem>
          </Nav>

          <TopbarActions>
            <IconButton title="Search" aria-label="Search">
              <span className="material-icons">search</span>
            </IconButton>
            <IconButton title="Language" aria-label="Language">
              <span className="material-icons">language</span>
            </IconButton>
            <IconButton title="Notifications" aria-label="Notifications">
              <span className="material-icons">notifications_none</span>
            </IconButton>

            <ProfileMenu>
              <ProfileButton onClick={() => setProfileDropdownOpen((s) => !s)} aria-haspopup>
                <ProfileThumb src={profileImg} alt="User profile" />
              </ProfileButton>

              {profileDropdownOpen && (
                <ProfileDropdown role="menu" onMouseLeave={() => setProfileDropdownOpen(false)}>
                  <ProfileDropdownItem>Profile</ProfileDropdownItem>
                  <ProfileDropdownItem active>Settings</ProfileDropdownItem>
                  <ProfileDropdownItem>Bookmark</ProfileDropdownItem>
                  <ProfileDropdownItem>Help</ProfileDropdownItem>
                  <ProfileDropdownItem>Log out</ProfileDropdownItem>
                </ProfileDropdown>
              )}
            </ProfileMenu>
          </TopbarActions>
        </TopbarInner>
      </Topbar>

      <ContentWrap>
        <Sidebar>
          <SidebarTop>
            <SidebarProfile onClick={() => setSidebarProfileOpen((s) => !s)} aria-expanded={sidebarProfileOpen}>
              <SidebarProfileThumb src={profileImg} alt="Wade's profile" />
              <SidebarProfileInfo>
                <ProfileName>Wade's Profile</ProfileName>
                <ProfileSmall>1 friend</ProfileSmall>
              </SidebarProfileInfo>
              <span className="material-icons">expand_more</span>
            </SidebarProfile>

            {sidebarProfileOpen && (
              <SidebarSmallMenu>
                <SmallMenuItem>Invite friends</SmallMenuItem>
              </SidebarSmallMenu>
            )}
          </SidebarTop>

          <SidebarMenu>
            <SidebarMenuItem active>
              <span className="material-icons">settings</span>
              Account Settings
            </SidebarMenuItem>
            <SidebarMenuItem>
              <span className="material-icons">star_border</span>
              Favorites
            </SidebarMenuItem>
            <SidebarMenuItem>
              <span className="material-icons">receipt</span>
              Subscription
            </SidebarMenuItem>
            <SidebarMenuItem>
              <span className="material-icons">security</span>
              Security
            </SidebarMenuItem>
            <SidebarMenuItem>
              <span className="material-icons">flag</span>
              Action
            </SidebarMenuItem>
            <SidebarMenuItem>
              <span className="material-icons">support_agent</span>
              Support
            </SidebarMenuItem>
          </SidebarMenu>

          <InviteCard>
            <InviteThumb />
            <InviteText>
              Invite your friends to share the wonderful experience.
            </InviteText>
            <InviteAction>
              <GreenButton>Invite friends</GreenButton>
            </InviteAction>
          </InviteCard>
        </Sidebar>

        <Main>
          <MainInner>
            <HeadingRow>
              <PageTitle>Account Settings</PageTitle>
            </HeadingRow>

            <Card>
              <CardInner>
                <SectionTitle>
                  <strong>Linked Accounts</strong>
                  <AddLink>+ Add</AddLink>
                </SectionTitle>

                <LinkedList>
                  {linkedAccounts.map((acc) => (
                    <LinkedItem key={acc}>
                      <span className="material-icons">google</span>
                      <span>{acc}</span>
                    </LinkedItem>
                  ))}
                </LinkedList>

                <Divider />

                <SectionRow>
                  <div>
                    <SectionLabel>Email Preference</SectionLabel>
                    <SectionSub>Choose the type of email you want to receive from Events</SectionSub>
                  </div>
                  <UpdateLink onClick={() => setEmailPref((p) => (p === "All" ? "None" : "All"))}>
                    {emailPref === "All" ? "Update" : "Update"}
                  </UpdateLink>
                </SectionRow>

                <Divider />

                <SectionRow style={{ alignItems: "center" }}>
                  <div>
                    <SectionLabel>Backup</SectionLabel>
                    <SectionSub>
                      Automatic backup means never worrying about losing your data. Upgrade now for peace of mind.
                    </SectionSub>
                  </div>

                  <GreenButton small onClick={() => setBackupEnabled(true)}>Upgrade now</GreenButton>
                </SectionRow>

                <Divider />

                <OptionsList>
                  <OptionItem>
                    <label>
                      <input
                        type="checkbox"
                        checked={privacyOptions.blockAdult}
                        onChange={() => togglePrivacy("blockAdult")}
                      />{" "}
                      Block adult contents from gallery
                    </label>
                  </OptionItem>

                  <OptionItem>
                    <label>
                      <input
                        type="checkbox"
                        checked={privacyOptions.optOutRecommendations}
                        onChange={() => togglePrivacy("optOutRecommendations")}
                      />{" "}
                      Opt out of recommendation based on views and subscriptions
                    </label>
                  </OptionItem>

                  <OptionItem>
                    <label>
                      <input
                        type="checkbox"
                        checked={privacyOptions.noIndex}
                        onChange={() => togglePrivacy("noIndex")}
                      />{" "}
                      Don’t allow search engines to index my profile
                    </label>
                  </OptionItem>

                  <OptionItem>
                    <label>
                      <input
                        type="checkbox"
                        checked={privacyOptions.autoUpdate}
                        onChange={() => togglePrivacy("autoUpdate")}
                      />{" "}
                      Allow auto update of contents
                    </label>
                  </OptionItem>
                </OptionsList>

              </CardInner>
            </Card>
          </MainInner>
        </Main>
      </ContentWrap>
    </Page>
  );
};

export default AccountSettingsPage;


const Page = styled.div`
  font-family: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  background: #f5fafc;
  min-height: 100vh;
  color: #111827;
`;


const Topbar = styled.header`
  background: #fff;
  border-bottom: 1px solid #eef2f5;
  position: sticky;
  top: 0;
  z-index: 30;
`;
const TopbarInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 64px;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 0 16px;
  justify-content: space-between;
`;

const Brand = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SiteName = styled.div`
  color: #0f172a;
  font-weight: 600;
  text-transform: lowercase;
  letter-spacing: -0.5px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 18px;
  align-items: center;
  color: #6b7280;

  @media (max-width: 880px) {
    display: none;
  }
`;
const NavItem = styled.div`
  font-size: 14px;
  cursor: pointer;
`;


const TopbarActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const IconButton = styled.button`
  border: none;
  background: transparent;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  color: #6b7280;
  font-size: 20px;

  &:hover {
    background: #f6fafb;
  }

  .material-icons {
    vertical-align: middle;
  }
`;

const ProfileMenu = styled.div`
  position: relative;
`;
const ProfileButton = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
`;
const ProfileThumb = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 999px;
  object-fit: cover;
`;
const ProfileDropdown = styled.div`
  position: absolute;
  right: 0;
  top: 46px;
  min-width: 160px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(16,24,40,0.08);
  overflow: hidden;
  padding: 8px 0;
  z-index: 20;
`;
const ProfileDropdownItem = styled.div`
  padding: 10px 14px;
  font-size: 14px;
  color: ${(p) => (p.active ? "#16a34a" : "#111827")};
  background: ${(p) => (p.active ? "#f0fdf4" : "transparent")};
  cursor: pointer;

  &:hover {
    background: #f6fafb;
  }
`;


const ContentWrap = styled.div`
  max-width: 1200px;
  margin: 28px auto;
  display: flex;
  gap: 28px;
  padding: 0 16px;
  align-items: flex-start;
`;


const Sidebar = styled.aside`
  width: 260px;
  min-height: 520px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 8px 30px rgba(24, 39, 75, 0.04);
  padding: 18px;
  box-sizing: border-box;

  @media (max-width: 880px) {
    display: none;
  }
`;

const SidebarTop = styled.div``;
const SidebarProfile = styled.button`
  width: 100%;
  display: flex;
  gap: 12px;
  align-items: center;
  border: none;
  background: #f8fdfe;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  color: #0f172a;
  font-weight: 600;
`;
const SidebarProfileThumb = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 999px;
  object-fit: cover;
`;
const SidebarProfileInfo = styled.div`
  flex: 1;
  text-align: left;
`;
const ProfileName = styled.div`
  font-size: 14px;
`;
const ProfileSmall = styled.div`
  font-size: 12px;
  color: #6b7280;
  margin-top: 2px;
`;

const SidebarSmallMenu = styled.div`
  margin-top: 10px;
  padding: 8px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid #eef2f5;
`;
const SmallMenuItem = styled.div`
  padding: 8px;
  font-size: 14px;
  color: #111827;
  cursor: pointer;

  &:hover {
    background: #f6fafb;
  }
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 12px 0;
  margin: 12px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const SidebarMenuItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  color: ${(p) => (p.active ? "#16a34a" : "#6b7280")};
  font-weight: ${(p) => (p.active ? 600 : 500)};
  background: ${(p) => (p.active ? "#f0fdf4" : "transparent")};
  cursor: pointer;

  .material-icons {
    font-size: 18px;
    color: inherit;
  }

  &:hover {
    background: #f6fafb;
  }
`;

const InviteCard = styled.div`
  margin-top: 18px;
  background: #f0fcf6;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;
const InviteThumb = styled.div`
  width: 68px;
  height: 42px;
  background: linear-gradient(135deg,#d9f6e9,#c3f0df);
  border-radius: 6px;
`;
const InviteText = styled.div`
  font-size: 13px;
  color: #0f172a;
  text-align: center;
`;
const InviteAction = styled.div``;

const Main = styled.main`
  flex: 1;
`;
const MainInner = styled.div``;
const HeadingRow = styled.div`
  margin-bottom: 18px;
`;
const PageTitle = styled.h1`
  margin: 0;
  font-size: 28px;
  color: #111827;
`;


const Card = styled.section`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 8px 30px rgba(20, 32, 80, 0.04);
  padding: 18px;
`;
const CardInner = styled.div`
  max-width: 900px;
`;

/* sections */
const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
  margin-bottom: 8px;
`;
const AddLink = styled.button`
  border: none;
  background: transparent;
  color: #2563eb;
  cursor: pointer;
  font-weight: 600;
`;

const LinkedList = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
`;
const LinkedItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 8px;
  background: #fbfdff;
  border: 1px solid #eef6fb;
  font-size: 13px;

  .material-icons {
    font-size: 18px;
    color: #ef4444;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #eef2f5;
  margin: 12px 0;
`;

const SectionRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`;
const SectionLabel = styled.div`
  font-weight: 600;
  margin-bottom: 4px;
`;
const SectionSub = styled.div`
  color: #6b7280;
  font-size: 13px;
`;

const UpdateLink = styled.button`
  border: none;
  background: transparent;
  color: #2563eb;
  cursor: pointer;
  font-weight: 600;
`;

const OptionsList = styled.div`
  margin-top: 4px;
`;
const OptionItem = styled.div`
  padding: 8px 6px;
  color: #475569;
  font-size: 14px;
`;

const GreenButton = styled.button`
  background: #10b981;
  color: white;
  border: none;
  padding: ${(p) => (p.small ? "8px 12px" : "10px 18px")};
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(16,185,129,0.08);

  &:hover {
    filter: brightness(0.98);
  }
`;


const SectionTitleText = styled.h3``;

=======
import React from 'react'
import { StyledContainer, StyledContent } from '../../components/Styled/AccountSettings.styled'
import AccountSettingsLeftNav from './AccountSettingsLeftNav'
import AccountSettingsRightContent from './AccountSettingsRightContent'
import Footer from '../../components/Footer/Footer'

const AccountSettings = () => {
  return (
    <>
    <StyledContainer>
        <StyledContent>
            <AccountSettingsLeftNav />
            <AccountSettingsRightContent />
        </StyledContent>
    </StyledContainer>
    <Footer />
    </>
  )
}

export default AccountSettings
>>>>>>> 06b56696462739c122cf0a1755a9208954528282
