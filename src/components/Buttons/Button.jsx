import { Icon } from "../Icons/Icons";
import {
  StyledBaseButton,
  StyledIconButton,
  StyledOutlinedButton,
  StyledSecButton,
  StyledTransparentButton,
  ButtonContent,
  ButtonImage,
  StyledNoBorderButton,
  StyledDeleteBtn,
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
  className,
}) => {
  const props = {
    sx,
    onClick,
    small,
    $whiteText: whiteText,
    disabled,
    className,
  };

  const renderContent = () => (
    <ButtonContent>
      {icon && <Icon variant={icon} />}
      {image && <ButtonImage src={image} alt="button-icon" />}
      {children && <span className="input-text">{children}</span>}
    </ButtonContent>
  );

  switch (type) {
    case "outlined":
      return (
        <StyledOutlinedButton {...props}>
          {renderContent()}
        </StyledOutlinedButton>
      );
    case "no-border":
      return (
        <StyledNoBorderButton {...props}>
          {renderContent()}
        </StyledNoBorderButton>
      );

    case "secondary":
      return <StyledSecButton {...props}>{renderContent()}</StyledSecButton>;

    case "transparent":
      return (
        <StyledTransparentButton {...props}>
          {renderContent()}
        </StyledTransparentButton>
      );

    case "delete":
      return <StyledDeleteBtn {...props}>{renderContent()}</StyledDeleteBtn>;

    case "icon":
      return <StyledIconButton {...props}>{renderContent()}</StyledIconButton>;

    case "primary":
      return <StyledBaseButton {...props}>{renderContent()}</StyledBaseButton>;

    default:
      return <StyledBaseButton {...props}>{renderContent()}</StyledBaseButton>;
  }
};
