import styled from "styled-components";
import { mobile } from "../../../theme/media-queries";
import { SkeletonLoaders } from "../Loaders/SkeletonLoaders";

export const RowLayout = ({ children, loading }) => {
  return (
    <StyledCard loading={loading}>
      <SkeletonLoaders count={1} height={140} />
      {children}
    </StyledCard>
  );
};

const StyledCard = styled.div`
  padding: 20px 14px;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.colors.primaryLight2};
  display: flex;
  flex-direction: ${(props) => (props.showGridView ? "column" : "row")};
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;
  width: ${(props) => (props.showGridView ? "32%" : "")};

  position: relative;

  & .skeleton-loader {
    display: ${({ loading }) => (loading ? "flex" : "none")};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0;
    height: 100%;
    display: block;
    z-index: 1;
    backdrop-filter: blur(10px);

    > span {
      height: 100% !important;
      background: rgb(0 0 0 / 14%);
    }
  }

  ${mobile`
    flex-direction: column;
    gap: 10px;
    padding: 12px;
  `}
`;
