import React from "react";
import styled from "styled-components";


const HallsDashboard = () => {
  return (
    <Page>
      <BodySection>
        <LeftContent>
          
          <HeaderRow>
            <StyleHeader>Control</StyleHeader>
          </HeaderRow>

          
          <TopRow>
            <VenueCard>
              <VenueImg src={""} alt=""/>
              <UserBar>
                <UserPhoto src="https://i.pravatar.cc/60" />
                <UserDetails>
                  <Name>Henry, Arthur</Name>
                </UserDetails>
                <IconGroup>
                  <FiPhoneCall size={20} />
                  <HiOutlineVideoCamera size={22} />
                </IconGroup>
              </UserBar>
            </VenueCard>

            <SideImages>
              <SmallPic src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf" />
              <SmallPic src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac" />
              <SmallPic src="https://images.unsplash.com/photo-1543248939-ff40856f65d4" />
            </SideImages>

           
            <UsageBox>
              <BoxHeader>
                <StyleHeader2>Usage History</StyleHeader2> <BsThreeDots />
              </BoxHeader>
              <Chart>
                <Chartimg
                  src="https://quickchart.io/chart?c={type:'bar',data:{labels:['2020','2021','2022','2023'],datasets:[{data:[20,40,60,30]}]}}"
                  alt="chart"
                />
              </Chart>
            </UsageBox>
          </TopRow>

          <InfoRow>
            <InfoCard>
              <Label>Current Consumption</Label>
              <Value>1kWh</Value>
            </InfoCard>

            <InfoCard>
              <Label>Temperature</Label>
              <Value>65° F</Value>
            </InfoCard>

            <InfoCard>
              <Label>Scan to activate device</Label>
              <QRCode src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=device" />
            </InfoCard>
          </InfoRow>

          <DeviceRow>
            <DeviceCard active>
              <StyleHeader2>Door Lock</StyleHeader2>
              <Stspan>Locked</Stspan>
              <Toggle />
            </DeviceCard>

            <DeviceCard>
              <StyleHeader2>Projector</StyleHeader2>
              <Stspan>Inactive</Stspan>
              <Toggle />
            </DeviceCard>

            <DeviceCard active>
              <StyleHeader2>Camera</StyleHeader2>
              <Stspan>Active</Stspan>
              <Toggle />
            </DeviceCard>

            <DeviceCard>
              <StyleHeader2>AC</StyleHeader2>
              <Stspan>Power Saving</Stspan>
              <Toggle />
            </DeviceCard>
          </DeviceRow>
        </LeftContent>

        
        <RightSidebar>
          <Time>05:06 AM</Time>

          <ThermoTitle>Thermostat</ThermoTitle>

          <ThermoCircle>
            <CenterTemp>60°</CenterTemp>
            <Small>Fahrenheit</Small>
          </ThermoCircle>

         
          <ModeRow>
            <ModeBtn>Hot</ModeBtn>
            <ModeBtn>Eco</ModeBtn>
            <ModeBtn>Fan</ModeBtn>
            <ModeBtn>Cold</ModeBtn>
          </ModeRow>

          
          <LastUsersBox>
            <StyleHeader2>Last Users</StyleHeader2>
            <UserActivity>
              <img src="https://i.pravatar.cc/80" />
              <div>
                <p>Halls</p>
                <Stspan>Back Door was Closed</Stspan>
                <small>02:00 AM</small>
              </div>
            </UserActivity>
          </LastUsersBox>
        </RightSidebar>
      </BodySection>

      
      <Footer>
        <Tab>Crosteck Center</Tab>
        <Tab active>Halls</Tab>
        <Tab>Device</Tab>
        <Tab>Analytics</Tab>

        <Manager>
          <UserPhoto src="https://i.pravatar.cc/60" />
          <Stspan>Henry, Arthur</Stspan>
        </Manager>
      </Footer>
    </Page>
  );
};

export default HallsDashboard;


const Stspan = styled.span``;

const StyleHeader2 = styled.h4``;

