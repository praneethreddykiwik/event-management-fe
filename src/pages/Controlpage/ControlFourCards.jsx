import styled from "styled-components";
import * as enums from "../../myEnum";
import { theme } from "../../theme/theme";
import {
  StyledParagraphSmallVisible,
  StyledMediumHeading,
  StyledSemiHeading,
} from "../../components/Styled/Typography.styled";

const FourCardsContainer = () => {
  const devices = [
    { title: "Door Lock", status: "Locked", active: true },
    { title: "Projector", status: "Inactive", active: false },
    { title: "Camera", status: "Active", active: true },
    { title: "AC", status: "Powersavingmode", active: false },
  ];

  return (
    <DeviceRow>
      {devices.map((dev, i) => (
        <DeviceCard key={i} $active={dev.active}>
          <TopRow>
            <Span className="material-icons">{enums.WIFI_ICON}</Span>

            <Toggle $active={dev.active}>
              <Circle />
            </Toggle>
          </TopRow>

          <StyledParagraphSmallVisible left>
            {dev.status}
          </StyledParagraphSmallVisible>
          <StyledSemiHeading left>{dev.title}</StyledSemiHeading>
        </DeviceCard>
      ))}
    </DeviceRow>
  );
};

export default FourCardsContainer;

const DeviceRow = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  padding-top: 20px;
`;

const DeviceCard = styled.div`
  flex: 1;
  background: ${({ $active }) => ($active ? "#ccf5c8" : "#ffffff")};
  border-radius: 10px;
  padding: 16px;
  border: 2px solid #7cd69dff;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Toggle = styled.div`
  width: 38px;
  height: 20px;
  border-radius: 20px;
  background: ${theme.light.colors.white};
  align-items: center;
`;

const Circle = styled.div`
  width: 16px;
  height: 16px;
  background: ${theme.light.colors.white};
  border-radius: 50%;
`;

const Span = styled.span``;
