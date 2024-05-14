import { Container, Divider, Typography } from "@mui/material";
import React from "react";
import Tasks from "./components/tasks";
import AddTask from "./components/tasks/add-task";
import useGetTaskCount from "./hooks/use-get-task-count";

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
