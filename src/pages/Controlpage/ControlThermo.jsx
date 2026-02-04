import styled from "styled-components";
import * as enums from "../../myEnum";
import {StyledHeadingBig} from "../../components/Styled/Typography.styled";

const Thermo = () => {
  return (
    <ThermoWrapper>
      <ThermoProgress />
      <CenterTemp>{enums.CENT_VALUE}</CenterTemp>
      <UnitText>{enums.UNIT_VALUE}</UnitText>
    </ThermoWrapper>
  );
};

export default Thermo;

const ThermoWrapper = styled.div`
  text-align: center;
`;

const ThermoProgress = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 50%;
  background: conic-gradient(#ffffff 0deg 120deg, #727176 120deg 360deg);
`;

const CenterTemp = styled(StyledHeadingBig)`
  color: #eeee;
  margin: 14px 0 0;
`;

const UnitText = styled.p`
  color: #eeee;
  opacity: 0.8;
`;
