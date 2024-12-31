import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';
import Sidebar from './Sidebar';

const meta = {
  component: Sidebar,
  args: {
    isOpen: true,
    toggleSidebar: fn(),
  },
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
