// ==========================================
// TWO SUM
// ==========================================
//
// PROBLEM:
//   Given an array of numbers and a target, return the INDICES of the
//   two numbers that add up to the target.
//   Assume exactly one solution exists. Do not use the same element twice.
//
// TIME:  O(n)
// SPACE: O(n)
//
// EXAMPLE:
//   Input:  nums = [2, 7, 11, 15],  target = 9
//   Output: [0, 1]   (nums[0] + nums[1] = 2 + 7 = 9)
// ==========================================

function twoSum(nums: number[], target: number): number[] | undefined {
  // TODO
}

// ==========================================
// TEST
// ==========================================
function testTwoSum() {
  console.log("--- TEST: Two Sum Suite ---");

  const testCases = [
    { nums: [2, 7, 11, 15], target: 9, expected: [0, 1], desc: "Basic" },
    { nums: [3, 2, 4],      target: 6, expected: [1, 2], desc: "Answer not at indices [0,1]" },
    { nums: [3, 3],         target: 6, expected: [0, 1], desc: "Same value at two indices" },
    { nums: [-3, 4, 3, 90], target: 0, expected: [0, 2], desc: "Negatives summing to zero" },
    { nums: [0, 4, 3, 0],   target: 0, expected: [0, 3], desc: "Two zeros, target 0" },
  ];

  let passedAll = true;
  testCases.forEach(({ nums, target, expected, desc }, index) => {
    const result = twoSum(nums, target);
    const passed = JSON.stringify(result) === JSON.stringify(expected);
    if (!passed) passedAll = false;
    console.log(`${passed ? "✅" : "❌"} Case #${index + 1}: ${desc}`);
    if (!passed) console.log(`   Expected: [${expected}] | Got: [${result}]`);
  });

  console.log(passedAll ? "\nALL PASSED" : "\nSOME FAILED");
}

testTwoSum();
