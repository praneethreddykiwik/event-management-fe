import { PuffLoader } from "react-spinners";
import styled from "styled-components";

const Spinner = ({ loading, color = "#ffffff", size = 10 }) => {
  return (
    <StyledSpinner
      color={color}
      loading={loading}
      size={size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

const StyledSpinner = styled(PuffLoader)`
  margin-bottom: 10px;
`;

export default Spinner;
