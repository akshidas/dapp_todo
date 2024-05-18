import { Button, Stack, TextField } from "@mui/material";
import React from "react";
import useAddTask from "./hooks/use-add-task";

const AddTask = ({ getTaskCount }) => {
  const { taskContent, setTaskContent, addTask } = useAddTask(getTaskCount);

  return (
    <Stack mt={3} spacing={1}>
      <TextField
        label="New Task"
        value={taskContent}
        onChange={(e) => setTaskContent(e.target.value)}
        fullWidth
      />
      <Button onClick={addTask} variant="contained" fullWidth>
        Add
      </Button>
    </Stack>
  );
};

export default AddTask;
