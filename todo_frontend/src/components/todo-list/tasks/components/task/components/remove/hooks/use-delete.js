import { useTodoListContract } from "store/todo-list-contract-provider";

const useDelete = () => {
  const todoListContract = useTodoListContract();

  const handleRemove = (_id) => async () => {
    try {
      await todoListContract.removeTask(_id);
    } catch (err) {
      console.log(err);
    }
  };

  return handleRemove;
};

export default useDelete;
