import OrderSummary from "./OrderSummary";
import styled from "styled-components";
import RightMainCard2 from "./RightMainCard2";
import PromoCode2 from "./PromoCode2";

const PaymentSuccess = () => {
  return (
    <StyledPage>
      <Container>
        <LeftCard>
          <OrderSummary />
          <PromoCode2 />
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
  background: ${({ theme }) => theme.colors.lightBlue || "#ebf5faff"};
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.textPrimary || "#222"};
  padding: 40px 8px;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  gap: 40px;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;

const LeftCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 8px 30px rgba(24, 39, 75, 0.06);
  padding: 40px;
  width: 500px;
  height: 740px;
  box-sizing: border-box;
`;

