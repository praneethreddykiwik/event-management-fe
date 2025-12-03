import styled from "styled-components";


export const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f0f8ff;
  padding-bottom: 40px;
`;

export const BodySection = styled.div`
  display: flex;
  gap: 30px;
  padding: 25px 40px;
`;

// export const StyledHeading = styled.h4``;

export const LeftContent = styled.div`
  width: 70%;
`;

// export const Styledst = styled.span``;


export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
`;

export const ControlIcon = styled.span`
  font-size: 22px;
  color: #111;
`;

export const StyleHeader = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
`;


export const TopRow = styled.div`
  display: flex;
  gap: 20px;
`;


export const VenueCard = styled.div`
  width: 52%;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
`;

export const VenueImg = styled.img`
  width: 100%;
  height: 190px;
  object-fit: cover;
`;

export const UserBar = styled.div`
  display: flex;
  align-items: center;
  padding: 14px;
  gap: 12px;
`;

export const UserPhoto = styled.img`
  width: 86px;
  height: 66px;
  border-radius: 10%;
`;

export const UserDetails = styled.div`
  flex: 1;
`;

export const Name = styled.h4`
  margin: 0;
  font-weight: 600;
  font-size: 14px;
`;

export const IconGroup = styled.div`
  display: flex;
  gap: 12px;
`;


export const SideImages = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SmallPic = styled.img`
  width: 100%;
  height: 40%;
  border-radius: 10px;
  object-fit: cover;
`;

export const UsageBox = styled.div`
  width: 28%;
  background: #fff;
  border-radius: 12px;
  padding: 14px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

export const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const InfoIcon = styled.div`
  opacity: 0.7;
  cursor: pointer;
`;

export const StyleHeader2 = styled.h4`
  margin: 0;
  font-weight: 600;
  font-size: 15px;
`;

export const Chartimg = styled.img`
  width: 100%;
`;


export const InfoRow = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 22px;
`;

export const InfoCard = styled.div`
  width: 32%;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.06);
`;

export const Label = styled.p`
  opacity: 0.6;
  margin: 0;
`;

export const Value = styled.h3`
  margin-top: 10px;
  font-size: 22px;
`;

export const QRCode = styled.img`
  width: 80px;
  margin-top: 10px;
`;



export const DeviceRow = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 18px;
`;

export const DeviceCard = styled.div`
  width: 24%;
  height: 115px;
  padding: 18px;
  border-radius: 12px;
  background: ${(p) => (p.active ? "#d8f8d8" : "#fff")};
  box-shadow: 0 3px 10px rgba(0,0,0,0.05);

  .dev-status {
    font-size: 12px;
    opacity: 0.6;
  }

  StyledHead {
    margin: 6px 0 0 0;
    font-size: 16px;
  }
`;

// export const Stspan = styled.span`
//  font-size: 14px;
//   color: #fff;
// `;

export const StyledHead = styled.h4``;

export const Toggle = styled.div`
  margin-top: 18px;
  width: 45px;
  height: 22px;
  border-radius: 20px;
  background: ${(p) => (p.active ? "#5ed75f" : "#ccc")};
`;


export const RightSidebar = styled.div`
  width: 30%;
  background: #1d1b30;
  color: white;
  padding: 25px;
  border-radius: 18px;
`;

export const Time = styled.h2`
  font-size: 28px;
  margin: 0;
`;

export const ThermoTitle = styled.p`
  margin: 3px 0 10px 0;
  opacity: 0.8;
`;


export const ThermoCircle = styled.div`
  width: 200px;
  height: 200px;
  margin: auto;
  border-radius: 50%;
  border: 8px solid #6f6f7f;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CenterTemp = styled.h1`
  margin: 0;
  font-size: 46px;
`;

export const UnitText = styled.small`
  opacity: 0.7;
`;

export const ModeRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;

export const ModeBtn = styled.button`
  background: #2d2b41;
  color: white;
  border: none;
  padding: 9px 20px;
  border-radius: 10px;
`;


export const LastUsersBox = styled.div`
  margin-top: 25px;
  background: #26233c;
  padding: 15px;
  border-radius: 12px;
`;

export const UserActivity = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;

  img {
    width: 65px;
    border-radius: 8px;
  }

  Styledpara {
    margin: 0;
    font-weight: 600;
  }

  Stspan {
    font-size: 12px;
    opacity: 0.8;
  }
`;

export const Styledpara = styled.p``;

export const Styledb = styled.div``;

export const Stsmall = styled.small``;

// import styled from "styled-components";

// export const Page = styled.div`
//   padding: 30px 40px;
// `;

// export const HeaderRow = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   margin-bottom: 20px;
// `;

// export const ControlIcon = styled.span`
//   font-size: 22px;
//   color: #111;
// `;

// export const ControlTitle = styled.h2`
//   font-size: 20px;
//   font-weight: 600;
//   margin: 0;
// `;

// export const TopRow = styled.div`
//   display: flex;
//   gap: 20px;
//   margin-top: 20px;
// `;

// export const VenueCard = styled.div`
//   width: 440px;
//   background: #fff;
//   border-radius: 16px;
//   overflow: hidden;
//   box-shadow: 0 4px 20px rgba(0,0,0,0.08);
// `;

// export const VenueImg = styled.img`
//   width: 100%;
//   height: 200px;
//   object-fit: cover;
// `;

// export const UserBar = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 12px;
//   padding: 14px;
// `;

// export const UserPhoto = styled.img`
//   width: 46px;
//   height: 46px;
//   border-radius: 50%;
// `;

// export const UserDetails = styled.div`
//   flex: 1;
// `;

// export const UserName = styled.h4`
//   margin: 0;
//   font-size: 15px;
//   font-weight: 600;
// `;

// export const IconGroup = styled.div`
//   display: flex;
//   gap: 10px;
// `;

// export const SmallImagesBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 12px;
// `;

// export const SmallImg = styled.img`
//   width: 130px;
//   height: 62px;
//   border-radius: 12px;
//   object-fit: cover;
// `;

// export const UsageCard = styled.div`
//   width: 260px;
//   background: #fff;
//   border-radius: 12px;
//   padding: 14px;
//   box-shadow: 0 4px 20px rgba(0,0,0,0.08);
// `;

// export const UsageHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   h4 {
//     margin: 0;
//     font-size: 15px;
//     font-weight: 600;
//   }
// `;

// export const ChartImg = styled.img`
//   width: 100%;
//   margin-top: 10px;
// `;
