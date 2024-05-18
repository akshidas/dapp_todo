import { ethers } from "ethers";

const CONTRACT_ID = "0x1c642DF538e5C78a14244D4Dc4f4595376d71Dc1";

const connectTodoListContract = (signer, abi) => {
  try {
    return new ethers.Contract(CONTRACT_ID, abi, signer);
  } catch (err) {
    console.error(err);
    throw new Error("Failed to connect to TodoList Contract", CONTRACT_ID);
  }
};

export default connectTodoListContract;
