"use client";

import { useMemo, useRef, useLayoutEffect, useState } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'motion/react';

const DEFAULT_VELOCITY_MAPPING = { input: [0, 1000], output: [0, 5] };

function wrap(min, max, v) {
  const range = max - min;
  const mod = (((v - min) % range) + range) % range;
  return mod + min;
}

function useElementWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [ref]);

  return width;
}

function VelocityText({
  children,
  baseVelocity,
  scrollContainerRef,
  className = '',
  damping = 50,
  stiffness = 400,
  numCopies = 3,
  velocityMapping = DEFAULT_VELOCITY_MAPPING,
  parallaxClassName = 'parallax',
  scrollerClassName = 'scroller',
  parallaxStyle,
  scrollerStyle
}) {
  const baseX = useMotionValue(0);
  const scrollOptions = useMemo(
    () => (scrollContainerRef ? { container: scrollContainerRef } : {}),
    [scrollContainerRef]
  );
  const { scrollY } = useScroll(scrollOptions);
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping, stiffness });
  const velocityFactor = useTransform(
    smoothVelocity,
    velocityMapping.input,
    velocityMapping.output,
    { clamp: false }
  );

  const copyRef = useRef(null);
  const copyWidth = useElementWidth(copyRef);

  const x = useTransform(baseX, v => {
    if (copyWidth === 0) return '0px';
    return `${wrap(-copyWidth, 0, v)}px`;
  });

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    const scrollBoost = velocityFactor.get();

    if (scrollBoost < 0) {
      directionFactor.current = -1;
    } else if (scrollBoost > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * scrollBoost;
    baseX.set(baseX.get() + moveBy);
  });

  const spans = useMemo(
    () =>
      Array.from({ length: numCopies }, (_, index) => (
        <span className={className} key={index} ref={index === 0 ? copyRef : null}>
          {children}&nbsp;
        </span>
      )),
    [children, className, numCopies]
  );

  return (
    <div className={parallaxClassName} style={parallaxStyle}>
      <motion.div className={scrollerClassName} style={{ x, ...scrollerStyle }}>
        {spans}
      </motion.div>
    </div>
  );
}

/**
 * @param {{
 *   scrollContainerRef?: import("react").RefObject<Element>;
 *   texts?: string[];
 *   velocity?: number;
 *   className?: string;
 *   damping?: number;
 *   stiffness?: number;
 *   numCopies?: number;
 *   velocityMapping?: { input: number[]; output: number[] };
 *   parallaxClassName?: string;
 *   scrollerClassName?: string;
 *   parallaxStyle?: import("react").CSSProperties;
 *   scrollerStyle?: import("react").CSSProperties;
 * }} props
 */
export const ScrollVelocity = ({
  scrollContainerRef,
  texts = [],
  velocity = 100,
  className = '',
  damping = 50,
  stiffness = 400,
  numCopies = 3,
  velocityMapping = DEFAULT_VELOCITY_MAPPING,
  parallaxClassName = 'parallax',
  scrollerClassName = 'scroller',
  parallaxStyle,
  scrollerStyle
}) => {
  return (
    <section>
      {texts.map((text, index) => (
        <VelocityText
          key={index}
          className={className}
          baseVelocity={index % 2 !== 0 ? -velocity : velocity}
          scrollContainerRef={scrollContainerRef}
          damping={damping}
          stiffness={stiffness}
          numCopies={numCopies}
          velocityMapping={velocityMapping}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}
        >
          {text}
        </VelocityText>
      ))}
    </section>
  );
};

export default ScrollVelocity;
