import { StyledParagraphSmallGray } from "../../components/Styled/Typography.styled";
import { PAYMENT_PAGE } from "../../myEnum/Payment.common";
import styled from "styled-components";
import { mobile } from "../../theme/media-queries";

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
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
`;

const Promo = styled.div`
  text-align: center;
  margin-top: 40px;
  color: ${({ theme }) => theme.colors.primary};
`;

const PromoTitle = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: 8px;
`;

const PromoInput = styled.div`
  display: inline-flex;
  gap: 8px;
  margin-top: 16px;

  ${mobile`
    flex-direction: column;
    width: 100%;
  `}
`;

const PromoField = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.grayDisabled};
  padding: 8px 16px;
  border-radius: 4px;
  outline: none;
  width: 190px;
  background: ${({ theme }) => theme.colors.white};

  ${mobile`
    flex-direction: column;
    width: 100%;
  `}
`;

const Terms = styled(StyledParagraphSmallGray)`
  line-height: ${({ theme }) => theme.typography["body-small"]["line-height"]};
  text-align: justify;
  margin: 30px 0 0 0;
`;

const HighlightText = styled.span`
  color: ${({ theme }) => theme.colors.lightBlue || "#2e1d5aff;"};
  text-decoration: underline;
`;
