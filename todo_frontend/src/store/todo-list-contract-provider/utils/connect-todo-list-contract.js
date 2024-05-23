import { CONTRACT_ID } from "config";
import { ethers } from "ethers";

const connectTodoListContract = (signer, abi) => {
  try {
    return new ethers.Contract(CONTRACT_ID, abi, signer);
  } catch (err) {
    console.error(err);
    console.log(err);
    throw new Error("Failed to connect to TodoList Contract", CONTRACT_ID);
  }
};

export default connectTodoListContract;
