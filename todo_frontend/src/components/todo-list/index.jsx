import { Container, Divider, Typography } from "@mui/material";
import React from "react";
import useGetTaskCount from "./hooks/use-get-task-count";
import Tasks from "./tasks";
import AddTask from "./tasks/components/add-task";

const TodoList = () => {
  const [taskCount, getTaskCount] = useGetTaskCount("");

  return (
    <Container maxWidth="sm">
      <Typography textAlign="center" variant="h6">
        Task Count: {taskCount}
      </Typography>
      <Divider />
      <Tasks taskCount={taskCount} />
      <Divider />
      <AddTask getTaskCount={getTaskCount} />
    </Container>
  );
};

export default TodoList;
