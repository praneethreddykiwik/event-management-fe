import styled from "styled-components";
import close from "../../assets/admin's_icons/close_icon.svg";
import {
  StyledMediumHeading,
  StyledParagraphSmall,
} from "../Styled/Typography.styled";

const PopupModal = ({
  onClose,
  children,
  title,
  subtitle,
  width = "60%",
  showHeader = true,
}) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <StyledBackdrop onClick={handleBackdropClick}>
      <StyledPopupModal width={width}>
        {showHeader && (
          <StyledPopupHeader>
            <StyledheaderTxt>
              {title && <StyledPopupTitle>{title}</StyledPopupTitle>}
              {subtitle && (
                <StyledPopupSubtitle>{subtitle}</StyledPopupSubtitle>
              )}
            </StyledheaderTxt>

            <StyledCloseIcon src={close} alt="close" onClick={onClose} />
          </StyledPopupHeader>
        )}

        {children}
      </StyledPopupModal>
    </StyledBackdrop>
  );
};

export default PopupModal;

const StyledBackdrop = styled.div`
   position: fixed;
  inset: 0;
  background: rgb(157 157 157 / 8%);;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  margin: 0px auto;
  padding: 20px;
`;

const StyledPopupModal = styled.div`
  background: #fff;
  width: ${({ width }) => width};
  border-radius: 12px;
  padding: 24px;
  overflow: hidden;
`;

const StyledPopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const StyledheaderTxt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledCloseIcon = styled.img`
  height: 15px;
  cursor: pointer;
`;

const StyledPopupTitle = styled(StyledMediumHeading)`
  margin: 0;
`;

const StyledPopupSubtitle = styled(StyledParagraphSmall)`
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.black};
`;
