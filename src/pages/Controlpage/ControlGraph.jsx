import styled from "styled-components";
import * as enums from "../../enum";

const UsageBox = () => {
  const chartUrl =
    "https://image-charts.com/chart?cht=bvs&chs=300x200&chd=t:12,30,60,40&chl=2020|2021|2022|2023&chco=4A90E2";

  return (
    <>
      <UsageBox2>
        <BoxHeader>
          <StyleHeader2>{enums.HISTORY_HEADER}</StyleHeader2>
          <InfoIcon>
            <Styledspan className="material-symbols-rounded">
              {enums.INFO_ICON}
            </Styledspan>
          </InfoIcon>
        </BoxHeader>
        <Chartimg src={chartUrl} alt="chart" />
      </UsageBox2>
    </>
  );
};

export default UsageBox;

const Styledspan = styled.span`
  font-size: 20px;
`;

const UsageBox2 = styled.div`
  flex: 0 0 260px;
  background: #ffffffff;
  padding: 16px 16px 12px;
  border-radius: 16px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  margin-bottom: 0px;
  border: 1px solid #a3e2f9ff;
`;

const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyleHeader2 = styled.h3`
  font-size: 15px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
`;

const InfoIcon = styled.div`
  color: #6b7280;
  cursor: pointer;
`;

const Chartimg = styled.img`
  margin-top: 35px;
  width: 100%;
  border-radius: 10px;
  height: 220px;
`;
