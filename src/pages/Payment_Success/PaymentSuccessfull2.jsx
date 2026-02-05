import React from "react";
import styled from "styled-components";
import { PAYMENT_PAGE } from "../../myEnum/Payment.common";

const PaymentSuccessfull2 = () => {
  return (
    <>
      <VenueCard>
        <VenueTitle>{PAYMENT_PAGE.VENUE_TEXT}</VenueTitle>

        <VenueAddress>{PAYMENT_PAGE.VENUE_ADDRESS}</VenueAddress>

        <SuccessWrapper>
          <BadgeIcon>
            <Span
              className="material-icons"
              style={{ fontSize: "20px", color: "#16a34a" }}
            >
              {PAYMENT_PAGE.TICK_ICON2}
            </Span>
          </BadgeIcon>

          <PaymentTitle>{PAYMENT_PAGE.PAYMENT_SUCESS}</PaymentTitle>
        </SuccessWrapper>
      </VenueCard>
    </>
  );
};

export default PaymentSuccessfull2;

const Span = styled.span``;

const VenueCard = styled.div`
  width: calc(100% - 32px); 
  background: ${({ theme }) => theme.colors.white};
  border-radius: 3px;
  padding: 16px; // spacing-3
  margin-top: -44px;
  box-shadow: 0 8px 22px rgba(13, 14, 18, 0.06);
  text-align: center;
  padding-bottom: 1px;
`;

const VenueTitle = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.typography["heading-h3"]["font-size"]};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.textPrimary || "#111827"};
`;

const VenueAddress = styled.p`
  margin: 6px 0 0 40px; 
  font-size: ${({ theme }) => theme.typography["body-small"]["font-size"]};
  color: ${({ theme }) => theme.colors.textSecondary || "#6b7280"};
  text-align: left;
`;

const SuccessWrapper = styled.div`
  margin-top: 8px; 
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BadgeIcon = styled.div`
  background: rgba(38, 52, 48, 0.18);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PaymentTitle = styled.h3`
  margin: 0 0 16px 0; 
  font-size: 22px;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.textPrimary || "#111827"};
  padding-bottom: 1px;
  
`;
