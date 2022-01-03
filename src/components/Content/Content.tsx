import React, { useEffect } from "react";
import { Container, Section } from "../../GlobalStyles";
import { HeroTypes } from "../../data/HeorData";
import {
  ContentRow,
  TextWrapper,
  TopLine,
  Heading,
  ContentButton,
  Subtitle,
  ImgWrapper,
  Img,
  ContentColumn,
} from "./ContentStyles";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const Content: React.FC<HeroTypes> = ({
  topLine,
  headline,
  description,
  alt,
  buttonLabel,
  img,
  inverse,
  reverse,
}) => {
  const initial = { opacity: 0, y: 30 };
  const animation = useAnimation();

  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);

  return (
    <Section inverse={inverse} ref={ref}>
      <Container>
        <ContentRow reverse={reverse}>
          <ContentColumn>
            <TextWrapper>
              <TopLine
                initial={initial}
                transition={{ duration: 0.6 }}
                animate={animation}
              >
                {topLine.text}
              </TopLine>
              <Heading
                initial={initial}
                transition={{ duration: 0.6 }}
                animate={animation}
                inversedd={inverse}
              >
                {headline}
              </Heading>
              <Subtitle
                initial={initial}
                transition={{ duration: 0.6 }}
                animate={animation}
                inversedd={inverse}
              >
                {description}
              </Subtitle>
              <ContentButton
                initial={initial}
                transition={{ delay: 1, duration: 0.6 }}
                animate={animation}
                inversedd={inverse}
                big="true"
                fontbig="true"
                primary="true"
              >
                {buttonLabel}
              </ContentButton>
            </TextWrapper>
          </ContentColumn>
          <ContentColumn
            initial={initial}
            transition={{ delay: 0.5, duration: 0.6 }}
            animate={animation}
          >
            <ImgWrapper>
              <Img
                src={img}
                alt={alt}
                whileHover={{ rotate: 2, scale: 1.02 }}
                transition={{ duration: 0.5 }}
              />
            </ImgWrapper>
          </ContentColumn>
        </ContentRow>
      </Container>
    </Section>
  );
};
