import React from "react";
import {
  Page, Wrapper, BodySection, LeftContent, HeaderRow, ControlIcon,
  StyleHeader, Topcard, StyleRHeader2, Stylespan, TopRow, VenueCard,
  VenueImg, UserBar, UserPhoto, UserDetails, Name, IconGroup,
  SideImages, SmallPic, UsageBox, BoxHeader, StyleHeader2, InfoIcon,
  Chartimg, InfoRow, InfoCard, Label, Value, Label1, Label2, InfoCardInner,
  QRCode, TempToggle, TempPercent, TempSwitch, DeviceRow, DeviceCard,
  Stspan2, Toggle, Stspan, StyledHead, RightSidebar, Time, Divider,
  ThermoHeader, ThermoTitle, ThermoToggle, ThermoWrapper, ThermoProgress,
  CenterTemp, UnitText, ModeRow, ModeBtn, Stspan3, Span,
  LastUsersBox, LastHeader, AvatarGroup, Avtimg, UserActivity, LastImg,
  LastInfo, Header4, Paragraph, SmallPara, HeaderContainer, LeftSection,
  Lstspan, Header3, NavSection, NavItem, RightSection, ProfileBox, ProfileImg,
  ProfileInfo, Ltspan, ArrowIcon, Stdiv, Value1, Stdiv2, SSspan, St2div,
} from "./Controlpage.style.jsx";

import conference_image from "../../assets/ControlPage_img/conference_image.jpg";
import control_avtar from "../../assets/ControlPage_img/control_avtar.jpeg";
import Avt1 from "../../assets/ControlPage_img/Avt1.jpeg";
import Avt2 from "../../assets/ControlPage_img/Avt2.jpeg";
import Avt3 from "../../assets/ControlPage_img/Avt3.jpeg";
import doorimg from "../../assets/ControlPage_img/doorimg.jpeg";

import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { MdInfoOutline } from "react-icons/md";

import { HALLS_DASHBOARD } from "../../enum/control_common.jsx";

