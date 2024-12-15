import { SampleForm } from "./SampleForm";
import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within, fn } from "@storybook/test";

const meta = {
  title: "features/sample/SampleForm",
  component: SampleForm,
} satisfies Meta<typeof SampleForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SampleFormComponent: Story = {
  args: {
    defaultValue: "",
    placeholder: "markdown形式で入力",
    onChange: fn(),
  },
  play: async ({ canvasElement, args, step }) => {},
};
