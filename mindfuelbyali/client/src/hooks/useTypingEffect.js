import { useEffect, useState } from 'react';

/**
 * Creates a looped typing/deleting text effect.
 * @param {string[]} words
 * @returns {{displayedText: string, isTyping: boolean}}
 */
function useTypingEffect(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!Array.isArray(words) || words.length === 0) {
      return undefined;
    }

    const currentWord = words[wordIndex % words.length];
    let timeoutId;

    if (isTyping) {
      if (displayedText.length < currentWord.length) {
        timeoutId = window.setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, 80);
      } else {
        timeoutId = window.setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else if (displayedText.length > 0) {
      timeoutId = window.setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length - 1));
      }, 40);
    } else {
      setIsTyping(true);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => window.clearTimeout(timeoutId);
  }, [displayedText, isTyping, wordIndex, words]);

  return { displayedText, isTyping };
}

export default useTypingEffect;
