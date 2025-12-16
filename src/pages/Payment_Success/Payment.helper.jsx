import { PAYMENT_PAGE } from "../../enum/Payment.common";

export const rows = [
  { label: PAYMENT_PAGE.SUBTOTAL, value: PAYMENT_PAGE.SUBTOTAL_VALUE },
  { label: PAYMENT_PAGE.ADDED_FEES, value: PAYMENT_PAGE.FEES_VALUE },
  { label: PAYMENT_PAGE.VAT, value: PAYMENT_PAGE.VAT_VALUE },
];
