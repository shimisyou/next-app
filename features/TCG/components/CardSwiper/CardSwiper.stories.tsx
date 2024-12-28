import { Meta, StoryObj } from '@storybook/react';
import { generateCards } from '../../mocks/packs';
import { CardSwiper } from './CardSwiper';

const meta: Meta<typeof CardSwiper> = {
  title: 'Components/CardSwiper',
  component: CardSwiper,
  args: {
    cards: generateCards(1, 5),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
