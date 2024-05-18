import useGetTasks from "./use-get-tasks";
import useUpdateTask from "./use-update-task";

const useTask = (taskCount = 0) => {
  const [tasks, setTasks] = useGetTasks(taskCount);
  const toggleStatus = useUpdateTask((newTask) => setTasks(newTask));

  return { tasks, toggleStatus };
};

export default useTask;
