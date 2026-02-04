import styled from "styled-components";
import leftImage1 from "../../assets/loginImgs/left1.jpg";
import leftImage2 from "../../assets/loginImgs/left2.jpg";
import leftImage3 from "../../assets/loginImgs/left3.jpg";
import leftImage4 from "../../assets/loginImgs/left4.jpg";
import middleImage1 from "../../assets/loginImgs/middle1.jpg";
import middleImage2 from "../../assets/loginImgs/middle2.jpg";
import middleImage3 from "../../assets/loginImgs/middle3.jpg";
import middleImage4 from "../../assets/loginImgs/middle4.jpg";
import rightImage1 from "../../assets/loginImgs/right1.jpg";
import rightImage2 from "../../assets/loginImgs/right2.jpg";
import rightImage3 from "../../assets/loginImgs/right3.jpg";
import rightImage4 from "../../assets/loginImgs/right4.jpg";

const LoginImages = () => {
  const leftImages = [
    leftImage2,
    leftImage1,
    leftImage3,
    leftImage4,
    middleImage3,
    leftImage1,
  ];
  const middleImages = [
    leftImage2,
    middleImage3,
    middleImage2,
    leftImage2,
    middleImage3,
    middleImage4,
    middleImage1,
    leftImage2,
  ];
  const rightImages = [
    rightImage1,
    middleImage3,
    middleImage3,
    rightImage2,
    rightImage3,
    leftImage2,
    rightImage4,
  ];
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
  height: 100vh;
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
  width: 100%;
  object-fit: cover;
`;


