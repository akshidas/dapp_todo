import useGetTasks from "./use-get-tasks";
import useUpdateTask from "./use-update-task";

const useTask = (taskIds = 0) => {
  const [tasks, setTasks] = useGetTasks(taskIds);
  const toggleStatus = useUpdateTask((newTask) => setTasks(newTask));

  return { tasks, toggleStatus };
};

export default useTask;
