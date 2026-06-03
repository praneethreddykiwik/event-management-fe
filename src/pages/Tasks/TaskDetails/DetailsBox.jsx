import styled from "styled-components";
import {
  StyledMediumHeading,
  StyledParagraph,
  StyledParagraphBold,
} from "../../../components/Styled/Typography.styled";
import { mobile } from "../../../theme/media-queries";

export const DetailsBox = ({ dataArray = [], title, className }) => {
  return (
    <Section className={className}>
      <StyledMediumHeading left>{title}</StyledMediumHeading>

      <SummaryGrid>
        {dataArray.map((item) => (
          <SummaryItem key={item.label} style={item.sx}>
            <StyledParagraphBold className="label" left>
              {item.label}
            </StyledParagraphBold>

            {item.component || (
              <StyledParagraph className="value" left>
                {item.value}
              </StyledParagraph>
            )}
          </SummaryItem>
        ))}
      </SummaryGrid>
    </Section>
  );
};

const Section = styled.div`
  border: 1px solid #e5e7eb;
  box-shadow: 0 0 4px 0px #e5e7eb;
  border-radius: 12px;
  padding: 16px;
`;

const SummaryGrid = styled.div`
  display: flex;
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
`;

const SummaryItem = styled.div`
  flex-basis: 50%;
  padding: 16px;

  .label {
    color: ${({ theme }) => theme.colors["text-gray-color"]};
    font-size: 14px;
    font-weight: 400;
  }

  .value {
    margin-bottom: 4px;
  }

  ${mobile`
      flex-basis: 100%;
      padding: 10px;
    `}
`;
