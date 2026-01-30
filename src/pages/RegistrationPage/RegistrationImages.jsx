import styled from "styled-components";

import leftImage1 from "./reg-assets/REG_left1.jpg";
import leftImage2 from "./reg-assets/REG_left2.jpg";
import leftImage3 from "./reg-assets/REG_left3.jpg";
import leftImage4 from "./reg-assets/REG_left4.jpg";
import middleImage1 from "./reg-assets/REG_middle1.jpg";
import middleImage2 from "./reg-assets/REG_middle2.jpg";
import middleImage3 from "./reg-assets/REG_middle3.jpg";
import middleImage4 from "./reg-assets/REG_middle4.jpg";
import rightImage1 from "./reg-assets/REG_right1.jpg";
import rightImage2 from "./reg-assets/REG_right2.jpg";
import rightImage3 from "./reg-assets/REG_right3.jpg";
import rightImage4 from "./reg-assets/REG_right4.jpg";

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
  gap: 8px;
  padding: 8px;
  align-items: center;
  justify-content: center;
`;

const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -8px;
  gap: 8px;
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 32px;
  gap: 8px;
`;

const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 32px;
  gap: 8px;
`;

const Img = styled.img`
  height: 250px;
  width: 100%;
  object-fit: cover;
`;

