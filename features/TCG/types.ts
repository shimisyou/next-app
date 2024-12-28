type ReversibleImage = {
  front: PackImage;
  back: PackImage;
};

type PackImage = {
  url: string;
  alt: string;
};

type Card = {
  id: number;
  name: string;
  rarity: 'common' | 'super-rare' | 'rare' | 'ultra-rare';
  img: string;
};

type Pack = {
  id: number;
  name: string;
  img: ReversibleImage; // パックの画像情報
  cards: Card[]; // 含まれるカード
};

export type { Card, Pack, PackImage, ReversibleImage };
