import styled from "styled-components";
import { StyledMediumHeading } from "../Styled/Typography.styled";

export const Card = styled.div`
  padding: 20px 14px;
  border-radius: 14px;
  box-shadow:
    rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

export const CommonBox = ({ children, className, title }) => {
  return (
    <Section className={`common-box ${className}`}>
      <StyledMediumHeading left>{title}</StyledMediumHeading>
      {children}
    </Section>
  );
};

const Section = styled.div`
  border: 1px solid #e5e7eb;
  box-shadow: 0 0 4px 0px #e5e7eb;
  border-radius: 12px;
  padding: 16px;
`;
