
import styled from "styled-components";
import { HALLS_DASHBOARD } from "../../enum/control_common"; 

const  Topcard2 = () =>{
    return (
         <>
         <Topcard>
                   <HeaderRow>
                     <Stdiv style={{ display: "flex", alignItems: "center", gap: 10 }}>
                       <ControlIcon className="material-icons">{HALLS_DASHBOARD.CONTROL_ICON}</ControlIcon>
                       <StyleHeader>{HALLS_DASHBOARD.CONTROLHEADER}</StyleHeader>
                     </Stdiv>
         
                     <StyleRHeader2>
                       {HALLS_DASHBOARD.CONTROLHEADER2}
                       <Stylespan className="material-icons">{HALLS_DASHBOARD.DOWN_ICON}</Stylespan>
                     </StyleRHeader2>
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
  color: #222;

  
`;

 const StyleHeader = styled.h2`
  font-size: 22px;
  font-weight: 600;
  color: #111;
  margin: 0;


`;

 const StyleRHeader2 = styled.h2`
  font-size: 15px;
  font-weight: 600;
  color: #111;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 4px;


`;

 const Stylespan = styled.span`
  font-size: 24px;
  vertical-align: middle;

`;
