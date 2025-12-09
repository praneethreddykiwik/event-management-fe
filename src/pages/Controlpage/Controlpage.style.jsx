import styled from "styled-components";


const sizes = {
  desktop: "1200px",
  laptop: "1024px",
  tablet: "768px",
  mobile: "576px",
};

const device = {
  desktop: `(max-width: ${sizes.desktop})`,
  laptop: `(max-width: ${sizes.laptop})`,
  tablet: `(max-width: ${sizes.tablet})`,
  mobile: `(max-width: ${sizes.mobile})`,
};

export const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #e9f5ff; /* light blue outside */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 1px 0;
  font-family: "Inter", sans-serif;
`;

export const Wrapper = styled.div`
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 2px;
  padding: 24px 24px 28px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.04);

  @media ${device.laptop} {
    padding: 20px;
    max-width: 1000px;
  }

  @media ${device.tablet} {
    width: 95%;
    padding: 18px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.04);
  }

  @media ${device.mobile} {
    width: 100%;
    padding: 14px;
    border-radius: 0;
  }
`;


export const Topcard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 18px;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

export const HeaderRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.tablet} {
    gap: 12px;
  }

  @media ${device.mobile} {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
`;

export const ControlIcon = styled.span`
  font-size: 26px;
  color: #222;

  @media ${device.mobile} {
    font-size: 22px;
  }
`;

export const StyleHeader = styled.h2`
  font-size: 22px;
  font-weight: 600;
  color: #111;
  margin: 0;

  @media ${device.tablet} {
    font-size: 20px;
  }

  @media ${device.mobile} {
    font-size: 18px;
  }
`;

export const Stdiv2 = styled.div``;
export const SSspan = styled.span``;

export const StyleRHeader2 = styled.h2`
  font-size: 15px;
  font-weight: 600;
  color: #111;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 4px;

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export const Stylespan = styled.span`
  font-size: 24px;
  vertical-align: middle;

  @media ${device.mobile} {
    font-size: 20px;
  }
`;

export const BodySection = styled.div`
  width: 100%;
  display: flex;
  gap: 26px;

  @media ${device.laptop} {
    gap: 20px;
  }

  @media ${device.tablet} {
    flex-direction: column;
    gap: 18px;
  }
`;

export const St2div = styled.div``;

export const LeftContent = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${device.tablet} {
    width: 100%;
    gap: 18px;
  }

  @media ${device.mobile} {
    gap: 12px;
  }
`;

export const RightSidebar = styled.div`
  flex: 0 0 200px;
  background: #191827;
  border-radius: 24px;
  padding: 28px 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 1px;
  width: 290px;

  @media ${device.laptop} {
    flex: 0 0 260px;
    padding: 22px 18px;
  }

  @media ${device.tablet} {
    width: 100%;
    flex: none;
    border-radius: 16px;
    padding: 20px;
  }

  @media ${device.mobile} {
    padding: 16px;
  }
`;

export const Stspan3 = styled.span``;

export const TopRow = styled.div`
  display: flex;
  gap: 18px;
  width: 100%;
  padding-left: 6px;

  @media ${device.mobile} {
    flex-direction: column;
    padding-left: 0;
    gap: 12px;
  }
`;

export const VenueCard = styled.div`
  width: 48%;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  height: 300px;

  @media ${device.laptop} {
    height: 280px;
  }

  @media ${device.mobile} {
    width: 100%;
    height: auto;
  }
`;

export const VenueImg = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;

  @media ${device.mobile} {
    height: 180px;
  }
`;

export const Stdiv = styled.div``;

export const UserBar = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;

  @media ${device.tablet} {
    padding: 14px;
  }

  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    padding: 12px;
  }
`;

export const UserPhoto = styled.img`
  width: 85px;
  height: 85px;
  border-radius: 2%;
  border: 4px solid #fff;
  position: absolute;
  top: 300px;

  @media ${device.laptop} {
    width: 75px;
    height: 75px;
    top: 260px;
  }

  @media ${device.tablet} {
    position: relative;
    top: 0;
    border-width: 3px;
    margin-right: 8px;
  }

  @media ${device.mobile} {
    width: 65px;
    height: 65px;
  }
`;

