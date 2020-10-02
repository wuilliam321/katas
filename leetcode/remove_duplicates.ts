// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/727/
// Mine
function removeDuplicates(arr: number[]): number {
  let idx = 0;

  while (idx < arr.length) {
    const nextIdx = idx + 1;
    let curr = arr[idx];
    let next = arr[nextIdx];

    if (curr === next) {
      arr.splice(idx, 1);
    } else {
      idx++;
    }
  }

  return arr.length;
}

// Fastest
function removeDuplicates2(arr: number[]): number {
    if (arr.length === 0) {
        return 0;
    }

    let i = 0;
    for (let j = 0; j < arr.length;j++) {
        if (arr[i] !== arr[j]) {
            i++;
            // This is the key, we do not need to splice
            // just first i elemets in the right order
            arr[i] = arr[j];
        }
    }

    return i + 1;
};

let a = [1, 2, 2, 2, 3];
removeDuplicates2(a);
console.log('theworsd', a);
