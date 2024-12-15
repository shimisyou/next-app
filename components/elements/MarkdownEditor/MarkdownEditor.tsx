import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

type MarkdownEditorProps = {
  defaultValue: string;
  placeholder?: string;
  onChange?: (value?: string) => void;
};

export const MarkdownEditor = ({
  defaultValue,
  placeholder,
  onChange,
}: MarkdownEditorProps) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (val?: string) => {
    setValue(val || "");
    if (onChange) {
      onChange(val);
    }
  };

  return (
    <MDEditor
      value={value}
      textareaProps={{
        placeholder: placeholder,
      }}
      onChange={handleChange}
      style={{
        minHeight: "300px",
      }}
    />
  );
};
