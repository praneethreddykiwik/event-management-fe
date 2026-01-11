import React from "react";
import OrderSummary from "./OrderSummary";
// import RightMainCard from "./RightMainCard";
import PromoCode from "./PromoCode";
import styled from "styled-components";
import RightMainCard2 from "./RightMainCard2";

const PaymentSuccess = () => {
  return (
    <StyledPage>
      <Container>
        <LeftCard>
          <OrderSummary />
          <PromoCode />
        </LeftCard>

        <RightMainCard2 />
      </Container>
    </StyledPage>
  );
};

export default PaymentSuccess;

const StyledPage = styled.div`
  font-family: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto,
    "Helvetica Neue", Arial;
  background: #ebf5faff;
  min-height: 100vh;
  color: #222;
  padding: 36px 16px;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  gap: 28px;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;

const LeftCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 8px 30px rgba(24, 39, 75, 0.06);
  padding: 35px;
  width: 500px;
  height: 740px;
  box-sizing: border-box;
`;
