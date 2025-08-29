import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface RevealTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const RevealText = ({ children, className = '', delay = 0 }: RevealTextProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const SplitText = ({ text, className = '', delay = 0 }: SplitTextProps) => {
  const words = text.split(' ');

  return (
    <motion.div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20, rotateX: -90 }}
          whileInView={{ 
            opacity: 1, 
            y: 0, 
            rotateX: 0,
            transition: {
              duration: 0.6,
              delay: delay + index * 0.1,
              ease: [0.25, 0.25, 0, 1]
            }
          }}
          className="inline-block mr-2"
          style={{ transformOrigin: 'center bottom' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export const TypewriterText = ({ text, className = '', speed = 50 }: TypewriterTextProps) => {
  return (
    <motion.div className={className}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ 
            opacity: 1,
            transition: {
              delay: index * (speed / 1000),
              duration: 0.1
            }
          }}
          className={char === ' ' ? 'mr-1' : ''}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

interface ScrollScaleProps {
  children: ReactNode;
  className?: string;
}

export const ScrollScale = ({ children, className = '' }: ScrollScaleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]));
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, rotate }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ParallaxTextProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxText = ({ children, speed = 0.5, className = '' }: ParallaxTextProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [`${speed * 100}%`, `${-speed * 100}%`]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};