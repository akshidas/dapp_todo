import { ethers } from "ethers";

const connectTodoListContract = (signer, abi) => {
  const CONTRACT_ID = "0x1b0cd073c926B51B0Ff765bB6cE38E0D54ecce58";

  try {
    return new ethers.Contract(CONTRACT_ID, abi, signer);
  } catch (err) {
    console.error(err);
    throw new Error("Failed to connect to TodoList Contract", CONTRACT_ID);
  }
};

export default connectTodoListContract;
