import { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import PackSelectorContainer from './PackSelectorContainer';

import { mockPacks } from '../../TCG/mocks/packs';

const meta = {
  title: 'Features/TCG/PackSelectorContainer',
  component: PackSelectorContainer,
  args: {
    packs: mockPacks,
  },
} satisfies Meta<typeof PackSelectorContainer>;

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

    await step('パックを選択', async () => {
      const packImages = await canvas.getAllByAltText(/Front of Pack/i);
      await userEvent.click(packImages[0]); // 最初のパックを選択
    });

    await step('パックを開く', async () => {
      const openButton = await canvas.getByRole('button', {
        name: /開封する/i,
      });
      await userEvent.click(openButton);
    });

    await step('カードの内容を確認', async () => {
      for (const card of mockPacks[0].cards) {
        const cardName = await canvas.findByText(card.name);
        expect(cardName).toBeInTheDocument();
      }
    });

    await step('カードを閉じる', async () => {
      const closeButton = await canvas.getByTestId('CloseIcon');
      await userEvent.click(closeButton);
    });
  },
};