export const ControlDashboard = () => {
  return (
    <Page>
      <Wrapper>
        <Topcard>
          <HeaderRow>
            <Stdiv style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <ControlIcon className="material-icons">bar_chart</ControlIcon>
              <StyleHeader>{HALLS_DASHBOARD.CONTROLHEADER}</StyleHeader>
            </Stdiv>

            <StyleRHeader2>
              {HALLS_DASHBOARD.CONTROLHEADER2}
              <Stylespan className="material-icons">expand_more</Stylespan>
            </StyleRHeader2>
          </HeaderRow>
        </Topcard>

        <BodySection>

          <LeftContent>

            <TopRow>

              <VenueCard>
                <VenueImg src={conference_image} />

                <UserBar>
                  <UserPhoto src={control_avtar} />
                  <UserDetails>
                    <Name>{HALLS_DASHBOARD.USER_NAME}</Name>
                  </UserDetails>
                  <IconGroup>
                    <HiOutlineVideoCamera size={22} />
                    <FiPhoneCall size={20} />
                  </IconGroup>
                </UserBar>
              </VenueCard>


              <SideImages>
                {HALLS_DASHBOARD.SIDE_IMAGES.map((img, i) => (
                  <SmallPic key={i} src={img} />
                ))}
              </SideImages>


              <UsageBox>
                <BoxHeader>
                  <StyleHeader2>{HALLS_DASHBOARD.HISTORY_HEADER}</StyleHeader2>
                  <InfoIcon>
                    <MdInfoOutline size={18} />
                  </InfoIcon>
                </BoxHeader>
                <Chartimg src={HALLS_DASHBOARD.CHART_URL} alt="chart" />
              </UsageBox>
            </TopRow>


            <InfoRow>

              <InfoCard>
                <Label>{HALLS_DASHBOARD.CURRENT}</Label>
                <Value1>{HALLS_DASHBOARD.VALUE1}</Value1>
              </InfoCard>


              <InfoCard>
                <InfoCardInner>
                  <Stdiv2>
                    <Label1>{HALLS_DASHBOARD.TEMPERATURE}</Label1>
                    <Value>{HALLS_DASHBOARD.DEGREE}</Value>
                  </Stdiv2>

                  <TempToggle>
                    <TempPercent>{HALLS_DASHBOARD.DEGREE}</TempPercent>
                    <TempSwitch>
                      <SSspan className="thumb" />
                    </TempSwitch>
                  </TempToggle>
                </InfoCardInner>
              </InfoCard>


              <InfoCard>
                <InfoCardInner>
                  <Label2>{HALLS_DASHBOARD.SCAN}</Label2>
                  <QRCode src="https://quickchart.io/qr?text=device&size=150" />
                </InfoCardInner>
              </InfoCard>
            </InfoRow>


            <DeviceRow>
              {HALLS_DASHBOARD.DEVICES.map((dev, i) => (
                <DeviceCard key={i} $active={dev.active}>
                  <Stspan2 className="material-icons wifi-icon">wifi</Stspan2>

                  <Toggle $active={dev.active}>
                    <St2div className="circle" />
                  </Toggle>

                  <Stspan>{dev.status}</Stspan>
                  <StyledHead>{dev.title}</StyledHead>
                </DeviceCard>
              ))}
            </DeviceRow>
          </LeftContent>


          <RightSidebar>
            <Time>{HALLS_DASHBOARD.TIME}</Time>
            <Divider />

            <ThermoHeader>
              <ThermoTitle>{HALLS_DASHBOARD.THERMOVALUE}</ThermoTitle>
              <ThermoToggle />
            </ThermoHeader>

            <ThermoWrapper>
              <ThermoProgress></ThermoProgress>
              <CenterTemp>{HALLS_DASHBOARD.CENT_VALUE}</CenterTemp>
              <UnitText>{HALLS_DASHBOARD.UNIT_VALUE}</UnitText>
            </ThermoWrapper>

            <ModeRow>
              {HALLS_DASHBOARD.MODES.map((mode, index) => (
                <ModeBtn key={index} active={index === 3}>
                  <Stspan3 className="material-icons">
                    {index === 0 && "brightness_high"}
                    {index === 1 && "eco"}
                    {index === 2 && "air"}
                    {index === 3 && "ac_unit"}
                  </Stspan3>
                  <Span>{mode}</Span>
                </ModeBtn>
              ))}
            </ModeRow>

            <LastUsersBox>
              <LastHeader>
                <Stspan3>{HALLS_DASHBOARD.LAST_HEAD}</Stspan3>
                <AvatarGroup>
                  <Avtimg src={Avt1} />
                  <Avtimg src={Avt2} />
                  <Avtimg src={Avt3} />
                </AvatarGroup>
              </LastHeader>

              <UserActivity>
                <LastImg src={doorimg} />
                <LastInfo>
                  <Header4>{HALLS_DASHBOARD.HALLS}</Header4>
                  <Paragraph>{HALLS_DASHBOARD.BACK_DOOR}</Paragraph>
                  <SmallPara>{HALLS_DASHBOARD.D_TIME}</SmallPara>
                </LastInfo>
              </UserActivity>
            </LastUsersBox>
          </RightSidebar>
        </BodySection>


        <HeaderContainer>
          <LeftSection>
            <Lstspan className="material-icons">cottage</Lstspan>
            <Header3>{HALLS_DASHBOARD.HEADER_CROS}</Header3>
          </LeftSection>

          <NavSection>
            <NavItem active>{HALLS_DASHBOARD.HALLS}</NavItem>
            <NavItem>{HALLS_DASHBOARD.BACK_DOOR}</NavItem>
            <NavItem>{HALLS_DASHBOARD.D_TIME}</NavItem>
          </NavSection>

          <RightSection>
            <ProfileBox>
              <ProfileImg src="https://i.pravatar.cc/100?img=15" alt="User" />
              <ProfileInfo>
                <Ltspan className="name">{HALLS_DASHBOARD.HENRY}</Ltspan>
                <Ltspan className="role">{HALLS_DASHBOARD.BUILD_MANAGER}</Ltspan>
              </ProfileInfo>
              <ArrowIcon className="material-icons">
                {HALLS_DASHBOARD.KEYBOARD}
              </ArrowIcon>
            </ProfileBox>
          </RightSection>
        </HeaderContainer>
      </Wrapper>
    </Page>
  );
};

export default ControlDashboard;
