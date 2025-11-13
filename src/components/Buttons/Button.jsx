/** @format */

import {
  StyledBaseButton,
  StyledOutlinedButton,
  StyledSecButton,
} from '../Styled/Buttons.styled';

export const Button = ({ type, children, onClick, sx }) => {
  const generateButton = () => {
    switch (type) {
      case 'base':
        return (
          <StyledBaseButton sx={sx} onClick={onClick}>
            {children}
          </StyledBaseButton>
        );
      case 'outlined':
        return (
          <StyledOutlinedButton sx={sx} onClick={onClick}>
            {children}
          </StyledOutlinedButton>
        );
      case 'secondary':
        return <StyledSecButton onClick={onClick}>{children}</StyledSecButton>;

      default:
        return (
          <StyledBaseButton onClick={onClick}>{children}</StyledBaseButton>
        );
    }
  };
  return <>{generateButton()}</>;
};
