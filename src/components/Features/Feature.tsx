import { useEffect } from "react";
import { Container, Section } from "../../GlobalStyles";
import { useInView } from "react-intersection-observer";
import {
  FeatureText,
  FeatureTitle,
  FeatureWrapper,
  FeatureColumn,
  FeatureImageWrapper,
  FeatureName,
  FeatureTextWrapper,
} from "./FeaturesStyles";
import { featuresData } from "../../data/FeaturesData";
import { useAnimation } from "framer-motion";

const Features = () => {
  const initial = {
    y: 30,
    opacity: 0,
  };
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });
  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
      });
    }
  }, [animation, inView]);

  // const animate = {
  //   y: 0,
  //   opacity: 1,
  // };

  return (
    <Section
      ref={ref}
      smPadding="50px 10px"
      position="relative"
      inverse
      id="about"
    >
      <Container>
        <FeatureTextWrapper>
          <FeatureTitle>What We Offer</FeatureTitle>
        </FeatureTextWrapper>
        <FeatureWrapper>
          {featuresData.map((el, index) => (
            <FeatureColumn
              initial={initial}
              animate={animation}
              transition={{ duration: 0.5 + index * 0.1 }}
              key={index}
            >
              <FeatureImageWrapper className={el.imgClass}>
                {el.icon}
              </FeatureImageWrapper>
              <FeatureName>{el.name}</FeatureName>
              <FeatureText>{el.description}</FeatureText>
            </FeatureColumn>
          ))}
        </FeatureWrapper>
      </Container>
    </Section>
  );
};

export default Features;
