import styled from "styled-components";
import { StyledBaseButton, StyledTransparentButton } from "./Buttons.styled";
import { StyledHeading, StyledMediumHeading } from "./Typography.styled";

const textAlign = ({ left, right }) =>
  left ? "left" : right ? "right" : "center";

// Account Settings Specific
export const StyledHeadingTitle = styled(StyledHeading)`
  text-align: ${textAlign};
`;

export const StyledMediumHeadingAccount = styled(StyledMediumHeading)`
  display: flex;
  text-align: ${textAlign};
`;

export const StyledLink = styled(StyledTransparentButton)`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-left: 50px;
  color: #060058;

  &:hover {
    text-decoration: none;
  }
`;

export const StyledLinkIcon = styled.span`
  transform: rotate(45deg);
  margin-right: 10px;
`;

export const StyledSectionText = styled.div`
  color: #aeaeae;
  text-align: ${textAlign};
  font-size: 1.2em;
  margin-top: 10px;
`;
export const StyledSemiHeadingAccount = styled.p`
  font-size: 24px;
  line-height: 28px;
  margin: 75px 0 12px 0;
  color: #a0a0a0;
  text-align: ${textAlign};
`;

export const StyledButtonContainer = styled.div`
  margin: 10px 0 50px 0;
  text-align: ${textAlign};
`;

export const StyledContainer = styled.div`
  background-color: #f1faff;
  padding: 0 120px;
  display: flex;

  @media (max-width: 1024px) {
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }
  @media (max-width: 540px) {
    padding: 0;
  }
`;
export const StyledContent = styled.div`
  display: flex;
  background-color: #fff;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const StyledLeftNav = styled.div`
  width: 240px;
  height: 100%;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.2) 0 4px 6px;
  position: relative;

  @media (max-width: 540px) {
    width: 100%;
  }
`;

export const StyledRightContent = styled.div`
  flex: 1;
  padding-top: 10px;
  border-bottom: 1px solid #eee;
  padding: 0 40px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const StyledHr = styled.hr`
  border: none;
  border-bottom: 1px solid #dfdfdf;
  margin: 0 -40px;

  @media (max-width: 768px) {
    margin: 0 -20px;
  }
`;

export const Nav = styled.nav`
  color:#A0A0A0
  padding: 20px 0;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 14px 20px;
  cursor: pointer;
  transition: background 0.2s;
  font-size: 1.1rem;
  background: ${({ active }) => (active ? "#DEF7E6" : "transparent")};
  color: ${({ active }) => (active ? "#000" : "#A0A0A0")};
  font-weight: ${({ active }) => (active ? "400" : "400")};

  &:hover {
    background: ${({ active }) => (active ? "#DEF7E6" : "#DEF7E6")};
    color: #000;
  }

  .material-symbols-outlined {
    font-size: 22px;
    color: ${({ active }) => (active ? "#000" : "#A0A0A0")};
    transition: color 0.2s;
    padding-right: 10px;
    color: #a0a0a0;
  }

  &:last-child {
    margin: 50px 0;
  }
`;

export const StyledAccButton = styled(StyledBaseButton)`
  color: #fff;
`;

export const SidebarModal = styled.div`
  position: relative;
  margin: 10px;
  bottom: 0;
  left: 0;
  background: #e2f3e8;
  border: 1px solid #8dcfa6;
  border-radius: 8px;
  padding: 20px;
  display: ${({ show }) => (show ? "block" : "none")};
  z-index: 10;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const ModalImage = styled.img`
  border-radius: 6px;
  margin-bottom: 15px;
`;

export const ModalText = styled.p`
  font-size: 0.85rem;
  margin-bottom: 15px;
`;

export const StyledProfileCard = styled.div`
  position: relative;
  background: #eef8ff;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 0 0 1px #dbe7f1 inset;
  margin: 10px;
`;

export const StyledProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledProfileTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #222;
`;

export const StyledProfileIcon = styled.span`
  color: #1f1f1f;
`;

export const StyledProfileSubtitle = styled.div`
  color: #7f8c99;
  margin-top: 4px;
  text-align: left;
  font-size: 12px;
`;

export const StyledProfileDivider = styled.div`
  height: 1px;
  background: #dbe7f1;
  margin: 5px -16px;
`;

export const StyledProfileRow = styled.div`
  display: flex;
  align-items: center;
  padding-top: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`;

export const StyledGroupIcon = styled.span`
  color: #aeaeae;
`;

export const StyledProfileLabel = styled.div`
  font-size: 12px;
  color: #333;
  margin-left: 10px;
`;

export const StyledSection = styled.div`
  color: #aeaeae;
  font-size: 14px;
  margin: 30px 0 50px 0;
`;

export const Form = styled.form`
  color: #a0a0a0;
  padding: 20px 0;
`;

export const Row = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  cursor: pointer;

  @media (max-width: 1024px) {
    text-align: left;
  }
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border: 1.5px solid #a0a0a0;
  border-radius: 2px;
  cursor: pointer;
  //   transition: all 0.15s ease;
  position: relative;

  &:hover {
    border-color: #b5b5b5;
  }

  &:checked {
    background-color: #e2f3e8; /* adjust if you want another color */
    border-color: #8dcfa6;
  }

  &:checked::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 5px;
    width: 5px;
    height: 10px;
    border: solid #26c867;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

export const LabelText = styled.span`
  margin-left: 10px;
`;

export const UpgrateOptions = styled.div`
  margin-top: 40px;
  color: #AEAEAE;
`;