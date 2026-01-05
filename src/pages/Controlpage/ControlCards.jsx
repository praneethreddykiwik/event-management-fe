import styled from "styled-components";
import { HALLS_DASHBOARD } from "../../enum/control_common";

const CardsContainer = () => {
  return (
    <>
      <InfoRow>
        <InfoCard>
          <CardColumn>
            <Label>{HALLS_DASHBOARD.CURRENT}</Label>
            <Value1>{HALLS_DASHBOARD.VALUE1}</Value1>
          </CardColumn>
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
    </>
  );
};
export default CardsContainer;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding-left: 10px;
  width: 100%;
  padding: 18px 10px 0 0px;
  height: 15%;
`;

const InfoCard = styled.div`
  flex: 1;
  background: #d5d5d5ff;
  border-radius: 9px;
  border: 1px solid #85bbbcff;
  padding: 14px 16px;
  display: flex;
  align-items: center;
`;

const CardColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.p`
  font-size: 15px;
  color: #8a8a8a;
  font-weight: 500;
`;

const Label1 = styled.p`
  font-size: 15px;
  color: #8a8a8a;
  font-weight: 500;
`;

const Label2 = styled.p`
  font-size: 14px;
  color: #8a8a8a;
  max-width: 170px;
  margin: 0;
`;

const Value1 = styled.h3`
  font-size: 26px;
  margin: 0;
  font-weight: 600;
  margin-bottom: 20px;
  margin-left: -60px;
`;

const Value = styled.h3`
  font-size: 26px;
  margin: 0;
  font-weight: 600;
`;

const Stdiv2 = styled.div``;

const SSspan = styled.span``;

const InfoCardInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const QRCode = styled.img`
  width: 60px;
  height: 60px;
`;

const TempToggle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
`;

const TempPercent = styled.span`
  font-size: 11px;
  color: #9b9b9b;
`;

const TempSwitch = styled.div`
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
