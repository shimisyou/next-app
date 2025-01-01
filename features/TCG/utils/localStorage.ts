import { Card } from '../types';

const LOCAL_STORAGE_COUNTER_KEY = 'globalCardIdCounter'; // IDカウンターキー
const LOCAL_STORAGE_KEY = 'collectedCards';

type StoredCard = Card & { count: number; createdAt: string }; // 作成日時を持つカード型

// カードをローカルストレージに保存
export const saveCardsToLocalStorage = (cards: Card[]) => {
  const existingCards: StoredCard[] = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEY) || '[]'
  );

  const updatedCards = [...existingCards];

  cards.forEach((newCard) => {
    const existingCard = updatedCards.find(
      (card) => card.img === newCard.img && card.rarity === newCard.rarity
    );

    if (existingCard) {
      existingCard.count += 1; // 重複する場合はカウントを更新
    } else {
      updatedCards.push({
        ...newCard,
        count: 1,
        createdAt: new Date().toISOString(), // 新規カードに作成日時を設定
      });
    }
  });

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedCards));
};

// ローカルストレージからカードを取得
export const getCardsFromLocalStorage = (): StoredCard[] => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
};

// ローカルストレージから特定のカードを削除
export const deleteCardFromLocalStorage = (cardId: number) => {
  const existingCards: StoredCard[] = getCardsFromLocalStorage();
  const updatedCards = existingCards.filter((card) => card.id !== cardId);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedCards));
};

// ローカルストレージをクリア（全削除）
export const clearLocalStorage = () => {
  localStorage.removeItem(LOCAL_STORAGE_COUNTER_KEY); // IDカウンターを削除
  localStorage.removeItem(LOCAL_STORAGE_KEY);
};