export const UserDetails = styled.div`
  flex: 1;
  margin-left: 10px;

  @media ${device.mobile} {
    margin-left: 0;
    width: 100%;
  }
`;

export const Name = styled.p`
  font-size: 17px;
  font-weight: 600;
  margin-left: 100px;
  margin-top: 5px;

  @media ${device.tablet} {
    margin-left: 80px;
    font-size: 16px;
  }

  @media ${device.mobile} {
    margin-left: 0;
    margin-top: 0;
    font-size: 15px;
  }
`;

export const IconGroup = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 8px;

  @media ${device.mobile} {
    margin-right: 0;
  }
`;

export const SideImages = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media ${device.tablet} {
    width: 100px;
  }

  @media ${device.mobile} {
    width: 100%;
    flex-direction: row;
    gap: 8px;
  }
`;

export const SmallPic = styled.img`
  width: 100%;
  height: 90px;
  border-radius: 12px;
  object-fit: cover;

  @media ${device.mobile} {
    height: 72px;
  }
`;

export const UsageBox = styled.div`
  flex: 0 260px;
  background: #ffffffff;
  padding: 16px 16px 12px;
  border-radius: 16px;
  box-shadow: 9px 10px 18px rgba(0, 0, 0, 0.06);
  margin-bottom: 0px;
  border: 1px solid #a3e2f9ff;

  @media ${device.tablet} {
    padding: 14px;
    border-radius: 12px;
  }

  @media ${device.mobile} {
    width: 100%;
    flex: none;
  }
`;

export const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyleHeader2 = styled.h3`
  font-size: 15px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export const InfoIcon = styled.div`
  opacity: 0.7;
