import styled from "styled-components";
export const StyledContainerOne = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 60px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0px;
  }
`;

export const StyledContainerOneImg = styled.img`
  width: 270px;

  @media (max-width: 768px) {
    width: 25%;
  }
`;

export const StyledContainerTwo = styled.div`
  margin-top: 30px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;
