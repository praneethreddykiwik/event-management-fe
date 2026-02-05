import styled, { css } from "styled-components";
import {
  StyledHeading,
} from "../../components/Styled/Typography.styled";

export const StyledContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.white};

  display: flex;
  justify-content: center;
  padding: 2rem 1rem 4rem;
`;

export const SpanButton = styled.span``;

export const ChoosePlanTxt = styled(StyledHeading)``;

export const ChoosePlan = styled.div`
  width: 92%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ToggleRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin-top: 1rem;
  span {
    font-size: 0.9rem;
    color: #9a9a9a;
  }
  span.active {
    color: ${({ theme }) => theme.colors.black};
    font-weight: 600;
  }
`;

export const ToggleSwitch = styled.button`
  width: 46px;
  height: 22px;
  background: #cfcfcf;
  border: 0;
  border-radius: 999px;
  position: relative;
  cursor: pointer;
`;

export const ToggleKnob = styled.div`
  width: 18px;
  height: 18px;
  background: ${({ theme }) => theme.colors.white};

  border-radius: 999px;
  position: absolute;
  top: 2px;
  left: ${({ $move }) => ($move ? "26px" : "2px")};
  transition: left 0.25s ease;
`;

export const Discount = styled.div`
  font-size: 0.9rem;
  font-weight: 400;
  color: #161716;
  background: #08d743;
  padding: 2px 6px;
  border-radius: 999px;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin-top: 2rem;
`;

export const selectedStyles = css`
  background: #111;
  color: #fff;
  width: 300px;
  height: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-color: ${({ theme }) => theme.colors.black};
  transform: translateY(-4px);
  padding-bottom: 2rem;
`;

export const PlanCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: clamp(12px, 2vw, 16px);
  padding: clamp(12px, 2vw, 1.25rem);
  border: 1px solid #eef2f7;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;

  width: min(250px, 100%);
  cursor: pointer;
  transition: all 0.3s ease;

  ${({ $selected }) => $selected && selectedStyles};

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.25);
  }

  h3 {
    font-size: 1rem;
    font-weight: 700;
    opacity: 0.9;
    color: ${({ theme, $selected }) =>
      $selected ? theme.colors.black : "#111"};
  }
`;


export const Price = styled.div`
  font-size: 1.9rem;
  font-weight: 800;
  margin: 0.5rem 0 1rem;

  small {
    font-size: 0.9rem;
    font-weight: 600;
    color: inherit;
    opacity: 0.7;
    margin-left: 2px;
  }
`;

export const MobileLine = styled.p`
  display: none;
`;

export const Features = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
`;

export const Feature = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 8px 0;
  font-size: 0.93rem;
  &:before {
    content: "✓";
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    font-weight: 800;
    border-radius: 50%;
    background: ${({ $selected }) => ($selected ? "#e0f0ff" : "#e9f7ef")};
    color: ${({ $selected }) => ($selected ? "#007bff" : "#138a53")};
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 0.75rem;
`;

export const SmallText = styled.p`
  font-size: 0.8rem;
  color: #666;
  margin-top: 10px;
  a {
    color: ${({ $selected }) => ($selected ? "#007bff" : "#0f9d58")};
    text-decoration: underline;
  }
`;

export const TermsRow = styled.label`
  display: none;
`;

export const MobileCTA = styled.div`
  display: none;
`;

export const MobileSkip = styled.p`
  display: none;
`;

export const MobileDot = styled.span`
  display: none;
`;
export const TitleRow = styled.div`
  display: flex;
  align-items: center;

  h3 {
    margin: 0;
  }
`;

export const PlanDivider = styled.div`
  width: 100%;
  height: 1px;
  margin: 0.75rem 0 1rem;
  background: ${({ $selected }) =>
    $selected ? "rgba(255, 255, 255, 0.16)" : "#e5e7eb"};
  }
`;
