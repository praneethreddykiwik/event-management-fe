import styled from "styled-components";

const textAlign = ({ left, right }) =>
  left ? "left" : right ? "right" : "center";

const marginTop = ({ small, medium }) => (small ? 25 : medium ? 50 : 75);

// headings
export const StyledHeadingBig = styled.p`
  //   color: ${({ theme, gradient }) => (gradient ? null : theme.color)};
  color: black;
  font-size: 44px;
  font-weight: 600;
  line-height: 52px;
  letter-spacing: -0.144px;
  margin: 20px 0;
  text-align: ${({ left, right }) => textAlign({ left, right })};
`;

export const StyledHeading = styled.p`
  color: #000;
  font-size: 32px;
  font-weight: 600;
  line-height: 35.2px;
  margin: 20px 0;
  text-align: ${textAlign};
`;
export const StyledSemiHeading = styled.p`
  color: #000;
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  margin: 12px 0;
  text-align: ${textAlign};
`;
export const StyledMediumHeading = styled.p`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 23.4px;
  margin-top: ${marginTop}px;
  text-align: ${textAlign};
`;

// Paragraphs
export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.color};
  font-size: 16px;
  font-weight: 300;
  line-height: 22.4px;
  margin-top: 0;
  margin-bottom: 0;
  text-align: ${textAlign};
`;

export const StyledParagraphBold = styled.p`
  color: ${({ theme }) => theme.color};
  font-size: 16px;
  font-weight: 600;
  line-height: 22.4px;
  text-align: ${textAlign};
`;

export const StyledParagraphGray = styled.p`
  color: #86868d;
  line-height: 22.4px;
  font-size: 17px;
  font-weight: 600;
  text-align: ${textAlign};
`;

export const StyledParagraphSmallGray = styled.p`
  color: ${({ theme }) => theme.commonGrayColor};
  font-size: 14px;
  font-weight: 400;
  line-height: 22.4px;
  text-align: ${textAlign};
`;

export const StyledParagraphSmall = styled.p`
  color: ${({ theme }) => theme.commonGrayColor};
  font-size: 12px;
  font-weight: 400;
  line-height: 18.2px;
  text-align: ${textAlign};
`;

export const StyledParagraphSmallVisible = styled.p`
  color: ${({ theme }) => theme.commonGrayVisible};
  font-size: 12px;
  font-weight: 400;
  line-height: 18.2px;
  margin: 10px 0;
  text-align: ${textAlign};
`;

// Anchor tags (links)

export const StyledAnchor = styled.a`
  color: ${({ theme }) => theme.color} !important;
  font-size: 12px;
  font-weight: 600;
  line-height: 18.2px;
  cursor: pointer;
  text-decoration: none;
  text-align: ${textAlign};
  text-decoration: underline;

  &:hover {
    text-decoration-color: ${({ theme }) => theme.commonAnchorColor};
    text-decoration-style: solid;
  }
`;

export const StyledGrayLink = styled.span`
  color: ${({ theme }) => theme.commonGrayVisible} !important;
  font-size: 12px;
  font-weight: 600;
  line-height: 18.2px;
  cursor: pointer;
  text-decoration: underline;
  text-align: ${textAlign};

  &:hover {
    color: rgb(255 255 255 / 85%) !important;
    // text-decoration-color: ${({ theme }) => theme.commonAnchorColor};
    // text-decoration-style: solid;
  }
`;

export const StyledAnchorSmall = styled.p`
  color: ${({ theme }) => theme.commonAnchorColor};
  font-size: 14px;
  font-weight: 400;
  line-height: 18.2px;
  text-align: ${textAlign};
  cursor: pointer;

  &:hover {
    text-decoration-color: ${({ theme }) => theme.commonAnchorColor};
    text-decoration: underline;
    text-decoration-style: solid;
  }
`;

export const StyledParagraphError = styled.p`
  color: #a30000;
  font-size: 12px;
  font-weight: 400;
  line-height: 18.2px;
  margin: 0;
  margin-top: -20px;
  margin-bottom: 20px;
  text-align: left;
`;
