import { clusterApiUrl, Connection, Keypair, PublicKey } from "@solana/web3.js";

(async () => {
  const connection = new Connection(clusterApiUrl("testnet"), "confirmed");
  const wallet = Keypair.generate().publicKey;
  console.log("pubkey", wallet.toBase58());
  const requestAirdrop = await connection.requestAirdrop(wallet, 10);
  const airdrop = await connection.requestAirdrop(wallet, 10);
  console.log("wallet", wallet);
  // const link = 
  // connection.onAccountChange(
  //   wallet.publicKey, 
  //   (updatedAccountInfo, context) => 
  //     console.log("Updated account info: ", updatedAccountInfo),
  //   "confirmed"
  // );
})();