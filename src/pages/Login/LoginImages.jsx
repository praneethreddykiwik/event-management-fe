/** @format */

import styled from 'styled-components';
const LoginImages = ({
  leftImages = [],
  middleImages = [],
  rightImages = [],
}) => {
  return (
    <ContainerRight>
      <Column1>
        {leftImages.map((img, i) => (
          <Img key={`left-${i}`} src={img} alt={`left-${i}`} />
        ))}
      </Column1>

      <Column2>
        {middleImages.map((img, i) => (
          <Img key={`mid-${i}`} src={img} alt={`mid-${i}`} />
        ))}
      </Column2>

      <Column3>
        {rightImages.map((img, i) => (
          <Img key={`right-${i}`} src={img} alt={`right-${i}`} />
        ))}
      </Column3>
    </ContainerRight>
  );
};

export default LoginImages;

const ContainerRight = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  overflow: hidden;
  gap: 10px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -10px;
  gap: 10px;
`;
const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 50px;
  gap: 10px;
`;
const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 50px;
  gap: 10px;
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;
