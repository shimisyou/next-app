import type { Meta, StoryObj } from '@storybook/react';

import { ContentModal } from './ContentModal';

const meta = {
  component: ContentModal,
  args: {
    children: 'コンテンツ領域',
    open: true,
    onClose: () => {},
  },
} satisfies Meta<typeof ContentModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
