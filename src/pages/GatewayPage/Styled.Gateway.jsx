
import styled from "styled-components";
import { StyledBaseButton, StyledSecButton } from "../../components/Styled/Buttons.styled";
import { StyledHeadingBig, StyledParagraph } from "../../components/Styled/Typography.styled";

export const ContainerImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

  @media (max-width: 900px) {
    height: 300px;
  }
`;

export const Container_parent = styled.div`
  display: flex;
  height: 100vh;
  font-family: "Inter", sans-serif;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    height: auto;
  }
`;

export const Container_child1 = styled.div`
  width: 50vw;
  background: ${({ theme }) => theme.colors.lightBlue || "#f5fbff"};
  padding: 40px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    width: 100%;
    padding: 32px 25px;
    text-align: center;
    align-items: center;
  }

  @media (max-width: 480px) {
    padding: 24px 20px;
  }
`;

export const Container_child2 = styled.div`
  width: 50vw;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const LogoRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  gap: 8px;
`;

export const LogoIcon = styled.img`
  width: 80px;

  @media (max-width: 480px) {
    width: 60px;
  }
`;

export const LogoText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  gap: 16px;

  @media (max-width: 900px) {
    margin-bottom: 35px;
  }
`;

export const TitleTxt = styled(StyledHeadingBig)`
  font-size: 35px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 0;
  width: 57%;

  @media (max-width: 900px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const DescriptionTxt = styled(StyledParagraph)`
  font-size: 15px;
  color: ${({ theme }) => theme.colors["text-gray-color"] || "#555"};
  margin: 32px 0 40px;
  width: 50%;
`;


export const Button_section = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;

  @media (max-width: 900px) {
    gap: 25px;
    margin-top: 40px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    gap: 16px;
  }
`;

export const SkipButton = styled(StyledSecButton)`
  width: 150px;
`;

export const NextButton = styled(StyledBaseButton)`
  width: 250px;
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledCstHeading = styled(StyledHeadingBig)`
  font-weight: 300;
  width: 50%;

  @media (max-width: 900px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

