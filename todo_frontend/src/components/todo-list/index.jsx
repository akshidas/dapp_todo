import { Container, Divider, Typography } from "@mui/material";
import useGetTaskIds from "./hooks/use-get-task-ids";
import Tasks from "./tasks";
import AddTask from "./tasks/components/add-task";

const TodoList = () => {
  const [taskIds, getTaskIds] = useGetTaskIds();

  return (
    <Container maxWidth="sm">
      <Typography textAlign="center" variant="h6">
        Task Count: {taskIds.length}
      </Typography>
      <Divider />
      <Tasks taskIds={taskIds} />
      <Divider />
      <AddTask getTaskIds={getTaskIds} />
    </Container>
  );
};

export default TodoList;
