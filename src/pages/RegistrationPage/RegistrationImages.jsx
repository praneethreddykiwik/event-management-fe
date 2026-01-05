import styled from "styled-components";

import leftImage1 from "../../assets/Registration-imgs/left1.jpg";
import leftImage2 from "../../assets/Registration-imgs/left2.jpg";
import leftImage3 from "../../assets/Registration-imgs/left3.jpg";
import leftImage4 from "../../assets/Registration-imgs/left4.jpg";
import middleImage1 from "../../assets/Registration-imgs/middle1.jpg";
import middleImage2 from "../../assets/Registration-imgs/middle2.jpg";
import middleImage3 from "../../assets/Registration-imgs/middle3.jpg";
import middleImage4 from "../../assets/Registration-imgs/middle4.jpg";
import rightImage1 from "../../assets/Registration-imgs/right1.jpg";
import rightImage2 from "../../assets/Registration-imgs/right2.jpg";
import rightImage3 from "../../assets/Registration-imgs/right3.jpg";
import rightImage4 from "../../assets/Registration-imgs/right4.jpg";

const RegistrationImages = () => {
  const leftImages = [leftImage1, leftImage2, leftImage3, leftImage4];
  const middleImages = [middleImage1, middleImage2, middleImage3, middleImage4];
  const rightImages = [rightImage1, rightImage2, rightImage3, rightImage4];
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

export default RegistrationImages;

const ContainerRight = styled.div`
  display: flex;
  width: 50%;
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
  height: 250px;
  width: 100%;
  object-fit: cover;
`;
