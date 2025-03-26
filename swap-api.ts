import { API_URLS } from "@raydium-io/raydium-sdk-v2";
import axios from "axios";

// //slippageBps --> The number of basis points you can tolerate to lose during time of execution. e.g. 1% = 100bps
// // const quoteResponse = await (
// //     await fetch(
// //         'https://api.jup.ag/swap/v1/quote?inputMint=So11111111111111111111111111111111111111112&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&amount=1000000000&slippageBps=50'
// //     )
// //   ).json();
// // console.log(JSON.stringify(quoteResponse, null, 2));

// async function main(){
//   const res = await fetch("https://quote-proxy.jup.ag/quote?inputMint=So11111111111111111111111111111111111111112&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&amount=1000000000&slippageBps=50&swapMode=ExactIn&onlyDirectRoutes=false&asLegacyTransaction=false&maxAccounts=64&computeAutoSlippage=true&minimizeSlippage=false", {
//     "headers": {
//       "accept": "*/*",
//       "accept-language": "en-US,en;q=0.9",
//       "priority": "u=1, i",
//       "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
//       "sec-ch-ua-mobile": "?0",
//       "sec-ch-ua-platform": "\"Windows\"",
//       "sec-fetch-dest": "empty",
//       "sec-fetch-mode": "cors",
//       "sec-fetch-site": "same-site",
//       "Referer": "https://jup.ag/",
//       "Referrer-Policy": "strict-origin-when-cross-origin"
//     },
//     "body": null,
//     "method": "GET"
//   });
//   const output =  await res.json()
//   console.log("jup", output.outAmount);
// }
// setInterval(main, 2000)
let counter = 0

async function init({ inputMint, outputMint, amount, slippage, txVersion }: { 
  inputMint: string; 
  outputMint: string; 
  amount: number; 
  slippage: number; 
  txVersion: string; 
}) {
  const { data: swapResponse } = await axios.get<any>( // Use correct type instead of `any`
      `${API_URLS.SWAP_HOST}/compute/swap-base-in?inputMint=${inputMint}&outputMint=${outputMint}&amount=${amount}&slippageBps=${slippage * 100}&txVersion=${txVersion}`
  ); 
  counter++
  console.log("ray", swapResponse.data.outputAmount);
}

setInterval(() => init({
  inputMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
  outputMint: "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R",
  amount: 10000000,
  slippage: 0.1,
  txVersion: "V0"
}), 200);