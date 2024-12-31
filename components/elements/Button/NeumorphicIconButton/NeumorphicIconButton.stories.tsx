import type { Meta, StoryObj } from '@storybook/react';

import HomeIcon from '@mui/icons-material/Home';
import NeumorphicIconButton from './NeumorphicIconButton';

const meta = {
  title: 'components/elements/Button/NeumorphicIconButton',
  component: NeumorphicIconButton,
  tags: ['autodocs'],
  argTypes: {
    isInset: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof NeumorphicIconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isInset: false,
    children: <HomeIcon sx={{ color: '#444', fontSize: { xs: 28, md: 36 } }} />,
  },
};

export const Inset: Story = {
  args: {
    isInset: true,
    children: <HomeIcon sx={{ color: '#444', fontSize: { xs: 28, md: 36 } }} />,
  },
};
