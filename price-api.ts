const priceResponse = await fetch(
    'https://api.jup.ag/price/v2?ids=JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN,So11111111111111111111111111111111111111112'
);

const priceData = await priceResponse.json();

console.log(priceData);

const priceResponseShowExtraInfo = await fetch(
    'https://api.jup.ag/price/v2?ids=JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN,So11111111111111111111111111111111111111112&showExtraInfo=true'
);

const priceDataShowExtraInfo = await priceResponseShowExtraInfo.json();
  
console.log(JSON.stringify(priceDataShowExtraInfo, null, 2));