import { Checkbox, FormControlLabel, Stack } from "@mui/material";
import Remove from "./components/remove";

const Task = ({ task, onToggle }) => {
  const { id, content, completed } = task;

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
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
      <Remove id={id} />
    </Stack>
  );
};

export default Task;
