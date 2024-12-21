import { MarkdownEditor } from "@/components/elements/MarkdownEditor/MarkdownEditor";
import { Button, Stack, TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface SampleForm {
  title: string;
  markdown: string;
}

export const SampleForm = () => {
  const { control, handleSubmit, getValues } = useForm<SampleForm>({
    defaultValues: { markdown: "", title: "" },
  });

  const onSubmit: SubmitHandler<SampleForm> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={1} gap={1}>
        <Controller
          name="title"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <TextField
              label="タイトル"
              required
              defaultValue={getValues("title")}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          name="markdown"
          control={control}
          render={({ field }) => (
            <MarkdownEditor
              {...field}
              defaultValue={getValues("markdown")}
              onChange={field.onChange}
              placeholder="本文を入力してくだい"
            />
          )}
        />
      </Stack>
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Submit
      </Button>
    </form>
  );
};
