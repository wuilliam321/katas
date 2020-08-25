// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/727/
// Mine
function removeDuplicates(nums: number[]): number {
  let idx = 0;

  while (idx < nums.length) {
    const nextIdx = idx + 1;
    let curr = nums[idx];
    let next = nums[nextIdx];

    if (curr === next) {
      nums.splice(idx, 1);
    } else {
      idx++;
    }
  }

  return nums.length;
}

// Fastest
function removeDuplicates2(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }

    let i = 0;
    for (let j = 0; j < nums.length;j++) {
        if (nums[i] !== nums[j]) {
            i++;
            // This is the key, we do not need to splice
            // just first i elemets in the right order
            nums[i] = nums[j];
        }
    }

    return i + 1;
};

let a = [1, 2, 2, 2, 3];
removeDuplicates2(a);
console.log(a);
