import { PAYMENT_PAGE } from "../../enum/Payment.common";
import styled from "styled-components";

const promoCode = () => {
  return (
    <>
      <Promo>
        <PromoTitle>{PAYMENT_PAGE.PROMO_TEXT}</PromoTitle>
        <PromoInput>
          <PromoField type="text" placeholder="Add code" />

          <Button>{PAYMENT_PAGE.ADD_BTN}</Button>
        </PromoInput>
      </Promo>

      <Terms>
        {PAYMENT_PAGE.TERMS_TEXT}
        <HighlightText>{PAYMENT_PAGE.HIGHLIGHT_TEXT}</HighlightText>{" "}
        {PAYMENT_PAGE.TERMS_TEXT2}
        <HighlightText>{PAYMENT_PAGE.HIGHLIGHT_TEXT2}</HighlightText>{" "}
        {PAYMENT_PAGE.TERMS_TEXT3}
        <Styledb>{PAYMENT_PAGE.STYLED_TEXT}</Styledb> {PAYMENT_PAGE.TERMS_TEXT4}{" "}
        <Styledb>{PAYMENT_PAGE.STYLED_TEXT2}</Styledb>
      </Terms>
    </>
  );
};
export default promoCode;

const Styledb = styled.b`
  font-weight: 500;
`;

const Button = styled.button`
  background-color: #16a34a;
  color: #ffffff;
  border: none;
  padding: 10px 16px;
  border-radius: 20px;
  cursor: pointer;
`;

const Promo = styled.div`
  text-align: center;
  margin-top: 40px;
  color: #16a34a;
`;

const PromoTitle = styled.h4`
  font-weight: 500;
  margin-bottom: 10px;
`;

const PromoInput = styled.div`
  display: inline-flex;
  gap: 10px;
  margin-top: 20px;
`;

const PromoField = styled.input`
  border: 1px solid #bdc0c4ff;
  padding: 10px 12px;
  border-radius: 4px;
  outline: none;
  width: 190px;
  background: #fbfdff;
`;

const Terms = styled.p`
  font-size: 13px;
  text-align: center;
  color: #6b7280;
  margin-top: 22px;
  margin: 30px;
  line-height: 1.45;
  text-align: justify;
  margin-top: 60px;
`;

const HighlightText = styled.span`
  color: #1f4bd8;
  text-decoration: underline;
`;
