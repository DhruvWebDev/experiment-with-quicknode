import { clusterApiUrl, Connection, Keypair, PublicKey } from "@solana/web3.js";

(async () => {
  const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");
  const wallet = Keypair.generate();
  console.log("pubkey",  wallet.publicKey.toBase58());
  console.log("secretKey", wallet.secretKey.toBase64());
  console.log("balance", await connection.getBalance(new PublicKey(wallet.publicKey.toBase58())));
  
})();