import { StyledHeading } from "../../components/Styled/Typography.styled";
import styled from "styled-components";
import { WELCOME, DESCRIPTION_TEXT } from "../../Enum/marketplace.enum";

const MarketDescription = () => {
  return (
    <PageSection>
      <MainContainer>
        <ArticleContent>
          <HeadingWrapper> 
            <StyledHeading>{WELCOME}</StyledHeading>
              </HeadingWrapper>
          <Description>{DESCRIPTION_TEXT}</Description>
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

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const ArticleContent = styled.article`
  max-width: 720px;
`;

const HeadingWrapper = styled.div`

  ${StyledHeading} {
    font-weight: 700;
    text-align: left; 
`;

const Description = styled.p`
  font-size: 15px;
  color: #6b7280;
  line-height: 1.5;
  text-align: left;
  margin-top: 4px;

  @media (max-width: 900px) {
    text-align: left; /* keep description left too */
  }
`;

const AsideSearch = styled.aside`
  position: relative;
  width: 240px;

  @media (max-width: 900px) {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const SearchInput = styled.input`
  width: 80%;
  padding: 12px 14px 8px 24px;
  border-radius: 20px;
  border: 1px solid #d1d5db;
  font-size: 12px;
  outline: none;
  background-color: #ffffff;

  @media (max-width: 900px) {
    width: 90%;
  }
`;

const Icon = styled.i`
  position: absolute;
  left: 10px;
  top: 55%;
  transform: translateY(-50%);
  color: #22c55e;
  font-size: 18px;
  cursor: pointer;
`;

export default MarketDescription;
