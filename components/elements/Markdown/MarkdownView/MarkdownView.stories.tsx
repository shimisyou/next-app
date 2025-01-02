import { Meta, StoryObj } from '@storybook/react';
import MarkdownView from './MarkdownView';
const meta = {
  tags: ['autodocs'],
  component: MarkdownView,
} satisfies Meta<typeof MarkdownView>;

export default meta;

type Story = StoryObj<typeof meta>;

const markdown = `
# 見出し

**このマークダウンについて**

## 見出し2


## コードブロック

\`\`\`javascript
alert("アラート")
\`\`\`

## テーブル
| Header | Header |
|--------|--------|
| Cell   | Cell   |
| Cell   | Cell   |
| Cell   | Cell   |
`;

export const MarkdownViewComponent: Story = {
  args: {
    markdown: markdown,
  },
};
