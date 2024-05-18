import { Box, Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

const Task = ({ task, onToggle }) => {
  const { id, content, completed } = task;
  return (
    <Box>
      <FormControlLabel
        sx={{
          width: "min-content",
          whiteSpace: "nowrap",
        }}
        onChange={onToggle(id)}
        key={id}
        label={content}
        control={<Checkbox checked={completed} />}
      />
    </Box>
  );
};

export default Task;
