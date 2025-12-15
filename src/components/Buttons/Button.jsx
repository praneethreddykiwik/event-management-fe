/** @format */

import {
  StyledBaseButton,
  StyledOutlinedButton,
  StyledSecButton,
} from '../Styled/Buttons.styled';

export const Button = ({ type, children, onClick }) => {
  const generateButton = () => {
    switch (type) {
      case 'base':
        return (
          <StyledBaseButton onClick={onClick}>{children}</StyledBaseButton>
        );
      case 'outlined':
        return (
          <StyledOutlinedButton onClick={onClick}>
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
