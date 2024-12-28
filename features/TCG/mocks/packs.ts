import { Pack } from '../types';

// ランダムなレアリティを生成
const generateRandomRarity = ():
  | 'ultra-rare'
  | 'rare'
  | 'super-rare'
  | 'common' => {
  const random = Math.random();
  if (random <= 0.001) return 'ultra-rare'; // 0.1%
  if (random <= 0.2) return 'super-rare'; // 20%
  if (random <= 0.5) return 'rare'; // 30%
  return 'common'; // 残りは common
};

// カードデータを生成
export const generateCards = (packId: number, cardCount: number) => {
  return Array.from({ length: cardCount }, (_, index) => {
    const cardId = `${packId * 100 + index + 1}`; // idをstringに変更
    const randomImageNumber = Math.floor(Math.random() * 10) + 1; // 1～10の範囲でランダムな数字を生成
    return {
      id: cardId,
      name: `Card ${cardId}`,
      rarity: generateRandomRarity(),
      img: `/cards/series1/${String(randomImageNumber).padStart(2, '0')}.png`, // ランダムな画像番号
    };
  });
};

// パックデータを生成
export const mockPacks: Pack[] = Array.from({ length: 10 }, (_, index) => {
  const packId = index + 1;
  return {
    id: packId,
    name: `Pack ${packId}`,
    img: {
      front: {
        url: `/pack1.png`,
        alt: `Front of Pack ${packId}`,
      },
      back: {
        url: `/pack2.png`,
        alt: `Back of Pack ${packId}`,
      },
    },
    cards: generateCards(packId, 5), // 5枚固定
  };
});
