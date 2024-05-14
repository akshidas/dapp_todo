import TodoList from "./components/todo-list";
import EthereumProvider from "./store/ethereum-provider";
import TodoListContractProvider from "./store/todo-list-contract-provider";

function App() {
  return (
    <EthereumProvider>
      <TodoListContractProvider>
        <TodoList />
      </TodoListContractProvider>
    </EthereumProvider>
  );
}

export default App;
