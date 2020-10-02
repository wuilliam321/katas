function maxProfit(prices: number[]): number {
  let hasStock = false;
  let profit = 0;

  for (let i = 0; i <= prices.length; i++) {
    const curr = prices[i];
    const next = prices[i + 1];

    if (next === undefined && hasStock) {
      hasStock = false;
      profit = profit + curr;
      console.log(curr, next, 'last sell', profit);
      break;
    }

    if (curr < next && !hasStock) {
      hasStock = true;
      profit = profit - curr;
      if (curr === 0) {
        // profit++;
      }
      console.log(curr, next, 'buy', profit);
    }

    if (curr > next && hasStock) {
      hasStock = false;
      profit = profit + curr;
      console.log(curr, next, 'sell', profit);
    }
  }
  return profit;
};

const prices = [2,1,2,0,1];
//const prices = [ 7,6,4,3,1 ];
//const prices = [1, 2, 3, 4, 5];
//const prices = [7,1,5,3,6,4];
const out = maxProfit(prices);
console.log(prices, out);
