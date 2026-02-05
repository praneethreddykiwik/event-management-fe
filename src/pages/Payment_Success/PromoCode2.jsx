import { PAYMENT_PAGE } from "../../myEnum/Payment.common";
import styled from "styled-components";

const PromoCode2 = () => {
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
export default PromoCode2;
const Styledb = styled.b`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 8px 16px; // spacing-2 spacing-3
  border-radius: 20px;
  cursor: pointer;
`;

const Promo = styled.div`
  text-align: center;
  margin-top: 40px; // spacing-6
  color: ${({ theme }) => theme.colors.primary};
`;

const PromoTitle = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: 8px; // spacing-2
`;

const PromoInput = styled.div`
  display: inline-flex;
  gap: 8px; // spacing-2
  margin-top: 16px; // spacing-3
`;

const PromoField = styled.input`
  border: 1px solid ${({ theme }) => theme.colors["gray-disabled"]};
  padding: 8px 16px; // spacing-2 spacing-3
  border-radius: 4px;
  outline: none;
  width: 190px;
  background: ${({ theme }) => theme.colors.white};
`;

const Terms = styled.p`
  font-size: ${({ theme }) => theme.typography["body-small"]["font-size"]};
  line-height: ${({ theme }) => theme.typography["body-small"]["line-height"]};
  color: ${({ theme }) => theme.colors["text-gray-color"]};
  text-align: justify;
  margin: 40px 0 0 0; // spacing-6
`;

const HighlightText = styled.span`
  color: ${({ theme }) => theme.colors["active-color"]};
  text-decoration: underline;
`;
