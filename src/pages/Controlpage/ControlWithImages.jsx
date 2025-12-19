
import styled from "styled-components";
import { HALLS_DASHBOARD } from "../../enum/control_common";
import Conference_image from "../../assets/ControlPage_img/conference_image.jpg";
import Control_avtar from "../../assets/ControlPage_img/control_avtar.jpeg";

const VenueCard = () => {
  return (
    <VenueWrapper>
      <VenueCard2>
        <VenueImg src={Conference_image} alt="Conference Hall" />

        <Avatar src={Control_avtar} alt="User" />

        <WhiteCard>
          <UserName>{HALLS_DASHBOARD.USER_NAME}</UserName>

          <Icons>
            <Span1 className="material-icons-outlined" style={{ fontSize: "22px" }}>{HALLS_DASHBOARD.CHAT_ICON}</Span1>
            <Span2 className="material-icons-outlined" style={{ fontSize: "20px" }}>{HALLS_DASHBOARD.CALL_ICON}</Span2>
          </Icons>
        </WhiteCard>
      </VenueCard2>

      <SideImages>
        {HALLS_DASHBOARD.SIDE_IMAGES.map((img, i) => (
          <SmallPic key={i} src={img} alt={`side-${i}`} />
        ))}
      </SideImages>
    </VenueWrapper>
  );
};
export default VenueCard;


const VenueWrapper = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;


const VenueCard2 = styled.div`
  position: relative;
  flex: 1;
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
`;


const VenueImg = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;

  @media (max-width: 576px) {
    height: 200px;
  }
`;


const Avatar = styled.img`
  width: 85px;
  height: 85px;
  
  object-fit: cover;

  position: absolute;
  left: 20px;
  bottom: 30px; /* THIS makes avatar overlap */

  border: 4px solid #ffffff;
  background: #fff;
`;

const WhiteCard = styled.div`
  background: #ffffff;
  padding: 22px 20px 20px 96px; /* left padding to fit avatar */
  display: flex;
  align-items: center;
  gap: 16px;

  border-radius: 0 0 16px 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
`;
const Span1 = styled.span``;

const Span2 = styled.span``;

const UserName = styled.h3`
  margin: 10px;
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  flex: 1;
  
`;

const Icons = styled.div`
  display: flex;
  gap: 16px;
  color: #22c55e;
  cursor: pointer;
`;


const SideImages = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 576px) {
    width: 100%;
    flex-direction: row;
  }
`;

const SmallPic = styled.img`
  width: 100%;
  height: 100px;
  border-radius: 5px;
  object-fit: cover;

  @media (max-width: 576px) {
    height: 80px;
  }
`;
