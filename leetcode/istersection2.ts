function intersect(nums1: number[], nums2: number[]): number[] {
  // return nums1.filter(n => {
  //   let index = nums2.indexOf(n)
  //   if (index === -1) { return false }
  //   nums2.splice(index, 1)
  //   return true
  // });

  let min = nums1;
  let max = nums2
  if (nums2.length < nums1.length) {
    min = nums2;
    max = nums1
  }

  const result = [] as number[];
  for (let i = 0; i < max.length; ++i) {
    for (let j = 0; j < min.length; ++j) {
      if (min[j] !== undefined && max[i] === min[j]) {
        result.push(...min.splice(j, 1));
        break;
      }
    }
  }
  return result;
};

console.log(intersect([-2147483648, 1, 2, 3], [1, -2147483648, -2147483648]));
