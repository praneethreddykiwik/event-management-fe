import styled from "styled-components";

const Home = () => {
  return (
    <StyledHome style={{ height: "100vh", background: "#fff" }}>
      Home
    </StyledHome>
  );
};

const StyledHome = styled.div`
  ${({ theme }) => theme.typography["body-regular"]}
  
`;


export default Home;
