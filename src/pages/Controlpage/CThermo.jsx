import React from "react";
import {
  RightSidebar,
  Time,
  ThermoTitle,
  ThermoCircle,
  CenterTemp,
  UnitText,
  ModeRow,
  ModeBtn,
  LastUsersBox,
  UserActivity,
  StyleHeader2
} from "./RightSidebar.style";

import doorimg from "../../assets/ControlPage_img/doorimg.jpeg";
import { Styledb } from "./Controlpage.style";

export default function RightCard() {
  return (
    <RightSidebar>
      
      <Time>05:06 AM</Time>
      <ThermoTitle>Thermostat</ThermoTitle>

      
      <ThermoCircle>
        <CenterTemp>60°</CenterTemp>
        <UnitText>Fahrenheit</UnitText>
      </ThermoCircle>

      
      <ModeRow>
        {["Hot", "Eco", "Fan", "Cold"].map((mode, i) => (
          <ModeBtn key={i}>{mode}</ModeBtn>
        ))}
      </ModeRow>

      
      <LastUsersBox>
        <StyleHeader2>Last Users</StyleHeader2>

        <UserActivity>
          <Lastimg
            src={doorimg} alt="User"/>
          <Styledb>
            <p>Halls</p>
            <span>Back Door was Closed</span>
            <br />
            <small>02:00 AM</small>
          </Styledb>
        </UserActivity>
      </LastUsersBox>
    </RightSidebar>
  );
}
