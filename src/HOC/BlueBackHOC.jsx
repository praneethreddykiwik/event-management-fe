import styled from "styled-components";

export const BlueBackHOC = (props) => {
  return (
    <StyledLayout>
      <StyledBox></StyledBox>
      {props.children}
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  max-width: 1200px;
  background-color: #fff;
  margin: auto;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const StyledBox = styled.div`
  background-color: #fff;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
