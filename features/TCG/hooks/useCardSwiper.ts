import { useState } from 'react';
import { Card } from '../types';
import { saveCardsToLocalStorage } from '../utils/localStorage';

export const useCardSwiper = (cards: Card[], onClose: () => void) => {
  const [isEnd, setIsEnd] = useState(false);

  const handleReset = () => {
    onClose();
    saveCardsToLocalStorage(cards);
    setIsEnd(false);
  };

  const handleReachEnd = () => {
    setIsEnd(true);
  };

  return {
    isEnd,
    handleReset,
    handleReachEnd,
  };
};
