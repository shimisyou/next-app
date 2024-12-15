import { Box } from "@mui/material";
import MDEditor from "@uiw/react-md-editor";

type MarkdownViewProps = {
  markdown: string;
};
const MarkdownView = ({ markdown }: MarkdownViewProps) => {
  return (
    <Box data-color-mode="light">
      <MDEditor.Markdown
        source={markdown}
        style={{
          padding: "20px",
        }}
      />
    </Box>
  );
};

export default MarkdownView;
