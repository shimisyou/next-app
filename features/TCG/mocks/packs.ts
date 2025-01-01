import { Pack } from '../types';
import { cardsData } from './cardsData';

// ベースURLをパブリック環境変数から取得
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || '/next-app/storybook';

// レアリティマッピング
const rarityMapping = {
  ultraRare: 'ultra-rare',
  superRare: 'super-rare',
  rare: 'rare',
  common: 'common',
} as const;

type InternalRarity = keyof typeof rarityMapping;

// ローカルストレージのカウンターキー
const LOCAL_STORAGE_COUNTER_KEY = 'globalCardIdCounter';

// 一意なIDを生成
const generateUniqueId = (): number => {
  if (typeof window === 'undefined') {
    // サーバーサイドでは固定値を返す
    return Math.floor(Math.random() * 100000);
  }
  const currentCounter = parseInt(
    localStorage.getItem(LOCAL_STORAGE_COUNTER_KEY) || '0',
    10
  );
  const newCounter = currentCounter + 1;
  localStorage.setItem(LOCAL_STORAGE_COUNTER_KEY, newCounter.toString());
  return newCounter;
};

// ランダムなレアリティを生成
const generateRandomRarity = (): InternalRarity => {
  const random = Math.random();
  if (random <= 0.01) return 'ultraRare'; // 1%
  if (random <= 0.05) return 'superRare'; // 5%
  if (random <= 0.1) return 'rare'; // 10%
  return 'common'; // 残りは common
};

// ランダムなカードを取得
const getRandomCard = (rarity: InternalRarity) => {
  const cards = cardsData[rarity];
  const randomIndex = Math.floor(Math.random() * cards.length);
  return cards[randomIndex];
};

// カードデータを生成
export const generateCards = (cardCount: number) => {
  return Array.from({ length: cardCount }, () => {
    const internalRarity = generateRandomRarity();
    const card = getRandomCard(internalRarity);
    return {
      id: generateUniqueId(), // 一意なIDを生成
      name: card.name,
      rarity: rarityMapping[internalRarity],
      img: `${BASE_URL}${card.img}`,
    };
  });
};

// モックパックを生成
export const mockPacks: Pack[] = Array.from({ length: 10 }, () => {
  const packId = generateUniqueId();
  return {
    id: packId,
    name: `Pack ${packId}`,
    img: {
      front: {
        url: `${BASE_URL}/cards/series1/pack-front.png`,
        alt: `Front of Pack ${packId}`,
      },
      back: {
        url: `${BASE_URL}/cards/series1/pack-back.png`,
        alt: `Back of Pack ${packId}`,
      },
    },
    cards: generateCards(5), // 5枚固定
  };
});

// 関数版のモックパック生成ロジック
export const generateMockPacks = (
  packCount: number = 10,
  cardCount: number = 5
): Pack[] => {
  return Array.from({ length: packCount }, () => {
    const packId = generateUniqueId();
    return {
      id: packId,
      name: `Pack ${packId}`,
      img: {
        front: {
          url: `${BASE_URL}/cards/series1/pack-front.png`,
          alt: `Front of Pack ${packId}`,
        },
        back: {
          url: `${BASE_URL}/cards/series1/pack-back.png`,
          alt: `Back of Pack ${packId}`,
        },
      },
      cards: generateCards(cardCount),
    };
  });
};
