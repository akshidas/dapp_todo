import { useEffect } from "react";
import { useTodoListContract } from "../../../../../../store/todo-list-contract-provider";
import handleUpdate from "./utils/handle-update";

const useUpdateTask = (updateTask) => {
  const todoListContract = useTodoListContract();

  const toggleStatus = (id) => async () => {
    try {
      await todoListContract.markComplete(id);
    } catch (err) {
      console.log(err);
    }
  };

  const toggledEventHandler = (id, _, completed) =>
    updateTask(handleUpdate(id.toString(), completed));

  useEffect(() => {
    if (todoListContract) {
      todoListContract.on("Toggled", toggledEventHandler);
    }
  }, [todoListContract]);

  return toggleStatus;
};

export default useUpdateTask;
