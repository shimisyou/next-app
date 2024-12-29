import type { Meta, StoryObj } from '@storybook/react';

import NeumorphicIconButton from './NeumorphicIconButton';

const meta = {
  component: NeumorphicIconButton,
} satisfies Meta<typeof NeumorphicIconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
