// const { ethers } = require("ethers");

// // Connect to the local Ganache instance
// const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");

// // Function to get all addresses, their balances, and the chain ID
// async function getAddressesBalancesAndChainId() {
//   // Get the chain ID
//   const network = await provider.getNetwork();
//   console.log(`Chain ID: ${network.chainId}`);

//   // Get the list of accounts
//   const accounts = await provider.listAccounts();

//   // Fetch and print the balance for each account
//   for (const account of accounts) {
//     const balance = await provider.getBalance(account);
//     console.log(
//       `Address: ${account}, Balance: ${ethers.utils.formatEther(balance)} ETH`
//     );
//   }
// }

// getAddressesBalancesAndChainId().catch(console.error);

const ganache = require("ganache");

const test = async () => {
  const options = {};
  const provider = ganache.provider({
    chain: 1337,
    
  });
  const accounts = await provider.request({
    method: "eth_accounts",
    params: [],
  });
  console.log(accounts);
};

test();

// (0) 0x06810211941c4D87cF69F6b10E6d6e755a56FaBb (1000 ETH)
// (1) 0x7bE567b917f1A4E10889F264012B0B0042c0d20C (1000 ETH)
// (2) 0x2cbf05FE58E13D28EA2733f543F36b462832a7fA (1000 ETH)
// (3) 0x57f68b1141958e0D7290CBEd6B89f58689Bd6F43 (1000 ETH)
// (4) 0xbE6C4FE9590cfa9c4997b8297872cf41e2767e3e (1000 ETH)
// (5) 0x6e192FAF37F4aFDE00B3F403d57B2a620D1E5274 (1000 ETH)
// (6) 0x734ebe7D61B11738822170639ae80F84FD418cD2 (1000 ETH)
// (7) 0x840E470b03Ae8EF4417576839c55F7Ff7D59A737 (1000 ETH)
// (8) 0x52e326C5714b3b0Dd30Ee3BE2781FDCc8FB3688C (1000 ETH)
// (9) 0x1Ef5469bb8cD0eaf7C32f9dda236135A88211acA (1000 ETH)

// Private Keys
// ==================
// (0) 0x835ffb38777ac47d9fdecba98c4d40d7acf4c2daede5f491f0a29e20ab7922ad
// (1) 0x63af5734f495b51817b387cb59857ce7273c1b8e892002effc8a6976266b52c4
// (2) 0xfd7c54ce624e7ec9dd4b11dd209e0d003a268270c7162b9f1e4cdff21473d5fb
// (3) 0x4babd0d175d254b53e076343f23494fb5f547cd2239b9519602e1b21baafb0e0
// (4) 0xee8d1b5f4e7f694cb6bf98260b156ac36e31dd54fc90b4a7f9bca0e2d86af094
// (5) 0xc93b4fea043c544a045fa1e7cc803eed7907faa0b57c1c33e6aafbc079f85afb
// (6) 0x57c24131c5ff3fb64f99fbeb89d1bcea5a172f4695e623a59f1306e382aee9cc
// (7) 0x309ff893555972ffb837d219f75f3d80e5499f5b7ca50ef7989ac6a261f5bbf8
// (8) 0x1dde9cd6bc5059a1cc05d18ede60706a6eaf5c9547b1cc19dcc1b51b1ab5711e
// (9) 0xfa28eef629c06fa39a194fee0e6b2639340c3288e0df440d6785906300812612
