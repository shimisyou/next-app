import type { Meta, StoryObj } from '@storybook/react';

import NeumorphicButton from './NeumorphicButton';

const meta = {
  component: NeumorphicButton,
  tags: ['autodocs'],
  args: {
    text: 'ボタン',
  },
} satisfies Meta<typeof NeumorphicButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
