import React, { useState, useEffect } from 'react';

/**
 * TypewriterText
 * Smoothly types through performance slogans and permanently locks onto
 * the final strong slogan without blinking cursor artifacts.
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
    <span className={`inline-block min-h-[1.15em] transition-all duration-500 ${isFinished ? 'text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.35)]' : 'text-neutral-400'}`}>
      <span>{currentText}</span>
      {!isFinished && <span className="typewriter-cursor" aria-hidden="true" />}
    </span>
  );
}
