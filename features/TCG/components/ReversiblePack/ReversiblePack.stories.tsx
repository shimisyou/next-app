import type { Meta, StoryObj } from '@storybook/react';

import { ReversiblePack } from './ReversiblePack';

const meta = {
  title: 'features/TCG/ReversiblePack',
  component: ReversiblePack,
} satisfies Meta<typeof ReversiblePack>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ReversiblePackComponent: Story = {
  args: {
    packImg: {
      front: {
        url: 'https://placehold.jp/b8e26a/ffffff/200x300.png?text=%E3%83%91%E3%83%83%E3%82%AF%EF%BC%88%E8%A1%A8%EF%BC%89',
        alt: '表',
      },
      back: {
        url: 'https://placehold.jp/b7c3a2/ffffff/200x300.png?text=%E3%83%91%E3%83%83%E3%82%AF%EF%BC%88%E8%A3%8F%EF%BC%89',
        alt: '裏',
      },
    },
  },
};
