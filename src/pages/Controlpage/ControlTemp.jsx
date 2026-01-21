import styled from "styled-components";

const Temp = () => {
  const MODES = ["Hot", "Eco", "Fan", "Cold"];
  return (
    <>
      <ModeRow>
        {MODES.map((mode, index) => (
          <ModeBtn key={index} $active={index === 3}>
            <Stspan3 className="material-icons">
              {index === 0 && "brightness_high"}
              {index === 1 && "eco"}
              {index === 2 && "air"}
              {index === 3 && "ac_unit"}
            </Stspan3>
            <Span>{mode}</Span>
          </ModeBtn>
        ))}
      </ModeRow>
    </>
  );
};
export default Temp;

const ModeRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 9px;
`;

const ModeBtn = styled.button`
  width: 23%;
  padding: 10px 0;
  background: ${({ $active }) => ($active ? "#ffffff" : "#2d2c3c")};
  color: ${({ $active }) => ($active ? "#000" : "#fff")};
  border-radius: 8px;
  border: none;
  text-align: center;
  cursor: pointer;
  font-size: 13px;

  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;

  .material-icons {
    font-size: 20px;
  }
`;

const Stspan3 = styled.span``;

const Span = styled.span`
  font-size: 14px;
  font-weight: 500;
`;
