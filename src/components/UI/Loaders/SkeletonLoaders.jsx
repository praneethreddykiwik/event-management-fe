import Skeleton from "@mui/material/Skeleton";
import styled from "styled-components";

export const SkeletonLoaders = ({ count = 3, height = 60 }) => {
  return (
    <LoaderCtn>
      {Array(count)
        .fill("")
        .map(() => (
          <Skeleton
            variant="rectangular"
            height={height}
            sx={{ borderRadius: "12px" }}
          />
        ))}
    </LoaderCtn>
  );
};

const LoaderCtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0;
`;
