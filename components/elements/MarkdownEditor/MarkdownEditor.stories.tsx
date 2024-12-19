import { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";
import { MarkdownEditor } from "./MarkdownEditor";

const meta = {
  title: "components/elements/MarkdownEditor",
  tags: ["autodocs"],
  component: MarkdownEditor,
} satisfies Meta<typeof MarkdownEditor>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MarkdownEditorComponent: Story = {
  args: {
    defaultValue: "",
    placeholder: "markdown形式で入力",
    onChange: fn(),
  },
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);

    await step("初期値を検証", async () => {
      const textArea = canvas.getByRole("textbox");
      expect(textArea).toHaveValue(args.defaultValue);
    });

    await step("新しい値を入力", async () => {
      const textArea = canvas.getByRole("textbox");
      await userEvent.type(textArea, "This is a test.");
      expect(textArea).toHaveValue(`${args.defaultValue}This is a test.`);
    });

    await step("onChangeに値が渡されている確認", async () => {
      expect(args.onChange).toHaveBeenLastCalledWith(
        `${args.defaultValue}This is a test.`
      );
    });
  },
};
