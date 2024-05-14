import { ethers } from "ethers";
import { createContext, useContext } from "react";

const ethereumContext = createContext(null);

const EthereumProvider = ({ children }) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  return (
    <ethereumContext.Provider value={provider}>
      {children}
    </ethereumContext.Provider>
  );
};

export const useEthereum = () => useContext(ethereumContext);

export default EthereumProvider;
