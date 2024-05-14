import { createContext } from "react";
import useConnectTodoList from "./hooks/use-connect-todo-list";

const todoListContractContext = createContext(null);

const TodoListContractProvider = ({ children }) => {
  const todoListContract = useConnectTodoList();
  return (
    <todoListContractContext.Provider value={todoListContract}>
      {children}
    </todoListContractContext.Provider>
  );
};

export const useTodoListContract = () =>
  useConnectTodoList(todoListContractContext);

export default TodoListContractProvider;
