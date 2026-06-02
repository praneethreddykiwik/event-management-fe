import styled from "styled-components";
import { StyledHeading } from "../Styled/Typography.styled";
import { StyledHr } from "../Styled/Common.styled";
import OwnTabs from "../UI/Tabs/OwnTabs";

export const PageHeader = ({
  children,
  isTitle,

  tabs,
  selectedTab,
  handleTabChange,
}) => {
  return (
    <StyledCtn>
      {isTitle ? <StyledHeading>{children}</StyledHeading> : children}
      {tabs?.length ? (
        <OwnTabs
          tabs={tabs}
          selectedTab={selectedTab}
          handleTabChange={handleTabChange}
        />
      ) : null}
      <StyledHr className="page-header-hr" />
    </StyledCtn>
  );
};

const StyledCtn = styled.div`
  background: rgb(255, 255, 255);
  position: sticky;
  top: 0;
  width: calc(100% + 2px);
  min-height: 76px;
  display: flex;
  align-items: end;
  margin-bottom: 40px;
  z-index: 1;
  margin-left: -1px;
  justify-content: space-between;

  h1 {
    font-size: 26px;
    font-weight: 700;
  }

  & .page-header-hr {
    position: absolute;
    bottom: 0;
    margin: 0;
  }
`;
