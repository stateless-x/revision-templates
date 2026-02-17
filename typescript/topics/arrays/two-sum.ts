// ==========================================
// TWO SUM
// ==========================================
//
// PROBLEM:
//   Given an array of numbers and a target value, return the INDICES
//   of the two numbers that add up to the target.
//   Assume exactly one solution exists. Do not use the same element twice.
//
// APPROACH (Hash Map / One-Pass):
//   - For each number at index i:
//       1. Calculate complement = target - nums[i]
//       2. Check if complement already exists in the map
//          → If yes: return [map.get(complement), i]
//          → If no:  store nums[i] → i in the map and continue
//   - This avoids the O(n²) brute-force nested loop
//
// TIME:  O(n)  — single pass through the array
// SPACE: O(n)  — map can store up to n entries
//
// EXAMPLE:
//   Input:  nums = [2, 7, 11, 15],  target = 9
//   Output: [0, 1]   (because nums[0] + nums[1] = 2 + 7 = 9)
// ==========================================

function twoSum(nums: number[], target: number): number[] | undefined {
  // TODO: Use a Map to store (value → index) and check for complement on each iteration
}

// ==========================================
// TEST
// ==========================================
function testTwoSum() {
  console.log("--- TEST: Two Sum Suite ---");

  const testCases = [
    {
      nums: [2, 7, 11, 15],  target: 9,
      expected: [0, 1],
      desc: "Basic — first two elements sum to target",
    },
    {
      nums: [3, 2, 4],  target: 6,
      expected: [1, 2],
      desc: "Answer is NOT the first two elements",
    },
    {
      nums: [3, 3],  target: 6,
      expected: [0, 1],
      desc: "Same value at two different indices",
    },
    {
      nums: [-3, 4, 3, 90],  target: 0,
      expected: [0, 2],
      desc: "Negative numbers — sum to zero",
    },
    {
      nums: [0, 4, 3, 0],  target: 0,
      expected: [0, 3],
      desc: "Two zeros summing to target 0",
    },
  ];

  let passedAll = true;

  testCases.forEach(({ nums, target, expected, desc }, index) => {
    const result = twoSum(nums, target);
    const passed = JSON.stringify(result) === JSON.stringify(expected);
    if (!passed) passedAll = false;
    console.log(`${passed ? "✅" : "❌"} Case #${index + 1}: ${desc}`);
    if (!passed) {
      console.log(`   Expected: [${expected}] | Got: [${result}]`);
    }
  });

  console.log("---------------------------------");
  console.log(passedAll ? "ALL TWO SUM TESTS PASSED!" : "SOME TESTS FAILED");
  console.log("---------------------------------\n");
}

testTwoSum();