`;

export const Chartimg = styled.img`
  margin-top: 35px;
  width: 100%;
  border-radius: 10px;
  height: 220px;

  @media ${device.tablet} {
    margin-top: 20px;
    height: 180px;
  }

  @media ${device.mobile} {
    margin-top: 12px;
    height: 160px;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding-left: 10px;
  width: 98%;
  padding: 18px;

  @media ${device.tablet} {
    flex-wrap: wrap;
    padding: 12px;
  }

  @media ${device.mobile} {
    flex-direction: column;
    padding-left: 8px;
    padding: 10px;
  }
`;

export const InfoCard = styled.div`
  flex: 1;
  background: #d5d5d5ff;
  border-radius: 16px;
  border: 1px solid #a3f3f6ff;
  padding: 14px 16px;
  min-height: 80px;
  display: flex;
  align-items: center;

  @media ${device.mobile} {
    width: 100%;
    min-height: 72px;
    padding: 12px;
  }
`;

export const Label = styled.p`
  font-size: 14px;
  color: #8a8a8a;
  margin: 0 0 8px;
  margin-bottom: 40px;

  @media ${device.mobile} {
    margin-bottom: 20px;
    font-size: 13px;
  }
`;

export const Label1 = styled.p`
  font-size: 14px;
  color: #8a8a8a;
  margin: 0 0 8px;

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

export const Label2 = styled.p`
  font-size: 14px;
  color: #8a8a8a;
  max-width: 170px;
  margin: 0;

  @media ${device.mobile} {
    max-width: 100%;
    font-size: 13px;
  }
`;

export const Value1 = styled.h3`
  font-size: 26px;
  margin: 0;
  font-weight: 600;
  margin-top: 30px;
  margin-left: -140px;

  @media ${device.tablet} {
    font-size: 22px;
    margin-left: -80px;
    margin-top: 18px;
  }

  @media ${device.mobile} {
    margin-left: 0;
    margin-top: 8px;
    font-size: 20px;
  }
`;

export const Value = styled.h3`
  font-size: 26px;
  margin: 0;
  font-weight: 600;

  @media ${device.mobile} {
    font-size: 20px;
  }
`;

export const InfoCardInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

export const QRCode = styled.img`
  width: 60px;
  height: 60px;

  @media ${device.mobile} {
    width: 48px;
    height: 48px;
  }
`;

export const TempToggle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;

  @media ${device.mobile} {
    align-items: flex-start;
  }
`;

export const TempPercent = styled.span`
  font-size: 11px;
  color: #9b9b9b;
`;

export const TempSwitch = styled.div`
  width: 40px;
  height: 20px;
  border-radius: 12px;
  background: #93e995ff;
  position: relative;

  .thumb {
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #ffffff;
    top: 1px;
    right: 1px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  }
`;

export const DeviceRow = styled.div`
  display: flex;
  gap: 12px;
  padding-left: 10px;

  @media ${device.tablet} {
    padding-left: 0;
  }

  @media ${device.mobile} {
    flex-direction: column;
    padding-left: 0;
  }
`;

export const DeviceCard = styled.div`
  flex: 1;
  background: ${({ $active }) => ($active ? "#c8f6da" : "#ffffff")};
  border-radius: 16px;
  padding: 16px 18px;
  height: 130px;
  border: 1px solid #60efb8ff;
  position: relative;

  @media ${device.tablet} {
    height: 120px;
    padding: 12px 14px;
  }

  @media ${device.mobile} {
    width: 100%;
    height: auto;
    padding: 12px;
  }
`;

export const Stspan2 = styled.span`
  font-size: 20px;
  opacity: 0.8;
  margin-bottom: 46px;
  margin-right: 140px;

  @media ${device.tablet} {
    margin-right: 80px;
    font-size: 18px;
  }

  @media ${device.mobile} {
    margin-bottom: 16px;
    margin-right: 0;
  }
`;

export const Toggle = styled.div`
  width: 44px;
  height: 22px;
  background: ${({ $active }) => ($active ? "#555" : "#bdbdbd")};
  border-radius: 20px;
  position: absolute;
  right: 15px;
  top: 14px;
  cursor: pointer;
  transition: 0.3s ease;

  .circle {
    width: 18px;
    height: 18px;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: ${({ $active }) => ($active ? "22px" : "2px")};
    transition: 0.3s ease;
  }

  @media ${device.mobile} {
    right: 12px;
    top: 12px;
  }
`;

export const Stspan = styled.span`
  font-size: 12px;
  color: #777;
  display: block;
  margin-top: 20px;

  @media ${device.mobile} {
    margin-top: 12px;
  }
`;

export const StyledHead = styled.h4`
  margin-top: 4px;
  font-size: 15px;
  font-weight: 600;

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export const Time = styled.h1`
  text-align: center;
  font-size: 30px;
  margin: 0;

  @media ${device.tablet} {
    display: none;
  }
`;


export const Divider = styled.div`
  width: 50px;
  height: 2px;
  background: #ffffff55;
  margin: -6px auto 8px auto;
  border-radius: 20px;

  @media ${device.tablet} {
    display: none;
  }
`;


export const ThermoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
    display: none;
  }
`;


export const Span = styled.span`
  font-size: 14px;
  font-weight: 500;

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

export const ThermoTitle = styled.p`
  font-size: 17px;
  opacity: 0.9;
  margin: 0;

  @media ${device.mobile} {
    font-size: 15px;
  }
`;

export const ThermoToggle = styled.div`
  width: 48px;
  height: 26px;
  border-radius: 20px;
  background: #3a3947;
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    width: 20px;
    height: 20px;
    background: #dcdcdc;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    right: 4px;
  }
`;

export const ThermoWrapper = styled.div`
  text-align: center;

  @media ${device.tablet} {
    display: none;
  }
`;

