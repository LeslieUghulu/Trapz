import { useRef, useState, useEffect } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'motion/react';

export function InfiniteSlider({ children, speed = 40, gap = 32, className = '' }) {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const x = useMotionValue(0);

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        const content = containerRef.current.querySelector('[data-content]');
        if (content) setContentWidth(content.scrollWidth);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useAnimationFrame((_, delta) => {
    if (contentWidth === 0) return;
    const moveBy = (speed / 1000) * delta;
    let newX = x.get() - moveBy;
    if (Math.abs(newX) >= contentWidth / 2) {
      newX = 0;
    }
    x.set(newX);
  });

  const items = Array.isArray(children) ? children : [children];
  const doubled = [...items, ...items];

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <motion.div
        style={{ x, display: 'flex', gap, width: 'max-content' }}
        data-content
      >
        {doubled.map((child, i) => (
          <div key={i} style={{ flexShrink: 0 }}>{child}</div>
        ))}
      </motion.div>
    </div>
  );
}
