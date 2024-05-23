import { useState } from "react";
import { useTodoListContract } from "store/todo-list-contract-provider";

const useAddTask = (getTaskIds) => {
  const [taskContent, setTaskContent] = useState("");
  const todoListContract = useTodoListContract();

  const addTask = async () => {
    try {
      await (await todoListContract.addTask(taskContent)).wait();
      await getTaskIds();
      setTaskContent("");
    } catch (err) {
      console.log(err);
    }
  };

  return { taskContent, setTaskContent, addTask };
};

export default useAddTask;
