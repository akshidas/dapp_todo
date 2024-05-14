import { Box, Checkbox, FormControlLabel, Stack } from "@mui/material";
import React from "react";
import useGetTasks from "./hooks/use-get-tasks";

const Tasks = ({ taskCount }) => {
  const tasks = useGetTasks(taskCount);

  return (
    <Stack spacing={1} justifyContent="center">
      {tasks.map(({ id, content, completed }) => {
        return (
          <Box>
            <FormControlLabel
              sx={{
                width: "min-content",
                whiteSpace: "nowrap",
              }}
              onChange={(_, checked) => {
                console.log(checked);
              }}
              key={id}
              label={content}
              control={<Checkbox checked={completed} />}
            />
          </Box>
        );
      })}
    </Stack>
  );
};

export default Tasks;
