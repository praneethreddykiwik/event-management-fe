import { PAYMENT_PAGE } from "../../enum/Payment.common";
import styled from "styled-components";

const Details = () => {
  return (
    <>
      <DetailsCard>
        <DetailsTitle>{PAYMENT_PAGE.DETAILS}</DetailsTitle>

        <StRow>
          <Stylespan>{PAYMENT_PAGE.REFERENCE_TEXT}</Stylespan>
          <Value>{PAYMENT_PAGE.REF_VALUE}</Value>
        </StRow>

        <StRow>
          <Stylespan>{PAYMENT_PAGE.REFERENCE_TEXT2}</Stylespan>
          <Value>{PAYMENT_PAGE.REF_VALUE2}</Value>
        </StRow>

        <StRow>
          <Stylespan>{PAYMENT_PAGE.REFERENCE_TEXT3}</Stylespan>
          <Value>{PAYMENT_PAGE.REF_VALUE3}</Value>
        </StRow>

        <StRow>
          <Stylespan>{PAYMENT_PAGE.REFERENCE_TEXT4}</Stylespan>
          <Value>{PAYMENT_PAGE.REF_VALUE4}</Value>
        </StRow>

        <DashedDivider />

        <TotalRow>
          <Stylespan>{PAYMENT_PAGE.TOTAL_AMOUNT}</Stylespan>
          <Amount>{PAYMENT_PAGE.TOTAL_VALUE}</Amount>
        </TotalRow>
      </DetailsCard>
    </>
  );
};

export default Details;

const DetailsCard = styled.div`
  width: calc(100% - 40px);
  background: #ffffff;
  border-radius: 3px;
  padding: 16px;
  margin-top: 18px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);
  text-align: left;
  padding-bottom: 15px;
`;

const DetailsTitle = styled.h4`
  margin: 0 0 10px 0;
  font-size: 16px;
  font-weight: 600;
  color: #111827;
`;

const DashedDivider = styled.hr`
  border: none;
  border-top: 1px dashed #bdc0c4ff;
  margin: 10px 0;
`;

const Value = styled.span`
  font-weight: 600;
  color: #111827;
  font-size: 13px;
`;

const Amount = styled(Value)`
  color: #111827;
`;

const StRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
`;

const Stylespan = styled.span`
  color: #697991ff;
  font-size: 13px;
`;

const TotalRow = styled(StRow)`
  span:last-child {
    font-weight: 600;
    color: #2e1d5aff;
  }
`;
