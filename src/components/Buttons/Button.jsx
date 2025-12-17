/** @format */
import {
  StyledBaseButton,
  StyledIconButton,
  StyledOutlinedButton,
  StyledSecButton,
  ButtonContent,
  ButtonImage,
} from '../Styled/Buttons.styled';

export const Button = ({
  type = 'base',
  children,
  onClick,
  icon,
  image
}) => {
  const renderContent = () => (
    <ButtonContent>
      {icon && (
        <span className="material-symbols-outlined">
          {icon}
        </span>
      )}

      {image && <ButtonImage src={image} alt="button-icon" />}

      {children && <span>{children}</span>}
    </ButtonContent>
  );

  switch (type) {
    case 'outlined':
      return (
        <StyledOutlinedButton onClick={onClick}>
          {renderContent()}
        </StyledOutlinedButton>
      );

    case 'secondary':
      return (
        <StyledSecButton onClick={onClick}>
          {renderContent()}
        </StyledSecButton>
      );

    case 'icon':
      return (
        <StyledIconButton onClick={onClick}>
          {renderContent()}
        </StyledIconButton>
      );

    default:
      return (
        <StyledBaseButton onClick={onClick}>
          {renderContent()}
        </StyledBaseButton>
      );
  }
};


