import styled from "styled-components";
import { StyledSectionContainer } from "../../../components/Styled/Common.styled";

export const StylesContainer = styled(StyledSectionContainer)`
  flex-direction: column;
  background-color: #f1faff;

  @media (max-width: 768px) {
    background-color: #ffffff;
  }
`;

export const StyledContainerImg = styled.div`
  height: 20%;
  width: 50%;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 90%;
    display: flex;
    justify-content: space-between;
  }
`;
// Icons

export const StyledIconFirst = styled.img`
  width: 60px;
  height: 80px;

  @media (max-width: 768px) {
    width: 50px;
    height: 60px;
  }
`;
export const StyledIconContainer = styled.div`
  width: 120px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 70px;
  }
`;

export const StyledIconOnes = styled.img`
  width: 120px;
  height: none;
  border-radius: none;
  background-color: white;

  @media (max-width: 768px) {
    width: 80px;
  }
  ${({ sx }) => ({ ...sx })}
`;
