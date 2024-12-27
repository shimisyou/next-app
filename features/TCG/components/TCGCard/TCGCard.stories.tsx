import { Meta, StoryObj } from '@storybook/react';
import { Card } from '../../types';
import { TCGCard } from './TCGCard';

// モックデータ
const mockCard: Card = {
  id: 1,
  name: 'Card',
  rarity: 'common',
  img: {
    url: './cards/series1/09.png',
    alt: 'Sample Card Image',
  },
};

const meta: Meta<typeof TCGCard> = {
  title: 'features/TCG/TCGCard',
  component: TCGCard,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof TCGCard>;

// レアリティごとのストーリー定義
export const Common: Story = {
  args: {
    card: { ...mockCard, rarity: 'common' },
    onClick: () => console.log('Common card clicked'),
  },
};

export const Rare: Story = {
  args: {
    card: { ...mockCard, rarity: 'rare' },
    onClick: () => console.log('Rare card clicked'),
  },
};

export const SuperRare: Story = {
  args: {
    card: { ...mockCard, rarity: 'super-rare' },
    onClick: () => console.log('SuperRare card clicked'),
  },
};

export const UltraRare: Story = {
  args: {
    card: { ...mockCard, rarity: 'ultra-rare' },
    onClick: () => console.log('Ultra-Rare card clicked'),
  },
};
