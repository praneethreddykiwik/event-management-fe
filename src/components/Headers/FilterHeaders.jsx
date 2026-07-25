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
  onChange,
}) => {
  return (
    <Tasktxt>
      <StyledTitles>
        <StyledMediumHeading left>{heading}</StyledMediumHeading>
        <StyledParagraphSmall left>{subHeading}</StyledParagraphSmall>
      </StyledTitles>

      <Inputs
        type="inline-input"
        name="filter-header-search-filter"
        placeholder={placeholder}
        icon="search"
        value={value}
        onChange={onChange}
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
