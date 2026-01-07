import styled from "styled-components";
import { HALLS_DASHBOARD } from "../../enum/control_common";

const FourCardsContainer = () => {
  return (
    <DeviceRow>
      {HALLS_DASHBOARD.DEVICES.map((dev, i) => (
        <DeviceCard key={i} $active={dev.active}>
          <TopRow>
            <Icon>
              <Span className="material-icons">
                {HALLS_DASHBOARD.WIFI_ICON}
              </Span>
            </Icon>

            <Toggle $active={dev.active}>
              <Circle />
            </Toggle>
          </TopRow>

          <Status>{dev.status}</Status>
          <Title>{dev.title}</Title>
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
  gap: 8px;
`;

const DeviceCard = styled.div`
  flex: 1;
  height: 150px;
  background: ${({ $active }) => ($active ? "#ccf5c8" : "#ffffff")};
  border-radius: 10px;
  padding: 16px;
  border: 2px solid #7cd69dff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.div`
  span {
    font-size: 20px;
    color: #111827;
  }
`;

const Toggle = styled.div`
  width: 38px;
  height: 20px;
  border-radius: 20px;
  background: ${({ $active }) => ($active ? "#374151" : "#c4c4c4")};
  display: flex;
  align-items: center;
  padding: 2px;
  justify-content: ${({ $active }) => ($active ? "flex-end" : "flex-start")};
`;

const Circle = styled.div`
  width: 16px;
  height: 16px;
  background: #ffffff;
  border-radius: 50%;
`;

const Status = styled.span`
  font-size: 13px;
  color: #9ca3af;
  margin-right: 60px;
  margin-top: 50px;
`;

const Title = styled.h4`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 10px;
  margin-right: 36px;
`;

const Span = styled.span``;
