import { useEffect, useState } from 'react';
import { StoredCard } from '../types';

export const useCardManager = (initialCards: StoredCard[]) => {
  const [cards, setCards] = useState<StoredCard[]>([]);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortKey, setSortKey] = useState<keyof StoredCard>('name');
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    let filteredCards = initialCards;

    // フィルタリング
    if (filterText) {
      filteredCards = filteredCards.filter((card) =>
        card.name.toLowerCase().includes(filterText.toLowerCase())
      );
    }

    // ソート
    filteredCards = filteredCards.sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return sortOrder === 'asc' ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    setCards(filteredCards);
  }, [initialCards, filterText, sortKey, sortOrder]);

  const handleSort = (key: keyof StoredCard) => {
    const order = key === sortKey && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortKey(key);
    setSortOrder(order);
  };

  return {
    cards,
    filterText,
    setFilterText,
    sortOrder,
    sortKey,
    handleSort,
  };
};
