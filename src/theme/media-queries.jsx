import { css } from "styled-components";

export const mobile = (...args) => css`
  @media (max-width: 480px) {
    ${css(...args)}
  }
`;

// previously it was max-width: 768px
export const tablet = (...args) => css`
  @media (min-width: 481px) and (max-width: 900px) {
    ${css(...args)}
  }
`;

// min-width: 769 previously
export const laptop = (...args) => `
  @media (min-width: 900px) and (max-width: 1024px) {
    ${css(...args)}
  }
`;

export const desktop = (...args) => `
  @media (min-width: 1025px) {
    ${css(...args)}
  }
`;
