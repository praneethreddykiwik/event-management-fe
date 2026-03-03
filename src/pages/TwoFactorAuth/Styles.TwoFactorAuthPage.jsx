import styled from "styled-components";
import { mobile, tablet } from "../../theme/media-queries";

/* ================= PAGE WRAPPER ================= */

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: #f5f6fb;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  ${mobile`
    padding: 16px;
    align-items: flex-start;
  `}
`;

/* ================= CARD ================= */

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 420px;
  border-radius: 16px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 20px 40px rgba(217, 229, 215, 0.08);

  ${tablet`
    max-width: 100%;
    padding: 26px;
  `}

  ${mobile`
    padding: 20px;
    border-radius: 12px;
  `}
`;

/* ================= SHIELD ICON ================= */

export const ShieldIcon = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #eef0ff;
  color: #26c867;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;

  .material-icons {
    font-size: 26px;
  }

  ${mobile`
    width: 44px;
    height: 44px;

    .material-icons {
      font-size: 22px;
    }
  `}
`;

/* ================= TITLES ================= */

export const Title = styled.h2`
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  margin: 0;

  ${mobile`
    font-size: 20px;
  `}
`;

export const SubTitle = styled.p`
  text-align: center;
  font-size: 14px;
  color: #6b7280;
  margin: 8px 0 24px;

  ${mobile`
    font-size: 13px;
    margin-bottom: 20px;
  `}
`;

/* ================= OPTION CARD ================= */

export const OptionCard = styled.div`
  border: 2px solid
    ${({ active }) => (active ? "#2ae230" : "#e5e7eb")};
  border-radius: 12px;
  padding: 14px;
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  margin-bottom: 14px;
  transition: 0.2s;

  &:hover {
    border-color: #5be266;
  }

  ${mobile`
    padding: 12px;
    gap: 12px;
  `}
`;

/* ================= ICON ================= */

export const IconCircle = styled.div`
  width: 42px;
  height: 42px;
  background: #eef0ff;
  color: #26c867;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  .material-icons {
    font-size: 20px;
  }

  ${mobile`
    width: 36px;
    height: 36px;

    .material-icons {
      font-size: 18px;
    }
  `}
`;

/* ================= TEXT ================= */

export const OptionText = styled.div`
  flex: 1;
`;

export const OptionTitle = styled.div`
  font-weight: 600;
  font-size: 15px;

  ${mobile`
    font-size: 14px;
  `}
`;

export const OptionSub = styled.div`
  font-size: 13px;
  color: #6b7280;

  ${mobile`
    font-size: 12px;
  `}
`;

/* ================= RADIO ================= */

export const RadioDot = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #26c867;
  background: ${({ active }) =>
    active ? "#26c867" : "transparent"};

  ${mobile`
    width: 14px;
    height: 14px;
  `}
`;

/* ================= BUTTON ================= */

export const PrimaryButton = styled.button`
  margin-top: 10px;
  padding: 14px;
  border-radius: 30px;
  border: none;
  background: linear-gradient(90deg, #26c867, #26c867);
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.95;
  }

  ${mobile`
    padding: 12px;
    font-size: 14px;
  `}
`;

/* ================= BACK ================= */

export const BackText = styled.div`
  text-align: center;
  margin-top: 16px;
  font-size: 14px;
  color: #6b7280;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  ${mobile`
    font-size: 13px;
  `}
`;

/* ================= SECURITY NOTE ================= */

export const SecurityNote = styled.div`
  margin-top: 18px;
  padding: 14px;
  border-radius: 12px;
  background: #f3f4f6;
  font-size: 13px;
  color: #4b5563;
  text-align: center;

  ${mobile`
    font-size: 12px;
    padding: 12px;
  `}
`;