const StyleHeader = styled.h3``;

 const Page = styled.div`
  width: 100%;
  background: #eef7fb;
  min-height: 100vh;
`;


 const TopNav = styled.div`
  height: 65px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`;

 const Logo = styled.div`
  font-size: 26px;
  font-weight: 700;
  color: #0aa76c;
`;

 const NavLinks = styled.div`
  display: flex;
  gap: 25px;

  a {
    font-size: 15px;
    cursor: pointer;
  }
`;
 const RightIcons = styled.div`
  display: flex;
  gap: 22px;
  align-items: center;
`;

 const UserImg = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
`;


 const BodySection = styled.div`
  display: flex;
  padding: 30px 40px;
  gap: 25px;
`;

 const LeftContent = styled.div`
  width: 70%;
`;

 const HeaderRow = styled.div`
  margin-bottom: 18px;

  h3 {
    font-size: 20px;
  }
`;


 const TopRow = styled.div`
  display: flex;
  gap: 20px;
`;

 const VenueCard = styled.div`
  width: 48%;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
`;

 const VenueImg = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

 const UserBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 15px;
`;

 const UserPhoto = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;

 const UserDetails = styled.div`
  flex: 1;
  margin-left: 10px;
`;

const Name = styled.h4`
  margin: 0;
  font-weight: 600;
`;

 const IconGroup = styled.div`
  display: flex;
  gap: 15px;
  font-size: 20px;
`;


 const SideImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 15%;
`;

 const SmallPic = styled.img`
  width: 100%;
  height: 58px;
  border-radius: 8px;
  object-fit: cover;
`;

 const UsageBox = styled.div`
  width: 30%;
  background: #fff;
  border-radius: 12px;
  padding: 15px;
`;

 const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

 const Chart = styled.div`
  img {
    width: 100%;
  }
`;

 const InfoRow = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 25px;
`;

 const InfoCard = styled.div`
  background: #fff;
  width: 32%;
  padding: 20px;
  border-radius: 12px;
`;

 const Label = styled.p`
  margin: 0;
  opacity: 0.7;
`;

 const Value = styled.h3`
  margin-top: 10px;
`;

 const QRCode = styled.img`
  width: 70px;
  margin-top: 10px;
`;


 const DeviceRow = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 22px;
`;

 const DeviceCard = styled.div`
  background: ${(p) => (p.active ? "#d9f5d9" : "#fff")};
  padding: 20px;
  width: 24%;
  height: 120px;
  border-radius: 12px;

  StyledHeader2 {
    margin: 0;
  }
`;

 const Toggle = styled.div`
  width: 45px;
  height: 22px;
  background: #cfcfcf;
  border-radius: 20px;
  margin-top: 20px;
`;

 const RightSidebar = styled.div`
  width: 30%;
  background: #1d1b30;
  border-radius: 18px;
  padding: 25px;
  color: white;
`;

 const Time = styled.h2`
  font-size: 28px;
`;

 const ThermoTitle = styled.p`
  margin-top: 5px;
  opacity: 0.8;
`;

 const ThermoCircle = styled.div`
  margin-top: 15px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 8px solid #757575;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

 const CenterTemp = styled.h1`
  margin: 0;
  font-size: 45px;
`;

 const Small = styled.p`
  margin: 0;
  opacity: 0.6;
`;

 const ModeRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;

 const ModeBtn = styled.button`
  background: #fff;
  color: #333;
  border: none;
  padding: 8px 20px;
  border-radius: 10px;
`;


 const LastUsersBox = styled.div`
  margin-top: 30px;
  background: #2a273f;
  padding: 15px;
  border-radius: 12px;

  h4 {
    margin-top: 0;
  }
`;

 const UserActivity = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;

  img {
    width: 55px;
    border-radius: 8px;
  }

  p {
    margin: 0;
    font-weight: 600;
  }
`;

 const Footer = styled.div`
  background: #fff;
  padding: 15px 40px;
  margin-top: 20px;
  display: flex;
  gap: 30px;
  align-items: center;
`;

 const Tab = styled.div`
  font-weight: ${(p) => (p.active ? "700" : "400")};
  border-bottom: ${(p) => (p.active ? "2px solid #0aa76c" : "none")};
  padding-bottom: 6px;
  cursor: pointer;
`;

 const Manager = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 10px;
`;
