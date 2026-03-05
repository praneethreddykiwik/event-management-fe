import styled from "styled-components";
import { Button } from "../../components/Buttons/Button";
import google from "../../assets/Logo/Google.svg.webp";
import apple from "../../assets/Logo/Apple.svg";

const ExButton = () => {
  return (
    <ExampleButton>
      <Button type="base">Base</Button>
      <Button type="outlined">Outlined</Button>
      <Button type="secondary">Secondary</Button>
      <Button type="icon" icon="add_circle">
        Add
      </Button>
      <Button type="icon" icon="download">
        Download reciept
      </Button>
      <Button type="outlined" image={google}>
        Continue with Google
      </Button>
      <Button type="outlined" image={apple}>
        Continue with Google
      </Button>
    </ExampleButton>
  );
};
export default ExButton;

export const ExampleButton = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  text-align: center;
`;
