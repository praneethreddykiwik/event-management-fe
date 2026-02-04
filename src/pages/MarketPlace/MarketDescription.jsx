import {
  StyledHeading,
  StyledParagraphGray,
  StyledParagraphSmallGray,
} from "../../components/Styled/Typography.styled";
import styled from "styled-components";
import { WELCOME, MARKET_PLACE_DESCRIPTION_TEXT } from "../../myEnum";

const MarketDescription = () => {
  return (
    <PageSection>
      <MainContainer>
        <ArticleContent>
          <StyledHeading left>{WELCOME}</StyledHeading>
          <StyledParagraphSmallGray left>
            {MARKET_PLACE_DESCRIPTION_TEXT}
          </StyledParagraphSmallGray>
        </ArticleContent>

        <AsideSearch>
          <Icon className="material-symbols-outlined">search</Icon>
          <SearchInput placeholder="Search market..." />
        </AsideSearch>
      </MainContainer>
    </PageSection>
  );
};

const PageSection = styled.section`
  width: 100%;
  background-color: #f4fbfd;
`;

const MainContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const ArticleContent = styled.article`
  max-width: 720px;
`;

const Description = styled.p`
  font-size: 15px;
  color: #6b7280;
  line-height: 1.5;
  text-align: left;
  margin-top: 4px;
`;

const AsideSearch = styled.aside`
  position: relative;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 80%;
  padding: 15px 19px 8px 44px;
  border-radius: 20px;
  border: 1px solid #d1d5db;
  font-size: 12px;
  outline: none;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Icon = styled.i`
  position: absolute;
  left: 60px;
  top: 55%;
  transform: translateY(-50%);
  color: #22c55e;
  font-size: 18px;
  cursor: pointer;
`;

export default MarketDescription;
