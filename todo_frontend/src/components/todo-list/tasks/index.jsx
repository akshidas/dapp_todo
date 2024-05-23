import { Stack } from "@mui/material";
import Map from "components/map";
import React from "react";
import Task from "./components/task";
import useTask from "./hooks/use-tasks";

const Tasks = ({ taskIds }) => {
  const { tasks, toggleStatus } = useTask(taskIds);

  return (
    <Stack spacing={1} justifyContent="center">
      <Map
        list={tasks}
        render={(task) => (
          <Task task={task} onToggle={toggleStatus} key={task.id} />
        )}
      />
    </Stack>
  );
};

export default Tasks;
