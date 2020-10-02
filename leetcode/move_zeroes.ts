function moveZeroes(nums: number[]): void {
  // In reverse mode because length change not start
  for (let i = nums.length; i >= 0 ; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
}
const arr = [0, 0, 1];
moveZeroes(arr);
console.log(arr);
