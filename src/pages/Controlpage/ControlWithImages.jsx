import styled from "styled-components";
import * as enums from "../../myEnum";
import Conference_image from "../../assets/ControlPage_img/conference_image.jpg";
import Control_avtar from "../../assets/ControlPage_img/control_avtar.jpeg";
import control_img2 from "../../assets/ControlPage_img/control_img2.jpeg";
import control_img from "../../assets/ControlPage_img/control_img.jpeg";
import { theme } from "../../theme/theme";
import { StyledSemiHeading } from "../../components/Styled/Typography.styled";
import Avatar from "../../components/Avatar/Avatar";

const VenueCard = () => {
  const SIDE_IMAGES = [control_img, control_img2];

  return (
    <VenueWrapper>
      <VenueCard2>
        <VenueImg src={Conference_image} alt="Conference Hall" />

        <WhiteCard>
          <Avatar
            name={`${enums.USER_NAME}`}
            src={Control_avtar}
            alt="User"
            displayInitials={true}
          />
          <StyledSemiHeading>{enums.USER_NAME}</StyledSemiHeading>

          <Icons>
            <Span1
              className="material-icons-outlined"
              style={{ fontSize: "22px" }}
            >
              {enums.CHAT_ICON}
            </Span1>
            <Span2
              className="material-icons-outlined"
              style={{ fontSize: "20px" }}
            >
              {enums.CALL_ICON}
            </Span2>
          </Icons>
        </WhiteCard>
      </VenueCard2>

      <SideImages>
        {SIDE_IMAGES.map((img, i) => (
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
`;

const VenueCard2 = styled.div`
  position: relative;
  flex: 1;
  background: ${theme.light.colors.white};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
`;

const VenueImg = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

const WhiteCard = styled.div`
  background: ${theme.light.colors.white};
  padding: 22px 20px 20px 120px;
  display: flex;
  align-items: center;
  gap: 16px;

  border-radius: 0 0 16px 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
`;
const Span1 = styled.span``;

const Span2 = styled.span``;

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
`;

const SmallPic = styled.img`
  width: 100%;
  height: 100px;
  border-radius: 5px;
  object-fit: cover;
`;
