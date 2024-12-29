import { Meta, StoryObj } from '@storybook/react';
import { expect, screen, userEvent, within } from '@storybook/test';
import { generateCards } from '../../mocks/packs';
import { CardSwiperContainer } from './CardSwiperContainer';

const meta: Meta<typeof CardSwiperContainer> = {
  title: 'features/TCG/CardSwiper/CardSwiperContainer',
  component: CardSwiperContainer,
  args: {
    cards: generateCards(1, 5),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithInteraction: Story = {
  args: {
    cards: generateCards(1, 5),
  },
  play: async ({  args, step }) => {
    await step('ナビゲーションボタンでスライドを進める', async () => {
      const modal = screen.getByRole('dialog');
      const nextButton = within(modal).getByRole('button', { name: /めくる/i });

      for (let i = 0; i < args.cards.length - 1; i++) {
        await userEvent.click(nextButton);
        await new Promise((resolve) => setTimeout(resolve, 500)); // Optional delay for better simulation
      }

      const endButton = within(modal).getByRole('button', { name: /終了/i });
      expect(endButton).toBeInTheDocument();
    });

    await step('終了ボタンでモーダルが閉じること', async () => {
      const endButton = screen.getByRole('button', { name: /終了/i });
      await userEvent.click(endButton);
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  },
};
