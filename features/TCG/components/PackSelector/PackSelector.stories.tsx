import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { mockPacks } from '../../mocks/packs';
import { PackSelector } from './PackSelector';

const meta: Meta<typeof PackSelector> = {
  title: 'features/TCG/PackSelector',
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

    // モック関数に渡された引数が選択されたパックであるかを確認
    const selectedPack = args.packs[0]; // 初期状態で最初のパックが選択されている想定
    expect(args.onOpenPack).toHaveBeenCalledWith(selectedPack);
  },
};
