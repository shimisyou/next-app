import type { Meta, StoryObj } from '@storybook/react';

import { ReversiblePack } from './ReversiblePack';

const meta = {
  component: ReversiblePack,
} satisfies Meta<typeof ReversiblePack>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ReversiblePackComponent: Story = {
  args: {
    packImg: {
      front: {
        url: './cards/series1/09.png',
        alt: '表',
      },
      back: {
        url: './pack1.png',
        alt: '裏',
      },
    },
  },
};
