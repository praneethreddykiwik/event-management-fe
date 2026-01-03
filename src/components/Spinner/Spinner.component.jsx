import { PuffLoader } from "react-spinners";
import styled from "styled-components";

const Spinner = ({ loading }) => {
  let color = "#ffffff";

  return (
    <StyledSpinner
      color={color}
      loading={loading}
      size={10}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

const StyledSpinner = styled(PuffLoader)`
  margin-bottom: 10px;
`;

export default Spinner;
