import { Pack } from '../types';

// ランダムに色を生成
const generateRandomColor = (): string => {
  return Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, '0');
};

// ランダムなレアリティを生成
const generateRandomRarity = ():
  | 'ultra-rare'
  | 'rare'
  | 'uncommon'
  | 'common' => {
  const random = Math.random();
  if (random <= 0.001) return 'ultra-rare'; // 0.1%
  if (random <= 0.2) return 'rare'; // 20%
  if (random <= 0.5) return 'uncommon'; // 30%
  return 'common'; // 残りは common
};

// カードデータを生成
const generateCards = (packId: number, cardCount: number) => {
  return Array.from({ length: cardCount }, (_, index) => {
    const cardId = packId * 100 + index + 1;
    return {
      id: cardId,
      name: `Card ${cardId}`,
      rarity: generateRandomRarity(),
      img: {
        url: `https://placehold.jp/${generateRandomColor()}/ffffff/150x200.png?text=Card+${cardId}`,
        alt: `Card ${cardId}`,
      },
    };
  });
};

// パックデータを生成
export const mockPacks: Pack[] = Array.from({ length: 10 }, (_, index) => {
  const packId = index + 1;
  const baseColor = generateRandomColor(); // 基本色を生成
  return {
    id: packId,
    name: `Pack ${packId}`,
    img: {
      front: {
        url: `https://placehold.jp/${baseColor}/ffffff/200x300.png?text=Front+${packId}`,
        alt: `Front of Pack ${packId}`,
      },
      back: {
        url: `https://placehold.jp/${baseColor}/ffffff/200x300.png?text=Back+${packId}`,
        alt: `Back of Pack ${packId}`,
      },
    },
    cards: generateCards(packId, 5), // 5枚固定
  };
});
