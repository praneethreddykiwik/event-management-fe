import Skeleton from "@mui/material/Skeleton";
import styled from "styled-components";

export const SkeletonLoaders = () => {
  return (
    <LoaderCtn>
      <Skeleton
        variant="rectangular"
        height={60}
        sx={{ borderRadius: "12px" }}
      />
      <Skeleton
        variant="rectangular"
        height={60}
        sx={{ borderRadius: "12px" }}
      />
      <Skeleton
        variant="rectangular"
        height={60}
        sx={{ borderRadius: "12px" }}
      />
    </LoaderCtn>
  );
};

const LoaderCtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0;
`;
