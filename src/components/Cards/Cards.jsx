import styled from "styled-components";
import { StyledMediumHeading } from "../Styled/Typography.styled";

export const Card = styled.div`
  padding: 20px 14px;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.colors.primaryLight2};
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
