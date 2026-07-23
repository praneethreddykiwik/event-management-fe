import Skeleton from "@mui/material/Skeleton";
import styled from "styled-components";

export const SkeletonLoaders = ({
  count = 3,
  height = 60,
  width,
  type = "list",
}) => {
  return (
    <LoaderCtn type={type}>
      {Array(count)
        .fill("")
        .map(() =>
          type === "card" ? (
            <Skeleton
              variant="rectangular"
              width={width}
              height={height}
              sx={{ borderRadius: "12px" }}
            />
          ) : (
            <Skeleton
              variant="rectangular"
              width={width}
              height={height}
              sx={{ borderRadius: "12px" }}
            />
          ),
        )}
    </LoaderCtn>
  );
};

const LoaderCtn = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px 0;
  width: ${({ type }) => (type === "card" ? "fit-content" : "100%")};

  flex-direction: ${({ type }) => (type === "card" ? "row" : "column")};

  flex-wrap: ${({ type }) => (type === "card" ? "wrap" : "nowrap")};
`;
