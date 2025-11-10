import styled from "styled-components";

export const StyledBaseButton = styled.button`
  height: 40px;
  border-radius: 30px;
  padding: 6px 20px;
  background-color: #26c867;
  color: #000000;
  min-width: 100px;
  border: none;
  cursor: pointer;
`;

export const StyledOutlinedButton = styled.button`
  height: 40px;
  border-radius: 30px;
  padding: 6px 20px;
  background-color: #fff;
  color: #000;
  min-width: 100px;
  border: none;
  cursor: pointer;
  border: 1px solid black;
`;

export const StyledSecButton = styled.button`
  height: 40px;
  border-radius: 30px;
  padding: 6px 20px;
  background-color: #fff;
  color: #000000;
  min-width: 100px;
  border: 1px solid #eeeeee;
  cursor: pointer;
`;

// need to change this to links after the review 
export const StyledTransparentButton = styled.button`
  border: none;
  height: 40px;
  border-radius: 30px;
  padding: 6px 20px;
  color: #26c867;
  min-width: 100px;
  background-color:  #f1faff;
  cursor: pointer;
  align-items: center;
`;

export const StyledTransparentButtonWhite = styled.button`
  border: none;
  height: 40px;
  border-radius: 30px;
  padding: 6px 20px;
  color: #26c867;
  min-width: 100px;
  background-color: #ffffff;
  cursor: pointer;
  align-items: center;
`;