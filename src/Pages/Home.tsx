import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Feature";
import IPage from "../Interfaces/page";
import { Content } from "../components/Content/Content";
import { heroOne, heroTwo, heroThree } from "../data/HeorData";
import Carousel from "../components/Carousel/Carousel";

const Home: React.FC<IPage> = (props) => {
  return (
    <>
      <Hero></Hero>
      <Features></Features>
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
      <Carousel />
    </>
  );
};

export default Home;
