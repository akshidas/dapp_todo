import { useEffect, useState } from "react";
import { useTodoListContract } from "../../../../../../store/todo-list-contract-provider";
import getTasks from "./get-tasks";

const useGetTasks = (taskCount = 0) => {
  const todoListContract = useTodoListContract();
  const [tasks, setTasks] = useState([]);
  const fetchTasks = async (taskCount = 0) => {
    try {
      const tasks = await getTasks(taskCount, todoListContract.tasks);
      setTasks(tasks);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (taskCount > 0) {
      fetchTasks(taskCount);
    }
  }, [taskCount]);

  return tasks;
};

export default useGetTasks;
