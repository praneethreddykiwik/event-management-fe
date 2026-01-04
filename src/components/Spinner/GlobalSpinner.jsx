import styled from "styled-components";
import Spinner from "./Spinner.component";

const GlobalSpinner = ({ loading, children }) => {
  return (
    <>
      {loading ? (
        <StyledSpinner>
          <Spinner loading={loading} color="red" size={50} />
        </StyledSpinner>
      ) : (
        children
      )}
    </>
  );
};

const StyledSpinner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default GlobalSpinner;
