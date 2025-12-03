import React from "react";
import {
  Page, BodySection, LeftContent, HeaderRow, ControlIcon, StyleHeader,
  TopRow, VenueCard, VenueImg, UserBar, UserPhoto, UserDetails, Name,
  IconGroup, SideImages, SmallPic, UsageBox, BoxHeader, InfoIcon,
  StyleHeader2, Chartimg, InfoRow, InfoCard, Label, Value, QRCode,
  DeviceRow, DeviceCard, Toggle, RightSidebar, Time, ThermoTitle,
  ThermoCircle, CenterTemp, UnitText, ModeRow, ModeBtn,
  LastUsersBox, UserActivity
} from "./Controlpage.style.jsx";

import conference_image from "../../assets/ControlPage_img/conference_image.jpg";
import control_img2 from "../../assets/ControlPage_img/control_img2.jpeg";
import control_img from "../../assets/ControlPage_img/control_img.jpeg";
import control_avtar from "../../assets/ControlPage_img/control_avtar.jpeg";

import { HALLS_DASHBOARD } from "../../enum/control_common.jsx";

import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { MdInfoOutline } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";


const HallsDashboard = () => {
  return (
    <Page> 
      <BodySection> 
        <LeftContent>
          <HeaderRow>
            <ControlIcon className="material-icons">bar_chart</ControlIcon>
            <StyleHeader>{HALLS_DASHBOARD.CONTROL}</StyleHeader>
          </HeaderRow>

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
                <StyleHeader2>{HALLS_DASHBOARD.USAGE_HISTORY}</StyleHeader2>
                <InfoIcon><MdInfoOutline size={18} /></InfoIcon>
              </BoxHeader>

              <Chartimg src={HALLS_DASHBOARD.CHART_URL} alt="chart" />
            </UsageBox>

          </TopRow>

         
          <InfoRow>

            <InfoCard>
              <Label>{HALLS_DASHBOARD.CURRENT_CONSUMPTION}</Label>
              <Value>{HALLS_DASHBOARD.CURRENT_VALUE}</Value>
            </InfoCard>

            <InfoCard>
              <Label>{HALLS_DASHBOARD.TEMPERATURE}</Label>
              <Value>{HALLS_DASHBOARD.TEMP_VALUE}</Value>
            </InfoCard>

            <InfoCard>
              <Label>{HALLS_DASHBOARD.SCAN_TEXT}</Label>
              <QRCode src={HALLS_DASHBOARD.SCAN_QR} />
            </InfoCard>

          </InfoRow>

          
          <DeviceRow>
            {HALLS_DASHBOARD.DEVICES.map((dev, i) => (
              <DeviceCard key={i} active={dev.active}>
                <Stspan className="dev-status">{dev.status}</Stspan>
                <StyledHead>{dev.title}</StyledHead>
                <Toggle active={dev.active} />
              </DeviceCard>
            ))}
          </DeviceRow>
        </LeftContent>

        
        <RightSidebar>

          <Time>{HALLS_DASHBOARD.TIME}</Time>
          <ThermoTitle>{HALLS_DASHBOARD.THERMOSTAT}</ThermoTitle>

         
          <ThermoCircle>
            <CenterTemp>60°</CenterTemp>
            <UnitText>Fahrenheit</UnitText>
          </ThermoCircle>

         
          <ModeRow>
            {HALLS_DASHBOARD.MODES.map((mode, i) => (
              <ModeBtn key={i}>{mode}</ModeBtn>
            ))}
          </ModeRow>

    
          <LastUsersBox>
            <StyleHeader2>{HALLS_DASHBOARD.LAST_USERS}</StyleHeader2>

            <UserActivity>
              <img src={HALLS_DASHBOARD.LAST_USER_IMG} />
              <div>
                <Styledpara>{HALLS_DASHBOARD.ACTIVITY_USER}</Styledpara>
                <Stspan>{HALLS_DASHBOARD.ACTIVITY_TEXT}</Stspan>
                <Stsmall>{HALLS_DASHBOARD.ACTIVITY_TIME}</Stsmall>
              </div>
            </UserActivity>
          </LastUsersBox>

        </RightSidebar>

      </BodySection>

     
    </Page>
  );
};

export default HallsDashboard;





// import React from "react";
// import {
//   Page,
//   HeaderRow,
//   ControlIcon,
//   ControlTitle,
//   TopRow,
//   VenueCard,
//   VenueImg,
//   UserBar,
//   UserPhoto,
//   UserDetails,
//   UserName,
//   IconGroup,
//   SmallImagesBox,
//   SmallImg,
//   UsageCard,
//   UsageHeader,
//   ChartImg
// } from "./Controlpage.style.jsx";

// import { FiPhoneCall } from "react-icons/fi";
// import { MdChatBubbleOutline, MdInfoOutline } from "react-icons/md";

// import conference_image from "../../assets/ControlPage_img/conference_image.jpg";
// import control_avtar from "../../assets/ControlPage_img/control_avtar.jpeg";
// import control_img2 from "../../assets/ControlPage_img/control_img2.jpeg";
// import control_img from "../../assets/ControlPage_img/control_img.jpeg";

// // import * as d3 from "d3";
// // import {select, selectAll} from "d3";
// // import {mean, median} from "d3-array";


// const ControlPage = () => {
//   return (
//     <Page>

      
//       <HeaderRow>
//         <ControlIcon className="material-icons">bar_chart</ControlIcon>
//         <ControlTitle>Control</ControlTitle>
//       </HeaderRow>

      
//       <TopRow>

//         <VenueCard>
//           <VenueImg src= {conference_image}/>

//           <UserBar>
//             <UserPhoto src={control_avtar} />
//             <UserDetails>
//               <UserName>Henry, Arthur</UserName>
//             </UserDetails>

//             <IconGroup>
//               <MdChatBubbleOutline size={22} color="#16a34a" />
//               <FiPhoneCall size={22} color="#16a34a" />
//             </IconGroup>
//           </UserBar>
//         </VenueCard>

       
//         <SmallImagesBox>
//           <SmallImg src= {control_img2} />
//           <SmallImg src={control_img} />
//         </SmallImagesBox>

       
//         <UsageCard>
//           <UsageHeader>
//             <h4>Usage History</h4>
//             <MdInfoOutline size={20} color="#777" />
//           </UsageHeader>

//           <ChartImg src="https://quickchart.io/chart?c={type:'bar',data:{labels:['2020','2021','2022','2023'],datasets:[{data:[20,40,60,30]}]}}" />
//         </UsageCard>

//       </TopRow>
//     </Page>
//   );
// };

// export default ControlPage;

