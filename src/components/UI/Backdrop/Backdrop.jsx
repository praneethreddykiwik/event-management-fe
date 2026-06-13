import styled from "styled-components";

const Backdrop = ({ onClose, children }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <StyledBackdrop onClick={handleBackdropClick} className="backdrop">
      {children}
    </StyledBackdrop>
  );
};

export default Backdrop;

const StyledBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgb(0 0 0 / 80%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  margin: 0px auto;
  padding: 20px;
`;
