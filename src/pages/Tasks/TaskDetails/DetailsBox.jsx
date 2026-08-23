import styled from "styled-components";
import {
  StyledParagraph,
  StyledParagraphBold,
} from "../../../components/Styled/Typography.styled";
import { mobile } from "../../../theme/media-queries";
import { CommonBox } from "../../../components/Cards/Cards";

export const DetailsBox = ({ dataArray = [], title, className }) => {
  return (
    <CommonBox title={title} className={className}>
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
    </CommonBox>
  );
};

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
