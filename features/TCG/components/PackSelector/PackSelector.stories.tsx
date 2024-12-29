import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { mockPacks } from '../../mocks/packs';
import PackSelector from './PackSelector';

const meta: Meta<typeof PackSelector> = {
  title: 'features/TCG/PackSelector/PackSelector',
  component: PackSelector,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    packs: mockPacks,
    onOpenPack: fn(),
    onSlideChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // ボタンを取得
    const openButton = await canvas.findByRole('button', { name: /開封する/i });

    // ボタンをクリック
    await userEvent.click(openButton);

    // モック関数が呼ばれたかを確認
    expect(args.onOpenPack).toHaveBeenCalledTimes(1);
  },
};
