function containsDuplicate(nums: number[]): boolean {
//  while (nums.length > 0) {
//    const n = nums.pop();
//    for (let i = 0; i < nums.length; ++i) {
//      if (n === nums[i]) {
//        return true;
//      }
//    }
//  }
//
//  return false;
  const newSet = new Set<number>(nums);
  return newSet.size !== nums.length;

}

console.log(containsDuplicate([0, 1, 1]));
