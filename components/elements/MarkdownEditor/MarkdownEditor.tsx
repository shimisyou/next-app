import { Box } from "@mui/material";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

type MarkdownEditorProps = {
  defaultValue: string;
  placeholder?: string;
  onChange: (value?: string) => void;
};

export const MarkdownEditor = ({
  defaultValue,
  placeholder,
  onChange,
}: MarkdownEditorProps) => {
  const handleChange = (value?: string) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Box data-color-mode="light">
      <MDEditor
        value={defaultValue}
        textareaProps={{
          placeholder: placeholder,
        }}
        onChange={handleChange}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
      />
    </Box>
  );
};
