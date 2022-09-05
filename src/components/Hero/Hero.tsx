import { Link } from "react-router-dom";
import { Button, Section, Container, MainHeading } from "../../GlobalStyles";
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
} from "./HeorStyles";

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroVideo src="./assets/hero.mp4" autoPlay muted loop />
      <Container>
        <MainHeading>Your data is secure with us</MainHeading>
        <HeroText>
          We provide the best security systems for clients all over the world
        </HeroText>
        <ButtonWrapper>
          <Link to="/pricing">
            <Button>Get Started</Button>
          </Link>
          <HeroButton
            onClick={() => {
              const element = document.getElementById("about");
              if (element) {
                element.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
          >
            Find More
          </HeroButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
