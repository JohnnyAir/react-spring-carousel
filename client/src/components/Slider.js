import React, { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";
import { ContentText } from "./Content";
import styled from "styled-components";
import Slide from "./Slide";

const CarouselContainer = styled.section`
  color: #fff;
  display: flex;
  position: relative;
  align-items: center;
  height: ${({ containerHeight }) => containerHeight || "100%"};
`;

const AnimatedSlide = animated(Slide);
const AnimatedText = animated(ContentText);

const animations = {
  fade: {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  }
};

const animationNames = Object.keys(animations);

const getAnimationType = type => {
  if (!type)
    type = animationNames[Math.floor(Math.random() * animationNames.length)];
  return animations[type];
};

function Slider(props) {
  const {
    slides,
    slideInterval,
    animationType,
    slideItemKey,
    ...configProps
  } = props;

  const [index, set] = useState(0);

  const transitions = useTransition(index, item => item, {
    ...getAnimationType(animationType),
    config: config.molasses,
    unique: true
  });

  useEffect(() => {
    const interval = setInterval(() => {
      set((index + 1) % slides.length);
    }, slideInterval || 20000);

    return () => clearInterval(interval);
  });

  return (
    <CarouselContainer>
      {transitions.map(({ item, props, key }) => {
        const slideProps = slides[item];

        return (
          <AnimatedSlide
            key={key}
            style={props}
            {...slideProps}
            {...configProps}
            content={null}
            position="flex-start"
          />
        );
      })}
    </CarouselContainer>
  );
}

export default Slider;

// setTimeout(setSpring, 1000, ((style)=> ({ opacity:1 }))
