import React from "react";
import styled from "styled-components";

import { PAYMENT_PAGE } from "../../enum/Payment.common";
import { rows } from "./Payment.helper";

const OrderSummary = () => {
  return (
    <>
      <BadgeIcon>
        <Stylespan className="material-icons" style={{ fontSize: "18px", color: "#0d0d0dff" }}>
          {PAYMENT_PAGE.TICK_ICON}
        </Stylespan>
      </BadgeIcon>

      <StyledHeading>{PAYMENT_PAGE.SATISFACTION_TITLE}</StyledHeading>
      <StyledPara>{PAYMENT_PAGE.SATISFACTION_PARA}</StyledPara>
     
    <Card>

      <Summary>
        <SummaryTitle>{PAYMENT_PAGE.SUMMARY_TEXT}</SummaryTitle>

        <StRow>
          <Stylespan>{PAYMENT_PAGE.SUMMARY_ITEMS}</Stylespan>
        </StRow>



        <InsuranceRow>
          <Stylespan3>{PAYMENT_PAGE.INSURANCE_TEXT}</Stylespan3>
          <InfoButton>
            <Stylespan5 className="material-icons" style={{ fontSize: "18px" }}>{PAYMENT_PAGE.INFO_ICON}</Stylespan5>
          </InfoButton>
          <ToggleSwitch />
        </InsuranceRow>

        <Divider2 />

        {rows.map((item, index) => (
          <StRow key={index}>
            <Stylespan>{item.label}</Stylespan>
            <Stylespan>{item.value}</Stylespan>
          </StRow>
        ))}

        <Divider2 />

        <TotalRow>
          <Stylespan2>{PAYMENT_PAGE.TOTAL}</Stylespan2>
          <Stylespan4>{PAYMENT_PAGE.TOTAL_VALUE}</Stylespan4>
        </TotalRow>
      </Summary>
      </Card>
     
      
    </>
  );
};

export default OrderSummary;

const Card = styled.div`
  width: 102.3%;
  border: 1px solid #e5e7eb;
  padding: 30px;
  border-radius: 0px;
  background: #ffffff;
  margin-left: -35px;
  padding-bottom: 10px;
  margin-top: 4px;
`;

const BadgeIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(16, 185, 129, 0.12);
  border-radius: 999px;
  padding: 6px;
  color: #16a34a;
`;

const Divider2 = styled.hr`
  border: none;
  border-top: 1px solid #a0a0a0ff;
  margin: 14px 42px;
 

`;

const Stylespan = styled.span`
   
`;

const Stylespan5 = styled.span`
  color: #474444ff;
  font-size: 13px;
`;

const Stylespan4 = styled.span`
  font-size: 16px;
  color: #2e1d5aff;
  font-weight: 600;
 
 `;

const Stylespan2 = styled.span`
  color: #6dc18cff;
  font-weight: 600;
  
`;

const Stylespan3 = styled.span`
  font-size: 14px;
  color: #111827;
  font-weight: 500;
 
`;

const StyledHeading = styled.h3`
  text-align: center;
  color: #4a2c95ff;
  margin: 0 0 6px 0;
  font-weight: 600;
  font-size: 18px;
`;

const StyledPara = styled.p`
  text-align: center;
  color: #191c21ff;
  margin: 0 0 14px 0;
  font-size: 16px;
  font-weight: 500;
`;

const Divider = styled.hr`
  border: transparent;
  border-top: 1px solid #bdc0c4ff;
  margin: 4px 0 14px 0;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.06);
`;

const Summary = styled.div``;

const SummaryTitle = styled.h4`
  font-weight: 600;
  margin: 0 0 1px 50px;
  margin-right: 269px;
  color: #111827;
`;

const StRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 50px;
  color: #697991ff;
  font-size: 14px;
`;

const InsuranceRow = styled(StRow)`
  align-items: center;
  gap: 12px;
`;

const TotalRow = styled(StRow)`
  span:last-child {
    color: #4a2c95ff;
    font-weight: 500;
  }
`;

const InfoButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;

  &:hover {
    // background: rgba(229, 231, 240, 0.03);
  }
`;

const ToggleSwitch = styled.div`
  width: 44px;
  height: 23px;
  border-radius: 20px;
  background: #696d71ff;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 4px;
    top: 2px;
    width: 18px;
    height: 18px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
  }
`; 