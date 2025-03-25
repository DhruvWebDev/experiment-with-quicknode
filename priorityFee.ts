import * as web3 from "@solana/web3.js"

async function main(){
    const solana = new web3.Connection(web3.clusterApiUrl("devnet"), "confirmed");
    const address = new web3.PublicKey('5u2zs1S8R9z3sfMp5XiaXqtZZmMadLCULyBrVLz5RTvo')
    //compute unit
    //Returns IX that xan be appended to the transaction to set the compute unit price
    const cu = web3.ComputeBudgetProgram.setComputeUnitPrice({
        microLamports: 380000 // 0.38 lamports per unit
    });
    const cuLimit = web3.ComputeBudgetProgram.setComputeUnitLimit({
        units: 200000
    });
    console.log(solana);
    console.log("cu", cu);
    console.log("cuLimit", cuLimit);
} 

main();