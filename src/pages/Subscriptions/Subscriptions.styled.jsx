import styled, { css } from "styled-components";
import {
  StyledBaseButton,
  StyledSecButton,
} from "../../components/Styled/Buttons.styled";
import {
  StyledHeading,
  StyledParagraph,
} from "../../components/Styled/Typography.styled";
const bp = {
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};
export const StyledContainer = styled.div`
  min-height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 1rem 4rem;

  @media (max-width: ${bp.md}) {
    padding: 1.25rem 1rem 3rem;
  }
`;

export const SpanButton = styled.span``;
export const Message = styled(StyledParagraph)``;

export const ChoosePlanTxt = styled(StyledHeading)``;

export const ChoosePlan = styled.div`
  width: 92%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Header = styled.div`
  h1 {
    font-size: 2.4rem;
    font-weight: 800;
  }
  p {
    /* color: #757575; */
    margin-top: 0.25rem;
  }
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
    color: #111;
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
  background: #fff;
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
  flex-wrap: nowrap;

  @media (max-width: ${bp.md}) {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
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
  border-color: #111;
  transform: translateY(-4px);
  /* height: 100%; */
  padding-bottom: 2rem;
`;

export const PlanCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 1.25rem;
  border: 2px solid transparent;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  width: 250px;
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
  }

  ${({ $selected }) =>
    $selected &&
    css`
      h3 {
        color: #cfcfcf;
      }
    `}

  @media (max-width: ${bp.md}) {
    width: 100%;
    max-width: 100%;
    padding: 12px 14px;
    border-radius: 12px;
    border: 1px solid #eef2f7;
    box-shadow: none;
    position: relative;
    transform: none;
    height: auto;

    ${({ $selected }) =>
      $selected &&
      css`
        background: #fff;
        color: #111;
        border-color: #10b981;
        h3 {
          color: #111;
        }
      `}
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

  @media (max-width: ${bp.md}) {
    font-size: 1.1rem;
    margin: 0;
    align-self: flex-end;
    position: absolute;
    right: 14px;
    top: 12px;
  }
`;

export const MobileLine = styled.p`
  display: none;

  @media (max-width: ${bp.md}) {
    display: block;
    margin: 26px 0 0;
    color: #6b7280;
    font-size: 0.9rem;
    line-height: 1.35;
    text-align: left;
  }
`;

export const Features = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;

  @media (max-width: ${bp.md}) {
    display: none;
  }
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

  @media (max-width: ${bp.md}) {
    display: none;
  }
`;

export const SmallText = styled.p`
  font-size: 0.8rem;
  color: #666;
  margin-top: 10px;
  a {
    color: ${({ $selected }) => ($selected ? "#007bff" : "#0f9d58")};
    text-decoration: underline;
  }

  @media (max-width: ${bp.md}) {
    display: none;
  }
`;

export const TermsRow = styled.label`
  display: none;

  @media (max-width: ${bp.md}) {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 0.9rem;
    color: #374151;
    margin-top: 2rem;
    margin-bottom: 1rem;
    text-align: left;

    input {
      width: 20px;
      height: 20px;
      accent-color: #10b981;
      margin-top: 2px;
    }

    a {
      color: #10b981;
      text-decoration: none;
      font-weight: 600;
      text-decoration: underline;
    }
  }
`;

export const MobileCTA = styled.div`
  display: none;

  @media (max-width: ${bp.md}) {
    display: flex;
    justify-content: center;
    width: 65%;
    margin-top: 1.75rem;

    button {
      width: 100%;
      max-width: 600px;
      padding: 20px 18px;
      border-radius: 999px;
      background: #10b981;
      /* color: #fff; */
      font-size: 1.2rem;
      font-weight: 200;
      border: none;
    }

    button:disabled {
      opacity: 0.5;
    }
  }
`;

export const MobileSkip = styled.p`
  display: none;

  @media (max-width: ${bp.md}) {
    display: block;
    text-align: center;
    margin-top: 14px;
    font-size: 0.9rem;
    color: #6b7280;
  }
`;

export const MobileDot = styled.span`
  display: none;

  @media (max-width: ${bp.md}) {
    display: inline-flex;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid ${({ $selected }) => ($selected ? "#10b981" : "#d1d5db")};
    align-items: center;
    justify-content: center;
    margin-right: 8px;

    &:after {
      content: "";
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${({ $selected }) => ($selected ? "#10b981" : "transparent")};
    }
  }
`;
// export const  MobileTitleRow = styled.div`
//   display: flex;
//   align-items: center;
// `;

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
  @media (max-width: ${bp.md}) {
    display: none;
  }
`;
