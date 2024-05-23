import { useEffect, useState } from "react";
import { useTodoListContract } from "store/todo-list-contract-provider";

const useGetTasks = (taskIds = []) => {
  const todoListContract = useTodoListContract();
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async (taskIds = []) => {
    if (taskIds.length === 0) return;
    let tasks = [];

    try {
      for (let i = 0; i < taskIds.length; i++) {
        const task = await todoListContract.tasks(taskIds[i]);
        const [_id, content, completed] = task;
        tasks.push({
          id: _id.toString(),
          content,
          completed,
        });
      }

      setTasks(tasks);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (taskIds.length > 0) {
      fetchTasks(taskIds);
    }
  }, [taskIds]);

  return [tasks, setTasks];
};

export default useGetTasks;
