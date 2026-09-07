import React, { useState, useEffect, useRef } from 'react';

/**
 * KineticCounter
 * Physics-based smooth number counter with ease-out interpolation
 */
export default function KineticCounter({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1200,
  className = ''
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const prevValueRef = useRef(0);
  const startTimeRef = useRef(null);
  const reqIdRef = useRef(null);
  const elementRef = useRef(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  // Trigger when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasTriggered(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasTriggered) return;

    const startVal = prevValueRef.current;
    const targetVal = typeof value === 'number' ? value : parseFloat(value) || 0;
    prevValueRef.current = targetVal;

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic: 1 - (1 - t)^3
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = startVal + (targetVal - startVal) * easeProgress;

      setDisplayValue(current);

      if (progress < 1) {
        reqIdRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayValue(targetVal);
        startTimeRef.current = null;
      }
    };

    startTimeRef.current = null;
    reqIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
    };
  }, [value, duration, hasTriggered]);

  const formattedValue = displayValue.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={elementRef} className={`tabular-nums font-mono ${className}`}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
}
