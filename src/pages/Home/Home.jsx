import Carousel from "../../components/Carousel/Carousel";

const Home = () => {
   const carouselList = [
    <div>
      <h2>Criska1</h2>
      <p>Hello Criska1</p>
    </div>,
    <div>
      <h2>Criska2</h2>
      <p>Hello Criska2</p>
    </div>,
    <div>
      <h2>Criska3</h2>
      <p>Hello Criska3</p>
    </div>,
  ]
  return <div style={{ height: "100vh", background: "#fff" }}>
   <Carousel type="type1"  carouselList={carouselList}/>
  
  </div>;
};

export default Home;
 {/* <Carousel carouselList={carouselList} /> */}