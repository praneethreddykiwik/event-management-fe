/** @format */
import {
  StyledBaseButton,
  StyledIconButton,
  StyledOutlinedButton,
  StyledSecButton,
  StyledTransparentButton,
  ButtonContent,
  ButtonImage,
} from "../Styled/Buttons.styled";

export const Button = ({
  type,
  sx,
  children,
  onClick,
  icon,
  image,
  whiteText,
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
        <StyledOutlinedButton sx={sx} onClick={onClick}>
          {renderContent()}
        </StyledOutlinedButton>
      );

    case "secondary":
      return (
        <StyledSecButton sx={sx} onClick={onClick}>
          {renderContent()}
        </StyledSecButton>
      );

    case "transparent":
      return (
        <StyledTransparentButton sx={sx} onClick={onClick}>
          {renderContent()}
        </StyledTransparentButton>
      );

    case "icon":
      return (
        <StyledIconButton sx={sx} onClick={onClick}>
          {renderContent()}
        </StyledIconButton>
      );

    default:
      return (
        <StyledBaseButton sx={sx} $whiteText={whiteText} onClick={onClick}>
          {renderContent()}
        </StyledBaseButton>
      );
  }
};
