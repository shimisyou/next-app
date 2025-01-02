import { Meta, StoryObj } from '@storybook/react';
import { expect, screen, userEvent, within } from '@storybook/test';
import PackSwiperContainer from './PackSwiperContainer';

import { mockPacks } from '../../mocks/packs';

const meta = {
  component: PackSwiperContainer,
  args: {
    packs: mockPacks,
  },
} satisfies Meta<typeof PackSwiperContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    packs: mockPacks,
    fallback: null,
  },
};

export const WithInteraction: Story = {
  args: {
    packs: mockPacks,
    fallback: <div>Loading...</div>,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('パックを開く', async () => {
      const openButton = await canvas.getByRole('button', {
        name: /開封/i,
      });
      await userEvent.click(openButton);
    });

    await step('ナビゲーションボタンでスライドを進める', async () => {
      const modal = await screen.findByRole('dialog');
      const nextButton = within(modal).getByRole('button', {
        name: /めくる/i,
      });
      expect((await screen.findAllByRole('img')).length).toBe(
        mockPacks[0].cards.length
      );
      for (const {} of mockPacks[0].cards) {
        await userEvent.click(nextButton);
        await new Promise((resolve) => setTimeout(resolve, 500)); // Optional delay for better simulation
      }

      const endButton = within(modal).getByRole('button', {
        name: /終了/i,
      });
      expect(endButton).toBeInTheDocument();
    });

    await step('終了ボタンでモーダルが閉じること', async () => {
      const endButton = screen.getByRole('button', { name: /終了/i });
      await userEvent.click(endButton);
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  },
};
