import React from "react";
import styled from "styled-components";

const SocialIcons = ({
  links = {},
  separator = "•",
  className = "",
  textTransform = "capitalize"
}) => {
  return (
    <nav className={className} aria-label="Social media links">
      {Object.entries(links).map(([platform, url], index, arr) => (
        <span key={platform}>
          <LinkStyled
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textTransform }}
          >
            {platform}
          </LinkStyled>

          {index < arr.length - 1 && (
            <span style={{ margin: "0 8px" }}>{separator}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

const LinkStyled = styled.article`
  display: inline;
`;

export default SocialIcons;
