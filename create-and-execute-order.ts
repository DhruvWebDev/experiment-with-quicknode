import { clusterApiUrl, Connection, Keypair, VersionedTransaction } from "@solana/web3.js";
const connection = new Connection(clusterApiUrl("mainnet-beta",))
const wallet = Keypair.generate();
const createOrderResponse = await (
    await fetch('https://api.jup.ag/recurring/v1/createOrder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: wallet.publicKey.toBase58(),
            inputMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
            outputMint: "So11111111111111111111111111111111111111112",
            params: {
                time: {
                    inAmount: 104000000, // Raw amount of input token to deposit now (before decimals)
                    numberOfOrders: 2, // Total number of orders to execute
                    interval: 86400, // Time between each order in unix seconds
                    minPrice: null, // Minimum price or null
                    maxPrice: null, // Maximum price or null
                    startAt: null, // Unix timestamp of start time or null - null starts immediately
                },
            },
        }),
    })
).json();


const transactionBase64 = createOrderResponse.transaction

// Deserialize the transaction
const transaction = VersionedTransaction.deserialize(Buffer.from(transactionBase64, 'base64'));

// Sign the transaction
transaction.sign([wallet]);

// Serialize the transaction to base64 format
const signedTransaction = Buffer.from(transaction.serialize()).toString('base64');


const executeResponse = await (
    await fetch('https://api.jup.ag/recurring/v1/execute', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            signedTransaction: signedTransaction,
            requestId: createOrderResponse.requestId,
        }),
    })
).json();


//Manually executing the tx
const txBase64 = createOrderResponse.transaction
//A raw serialized transaction cannot be modified or signed directly.
//Deserializing converts it back into a VersionedTransaction object, allowing you to:

const tx = VersionedTransaction.deserialize(Buffer.from(transactionBase64, 'base64'));

tx.sign([wallet]);

const txBinary = tx.serialize();

const blockhashInfo = await connection.getLatestBlockhashAndContext({ commitment: "finalized" });

const signature = await connection.sendRawTransaction(txBinary, {
    maxRetries: 1,
    skipPreflight: true
});

const confirmation = await connection.confirmTransaction({
    signature,
    blockhash: blockhashInfo.value.blockhash,
    lastValidBlockHeight: blockhashInfo.value.lastValidBlockHeight,
}, "finalized");

if (confirmation.value.err) {
    throw new Error(`Transaction failed: ${JSON.stringify(confirmation.value.err)}\n\nhttps://solscan.io/tx/${signature}`);
} else console.log(`Transaction successful: https://solscan.io/tx/${signature}`);

/**
 * 🔹 Pre-Signed Transaction (sendRawTransaction)

You don't control the transaction creation (it comes from an API like Jupiter or a backend).

You only sign and send the already constructed transaction.

Used for DEX swaps, arbitrage bots, gasless transactions.

Normal Signing (sign() & sendTransaction())

You fully control the transaction (you create, sign, and send it).

You can modify instructions, add custom logic, or include multiple actions.

Used for wallets, manual transfers, and dApp interactions.

 */