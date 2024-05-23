import { ethers } from "ethers";

const CONTRACT_ID = "0x66C8fb8A70f046B9F2Aa217953ab57982268E812";

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
