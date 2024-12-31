import { Pack } from '../types';

// ベースURLをパブリック環境変数から取得
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || '/next-app/storybook';

// ランダムなレアリティを生成
const generateRandomRarity = ():
  | 'ultra-rare'
  | 'rare'
  | 'super-rare'
  | 'common' => {
  const random = Math.random();
  if (random <= 0.01) return 'ultra-rare'; // 1%
  if (random <= 0.1) return 'super-rare'; // 10%
  if (random <= 0.5) return 'rare'; // 30%
  return 'common'; // 残りは common
};

// カードデータを生成
export const generateCards = (packId: number, cardCount: number) => {
  return Array.from({ length: cardCount }, (_, index) => {
    const cardId = packId * 100 + index + 1; // idをnumberに変更
    const randomImageNumber = Math.floor(Math.random() * 10) + 1; // 1～10の範囲でランダムな数字を生成
    return {
      id: cardId,
      name: `Card ${cardId}`,
      rarity: generateRandomRarity(),
      img: `${BASE_URL}/cards/series1/${String(randomImageNumber).padStart(
        2,
        '0'
      )}.png`,
    };
  });
};

export const mockPacks: Pack[] = Array.from({ length: 10 }, (_, index) => {
  const packId = index + 1;
  return {
    id: packId,
    name: `Pack ${packId}`,
    img: {
      front: {
        url: `${BASE_URL}/cards/series1/09.png`,
        alt: `Front of Pack ${packId}`,
      },
      back: {
        url: `${BASE_URL}/pack1.png`,
        alt: `Back of Pack ${packId}`,
      },
    },
    cards: generateCards(packId, 5), // 5枚固定
  };
});

// 関数版のモックパック生成ロジック
export const generateMockPacksWithCacheBuster = (): Pack[] => {
  const cacheBuster = `?cb=${Date.now()}`; // 現在のタイムスタンプを追加
  return Array.from({ length: 10 }, (_, index) => {
    const packId = index + 1;
    return {
      id: packId,
      name: `Pack ${packId}`,
      img: {
        front: {
          url: `${BASE_URL}/cards/series1/09.png${cacheBuster}`,
          alt: `Front of Pack ${packId}`,
        },
        back: {
          url: `${BASE_URL}/pack1.png${cacheBuster}`,
          alt: `Back of Pack ${packId}`,
        },
      },
      cards: generateCards(packId, 5),
    };
  });
};