export const ThermoProgress = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 50%;
  background: conic-gradient(#ffffff 0deg 120deg, #727176 120deg 360deg);

  @media ${device.tablet} {
    display: none;
  }
`;

export const CenterTemp = styled.h1`
  font-size: 43px;
  margin: 14px 0 0;

  @media ${device.tablet} {
    display: none;
  }
`;

export const UnitText = styled.p`
  font-size: 16px;
  opacity: 0.8;

  @media ${device.tablet} {
    display: none;
  }
`;


export const ModeRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;

  @media ${device.mobile} {
    gap: 6px;
    flex-wrap: wrap;
  }
`;


export const ModeBtn = styled.button`
  width: 23%;
  padding: 10px 0;
  background: ${({ active }) => (active ? "#ffffff" : "#2d2c3c")};
  color: ${({ active }) => (active ? "#000" : "#fff")};
  border-radius: 14px;
  border: none;
  text-align: center;
  cursor: pointer;
  font-size: 13px;

  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;

  .material-icons {
    font-size: 20px;
  }

  @media ${device.tablet} {
    width: 31%;
  }

  @media ${device.mobile} {
    width: 48%;
    padding: 8px 0;
    font-size: 12px;
  }
`;

export const LastUsersBox = styled.div`
  width: 90%;
  background: #ffffff;
  padding: 18px 16px;
  border-radius: 18px;
  color: #000;
  margin-top: 20px;

  @media ${device.tablet} {
    display: none;
  }
`;


export const LastHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
`;

export const AvatarGroup = styled.div`
  display: flex;
`;

export const Avtimg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin-left: -5px;
  border: 2px solid #fff;

  @media ${device.mobile} {
    width: 26px;
    height: 26px;
  }
`;

export const UserActivity = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 14px;

  @media ${device.mobile} {
    gap: 8px;
    margin-top: 10px;
    flex-direction: column;
  }
`;

export const LastImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 5px;
  // object-fit: cover;

  @media ${device.mobile} {
    width: 60px;
    height: 60px;
  }
`;

export const LastInfo = styled.div``;

export const Header4 = styled.h4`
  margin: 0;
  font-size: 16px;
  margin-right: 130px;

  @media ${device.tablet} {
    margin-right: 80px;
    font-size: 15px;
  }

  @media ${device.mobile} {
    margin-right: 0;
    font-size: 14px;
  }
`;

export const Paragraph = styled.p`
  margin: 3px 0;
  color: #444;

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

export const SmallPara = styled.p`
  opacity: 0.7;
  margin: 0;
  margin-right: 100px;

  @media ${device.tablet} {
    margin-right: 60px;
  }

  @media ${device.mobile} {
    margin-right: 0;
  }
`;

export const HeaderContainer = styled.div`
  width: 98%;
  height: 70px;
  border: 1px solid #9cdeebff;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  box-sizing: border-box;
  margin: 26px auto 0;

  @media ${device.tablet} {
    height: 64px;
    padding: 0 18px;
  }

  @media ${device.mobile} {
    flex-direction: column;
    align-items: stretch;
    height: auto;
    padding: 12px;
    border-radius: 14px;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Lstspan = styled.span`
  font-size: 20px;
`;

export const Header3 = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0;

  @media ${device.mobile} {
    font-size: 15px;
  }
`;

export const NavSection = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;

  @media ${device.tablet} {
    gap: 20px;
  }

  @media ${device.mobile} {
    width: 100%;
    justify-content: space-between;
  }
`;

export const NavItem = styled.span`
  font-size: 15px;
  font-weight: ${({ active }) => (active ? "600" : "400")};
  color: ${({ active }) => (active ? "black" : "#888")};
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    display: ${({ active }) => (active ? "block" : "none")};
    width: 32px;
    height: 2px;
    background: #37c48a;
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 5px 12px;
  border-radius: 40px;
  border: 1px solid #b4b2b2ff;
  box-shadow: 12px 14px 24px rgba(0, 0, 0, 0.1);

  @media ${device.mobile} {
    padding: 6px 10px;
  }
`;

export const ProfileImg = styled.img`
  width: 39px;
  height: 39px;
  border-radius: 50%;

  @media ${device.mobile} {
    width: 34px;
    height: 34px;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 15px;
  margin-top: 2px;

  .name {
    font-size: 14px;
    font-weight: 600;
  }

  .role {
    font-size: 11px;
    color: #888;
  }

  @media ${device.mobile} {
    .name {
      font-size: 13px;
    }
    .role {
      font-size: 10px;
    }
  }
`;

export const Ltspan = styled.span``;

export const ArrowIcon = styled.span`
  font-size: 22px;
  color: #555;
  cursor: pointer;

  @media ${device.mobile} {
    font-size: 20px;
  }
`;
