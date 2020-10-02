function rotate(nums: number[], k: number): void {
  nums.forEach((_, i) => {
    if (i < k) {
      const n = nums.pop();
      if (n) {
        nums.unshift(n);
      }
    }
  });
}

function rotate2(nums: number[], k: number): void {
  nums
    .splice(nums.length - k, nums.length)
    .reverse()
    .forEach((n) => nums.unshift(n));
}

function rotate3(nums: number[], k: number): void {
  nums
    .splice(nums.length - k, nums.length)
    .concat(nums.splice(0, nums.length))
    .forEach((n) => nums.push(n));
}

const nums = [1, 2, 3, 4, 5, 6, 7];
rotate3(nums, 3);
console.log(nums);
