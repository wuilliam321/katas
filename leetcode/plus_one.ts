function plusOne(digits: number[]): number[] {
  // // Backward Iterate digits
  // for (let i = digits.length - 1; i >= 0; i--) {
  //  // +1 for each value
  //  digits[i]++;
  //  // if value is less than 10 exit loop
  //  if (digits[i] < 10) {
  //    break;
  //  }
  //  // else set current digit to 0
  //  // go to next position
  //  digits[i] = 0;

  //  // if i === 0 and digits[i] >= 10
  //  if (i === 0) {
  //    digits.unshift(1);
  //  }
  // }
  // return digits;

  let idx = digits.length - 1;
  let acc = 1;
  const result = [];

  while (idx >= 0) {
    digits[idx] = digits[idx] + acc;
    if (digits[idx] > 9) {
      acc = digits[idx] - 9;
      digits[idx] = 0;
    } else {
      acc = 0;
    }
    result.unshift(digits[idx]);
    idx--;
  }
  if (acc > 0) {
    result.unshift(acc);
  }

  return result;
};

console.log(plusOne([9, 9]));
