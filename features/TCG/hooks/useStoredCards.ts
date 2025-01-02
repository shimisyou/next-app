import { Card } from '@/features/TCG/types';
import {
  clearLocalStorage,
  deleteCardFromLocalStorage,
  getCardsFromLocalStorage,
} from '@/features/TCG/utils/localStorage';
import { useEffect, useState } from 'react';

type StoredCard = Card & { count: number };

export const useStoredCards = () => {
  const [cards, setCards] = useState<StoredCard[]>([]);

  useEffect(() => {
    setCards(getCardsFromLocalStorage());
  }, []);

  const deleteCard = (cardId: number) => {
    deleteCardFromLocalStorage(cardId);
    setCards(getCardsFromLocalStorage());
  };

  const clearAll = () => {
    clearLocalStorage();
    setCards([]);
  };

  return { cards, deleteCard, clearAll };
};
