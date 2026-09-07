import React, { useState, useEffect, useMemo } from 'react';

/**
 * TypewriterText
 * Smoothly types through performance slogans with ZERO layout shift (CLS).
 * Uses a CSS Grid invisible ghost reserver so the text below NEVER jumps or shifts.
 */
export default function TypewriterText({
  phrases = [
    'SCALES QUALIFIED PIPELINE',
    'OUTRANKS YOUR COMPETITION',
    'TURNS TRAFFIC INTO BUYERS',
    'MAXIMIZES MARKETING ROI',
    'DRIVES MEASURABLE REVENUE.'
  ],
  typeSpeed = 70,
  deleteSpeed = 32,
  pauseDelay = 1800,
  switchDelay = 350,
  stopAtEnd = true
}) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // Find the longest phrase to lock in the layout dimensions permanently
  const longestPhrase = useMemo(() => {
    return phrases.reduce((longest, current) =>
      current.length > longest.length ? current : longest,
      phrases[0] || ''
    );
  }, [phrases]);

  useEffect(() => {
    if (isFinished) return;

    let timer;
    const isLastPhrase = currentPhraseIndex === phrases.length - 1;
    const fullText = phrases[currentPhraseIndex];

    if (!isDeleting) {
      if (currentText.length < fullText.length) {
        timer = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, typeSpeed);
      } else {
        if (stopAtEnd && isLastPhrase) {
          setIsFinished(true);
          return;
        }
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDelay);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length - 1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        timer = setTimeout(() => {}, switchDelay);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typeSpeed, deleteSpeed, pauseDelay, switchDelay, stopAtEnd, isFinished]);

  return (
    <span className="relative inline-grid grid-cols-1 grid-rows-1 items-center justify-center text-center align-middle">
      {/* Invisible Ghost Element: Permanently locks height & width so text below never shifts */}
      <span
        className="invisible select-none pointer-events-none col-start-1 row-start-1 opacity-0"
        aria-hidden="true"
      >
        {longestPhrase}
      </span>

      {/* Live Animated Text */}
      <span
        className={`col-start-1 row-start-1 inline-flex items-center justify-center transition-colors duration-500 ${
          isFinished
            ? 'text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.35)]'
            : 'text-neutral-400'
        }`}
      >
        <span>{currentText || '\u00A0'}</span>
        {!isFinished && <span className="typewriter-cursor" aria-hidden="true" />}
      </span>
    </span>
  );
}
