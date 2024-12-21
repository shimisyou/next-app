import { Meta, StoryObj } from '@storybook/react';
import { CoverFlowSwiper } from './CoverFlowSwiper';

const meta = {
  title: 'components/elements/CoverFlowSwiper',
  component: CoverFlowSwiper,
} satisfies Meta<typeof CoverFlowSwiper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BannerSwiperComponent: Story = {
  args: {
    content: ['test1', 'test2', 'test3'],
  },
  render: (args) => {
    return <CoverFlowSwiper content={args.content}></CoverFlowSwiper>;
  },
};
