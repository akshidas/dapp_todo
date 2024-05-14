import { useEffect, useState } from "react";
import { useEthereum } from "../../ethereum-provider";
import connectTodoListContract from "../utils/connect-todo-list-contract";
import abi from "./abi.json";

const useConnectTodoList = () => {
  const ethereum = useEthereum();
  const [todoListContract, setTodoListContract] = useState(null);

  const connect = async () => {
    try {
      await ethereum.send("eth_requestAccounts", []);
    } catch (err) {
      console.log(err);
      alert("Failed to retrieve addresses");
    }

    try {
      const signer = await ethereum.getSigner();
      setTodoListContract(connectTodoListContract(signer, abi));
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    if (ethereum) {
      connect();
    }
  }, [ethereum]);

  return todoListContract;
};

export default useConnectTodoList;
