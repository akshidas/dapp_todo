import { Box, Checkbox, FormControlLabel, Stack } from "@mui/material";
import React from "react";
import useTask from "./hooks/use-tasks";
import useGetTasks from "./hooks/use-tasks/use-get-tasks";

const Tasks = ({ taskCount }) => {
  const { tasks, toggleStatus } = useTask(taskCount);

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
              onChange={toggleStatus(id)}
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
