import { css } from "styled-components";

export const richTextStyles = css`
  color: #172b4d;
  font-size: 14px;
  line-height: 1.5;

  & p {
    margin: 0 0 12px;
  }

  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    margin: 16px 0 8px;
    font-weight: 700;
    line-height: 1.2;
  }

  & h1 {
    font-size: 32px;
  }

  & h2 {
    font-size: 24px;
  }

  & h3 {
    font-size: 20px;
  }

  & ul {
    list-style-type: disc;
    padding-left: 24px;
    margin: 12px 0;
  }

  & ol {
    list-style-type: decimal;
    padding-left: 24px;
    margin: 12px 0;
  }

  & li {
    margin: 4px 0;
  }

  & code {
    background: #f4f5f7;
    padding: 2px 4px;
    border-radius: 4px;
    font-family: monospace;
  }

  & pre {
    background: #172b4d;
    color: white;
    padding: 12px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 12px 0;
  }

  & pre code {
    background: transparent;
    padding: 0;
    color: inherit;
  }

  & mark {
    border-radius: 3px;
    padding: 0 2px;
  }
`;
