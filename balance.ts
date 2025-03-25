import { Connection, PublicKey } from "@solana/web3.js";

async function getTokenBalances(publicKey) {
    const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");
    const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
      new PublicKey(publicKey),
      { programId: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA") }
    );
    console.log(tokenAccounts)
  
    return tokenAccounts.value.map((account) => ({
      mint: account.account.data.parsed.info.mint,
      amount: account.account.data.parsed.info.tokenAmount.uiAmount,
    }));
  }

  getTokenBalances("95DU3vnFgNCNjADq9k4KYewMXoNviYZ76NNjZwqRhCLR").then(console.log);

  async function getNFTs(publicKey) {
    const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");
    const nfts = await connection.getParsedTokenAccountsByOwner(
      new PublicKey(publicKey),
      { programId: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA") }
    );
  
    return nfts.value.filter(nft => nft.account.data.parsed.info.tokenAmount.uiAmount === 1);
  }
  
  getNFTs("95DU3vnFgNCNjADq9k4KYewMXoNviYZ76NNjZwqRhCLR").then(console.log);

  async function getTokenPrices(inputMints, outputMints) {
    const baseURL = "https://quote-api.jup.ag/v6/quote"
    const url = `https://quote-api.jup.ag/v6/quote?inputMints=${inputMints}\&outputMints=${outputMints}\&amount=100000000\&slippageBps=50`;
    const response = (await fetch(url)).json();
    return response;
}

  getTokenPrices("6vNf3Y9Q5z2Q9j4f1z1z1z1z1z1z1z1z1z1z1z1z1z", "So111111111111111111111111111111111111111111").then(console.log);
  