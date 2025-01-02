import { Meta, StoryObj } from '@storybook/react';
import { cardsData } from '../../mocks/cardsData';
import { Card } from '../../types';
import { TCGCard } from './TCGCard';

// モックデータ
const mockCard: Card = {
  id: 1,
  name: 'Sample Card',
  rarity: 'common',
  img: './cards/series1/09.png',
};

/**

 * ## rarity
 * - common: 最もレアリティが低いカード
 * - rare: 通常レアリティのカード
 * - super-rare: 中間レアリティのカード
 * - ultra-rare: 最高レアリティのカード
 */
const meta: Meta<typeof TCGCard> = {
  component: TCGCard,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'カード自体を表示するコンポーネント',
  },
};

export default meta;

type Story = StoryObj<typeof TCGCard>;

/**
- 最もレアリティが低いカード
**/
export const Common: Story = {
  args: {
    card: {
      ...mockCard,
      rarity: 'common',
      name: 'Common Card',
      img: cardsData.common[0].img,
    },
  },
};

/**
- 通常レアリティのカード
**/
export const Rare: Story = {
  args: {
    card: {
      ...mockCard,
      rarity: 'rare',
      name: 'Rare Card',
      img: cardsData.rare[0].img,
    },
  },
};

/**
- 中間レアリティのカード
- 反射するキラエフェクト付き
**/
export const SuperRare: Story = {
  args: {
    card: {
      ...mockCard,
      rarity: 'super-rare',
      name: 'Super Rare Card',
      img: cardsData.superRare[0].img,
    },
  },
};

/**
- 最高レアリティのカード
- 余白も金色
- 反射するキラエフェクト付き
**/
export const UltraRare: Story = {
  args: {
    card: {
      ...mockCard,
      rarity: 'ultra-rare',
      name: 'Ultra Rare Card',
      img: cardsData.ultraRare[0].img,
    },
  },
};
