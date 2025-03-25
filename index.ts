// import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

// const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
// const walletAddress = new PublicKey("5u2zs1S8R9z3sfMp5XiaXqtZZmMadLCULyBrVLz5RTvo");

// // Fetch transactions
// async function fetchTransactions() {
//   const signatures = await connection.getSignaturesForAddress (walletAddress);
  
//   const transactions = await Promise.all(
//     signatures.map(async (sig) => {
//       return await connection.getTransaction(sig.signature, { commitment: "confirmed" });
//     })
//   );

//   console.log(...transactions);
// }

// fetchTransactions();

import * as web3 from "@solana/web3.js";

(async () => {
  const solana = new web3.Connection(web3.clusterApiUrl("devnet"), "confirmed");
  const address = new web3.PublicKey('5u2zs1S8R9z3sfMp5XiaXqtZZmMadLCULyBrVLz5RTvo')
  const txSignature = "5uUvxLh3GTSV4cay8N76Y7yTRuCtNBL3WtVSp4Ujw2GzK44ZMda1hiYijGknGVqeiKZQLwzP24yGECn3Ad5xD3Lc";
  console.log(await solana.getTransaction(txSignature, { commitment: "confirmed" }));
  console.log(await solana.getBalance(address))
  // Fetch transaction details
  // const txDetails = await solana.get(txSignature, { commitment: "confirmed" });
  const amountInLamports = 0.1 * web3.LAMPORTS_PER_SOL;
  console.log("amount in lamports:", amountInLamports);
  // console.log(txDetails);
  console.log("version:", await solana.getVersion());
  console.log("current block hash", await solana.getLatestBlockhash());
  console.log("block height", await solana.getBlockHeight());
})();
