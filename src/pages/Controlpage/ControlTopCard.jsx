import styled from "styled-components";
import * as enums from "../../myEnum";
import { theme } from "../../theme/theme";
import { StyledParagraphBold } from "../../components/Styled/Typography.styled";

const Topcard2 = () => {
  return (
    <>
      <Topcard>
        <HeaderRow>
          <Stdiv style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <ControlIcon className="material-icons">
              {enums.CONTROL_ICON}
            </ControlIcon>
            <StyledParagraphBold>{enums.CONTROLHEADER}</StyledParagraphBold>
          </Stdiv>

          <StyledParagraphBold>
            {enums.CONTROLHEADER2}
            <Stylespan className="material-icons">{enums.DOWN_ICON}</Stylespan>
          </StyledParagraphBold>
        </HeaderRow>
      </Topcard>
    </>
  );
};
export default Topcard2;

const Topcard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 18px;
`;

const HeaderRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Stdiv = styled.div``;

const ControlIcon = styled.span`
  font-size: 26px;
  color: ${({theme})=>theme.color.black};;
`;

const Stylespan = styled.span`
  font-size: 24px;
  vertical-align: middle;
`;
