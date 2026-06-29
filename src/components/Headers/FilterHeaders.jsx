import styled from "styled-components";
import {
  StyledMediumHeading,
  StyledParagraphSmall,
} from "../Styled/Typography.styled";
import { Inputs } from "../Inputs/Inputs";

export const FilterHeaders = ({
  heading = "Filters",
  subHeading = "Click to select below filters",
  placeholder = "Search",
  value,
  onChangeSearch,
}) => {
  return (
    <Tasktxt>
      <StyledTitles>
        <StyledMediumHeading left>{heading}</StyledMediumHeading>
        <StyledParagraphSmall left>{subHeading}</StyledParagraphSmall>
      </StyledTitles>

      <Inputs
        type="inline-input"
        placeholder={placeholder}
        icon="search"
        value={value}
        onchange={onChangeSearch}
      />
    </Tasktxt>
  );
};

const Tasktxt = styled.div`
  padding: 20px 0px 20px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledTitles = styled.div``;
