import styled from "styled-components";
import * as enums from "../../myEnum";
import {
  StyledSemiHeading,
  StyledParagraphSmallVisible,
  StyledParagraphGray,
  StyledParagraphSmallGray,
} from "../../components/Styled/Typography.styled";

const CardsContainer = () => {
  return (
    <>
      <InfoRow>
        <InfoCard>
          <StyledParagraphGray>{enums.CURRENT}</StyledParagraphGray>
          <StyledSemiHeading>{enums.VALUE1}</StyledSemiHeading>
        </InfoCard>

        <InfoCard>
          <InfoCardInner>
            <Stdiv2>
              <StyledParagraphGray>{enums.TEMPERATURE}</StyledParagraphGray>
              <StyledSemiHeading>{enums.DEGREE}</StyledSemiHeading>
            </Stdiv2>

            <TempToggle>
              <StyledParagraphSmallVisible>
                {enums.DEGREE}
              </StyledParagraphSmallVisible>
              <TempSwitch>
                <SSspan className="thumb" />
              </TempSwitch>
            </TempToggle>
          </InfoCardInner>
        </InfoCard>

        <InfoCard>
          <InfoCardInner>
            <StyledParagraphSmallGray>{enums.SCAN}</StyledParagraphSmallGray>
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
  gap: 16px;
  height: 15%;
`;

const InfoCard = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.colors["gray-disabled"]};
  border-radius: 9px;
  border: 1px solid #85bbbcff;
  padding: 14px 16px;
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
