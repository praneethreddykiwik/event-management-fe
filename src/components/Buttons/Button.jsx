/** @format */
import {
  StyledBaseButton,
  StyledIconButton,
  StyledOutlinedButton,
  StyledSecButton,
  StyledTransparentButton,
  ButtonContent,
  ButtonImage,
  StyledNoBorderButton,
} from "../Styled/Buttons.styled";

export const Button = ({
  type,
  sx,
  children,
  onClick,
  icon,
  image,
  whiteText,
  disabled,
  small,
}) => {
  const renderContent = () => (
    <ButtonContent>
      {icon && <span className="material-symbols-outlined">{icon}</span>}

      {image && <ButtonImage src={image} alt="button-icon" />}

      {children && <span>{children}</span>}
    </ButtonContent>
  );

  switch (type) {
    case "outlined":
      return (
        <StyledOutlinedButton sx={sx} onClick={onClick} small={small}>
          {renderContent()}
        </StyledOutlinedButton>
      );
    case "no-border":
      return (
        <StyledNoBorderButton sx={sx} onClick={onClick} small={small}>
          {renderContent()}
        </StyledNoBorderButton>
      );

    case "secondary":
      return (
        <StyledSecButton sx={sx} onClick={onClick} small={small}>
          {renderContent()}
        </StyledSecButton>
      );

    case "transparent":
      return (
        <StyledTransparentButton sx={sx} onClick={onClick} small={small}>
          {renderContent()}
        </StyledTransparentButton>
      );

    case "icon":
      return (
        <StyledIconButton sx={sx} onClick={onClick} small={small}>
          {renderContent()}
        </StyledIconButton>
      );

    default:
      return (
        <StyledBaseButton
          sx={sx}
          $whiteText={whiteText}
          onClick={onClick}
          small={small}
          disabled={disabled}
        >
          {renderContent()}
        </StyledBaseButton>
      );
  }
};
