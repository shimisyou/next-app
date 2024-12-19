import { Box } from "@mui/material";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
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
  const [value, setValue] = useState(defaultValue);
  const handleChange = (value?: string) => {
    setValue(value || "");
    onChange(value || "");
  };

  return (
    <Box data-color-mode="light">
      <MDEditor
        value={value}
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
