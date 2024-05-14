import { useEffect, useState } from "react";
import { useTodoListContract } from "../../../store/todo-list-contract-provider";

const useGetTaskCount = () => {
  const todoListContract = useTodoListContract();
  const [taskCount, setTaskCount] = useState("");

  const getTaskCount = async () => {
    const taskCount = await todoListContract.taskCount();
    setTaskCount(taskCount.toString());
  };

  useEffect(() => {
    if (todoListContract) getTaskCount();
  }, [todoListContract]);

  return [taskCount, getTaskCount];
};

export default useGetTaskCount;
