// ==========================================
// FREQUENCY MAP — Most Frequent Element
// ==========================================
//
// PROBLEM:
//   Given an array of numbers, return the element that appears the most.
//   Return null if the array is empty.
//   Assume there is always a single clear winner (no ties).
//
// TIME:  O(n)
// SPACE: O(k)  — k = number of unique values
//
// EXAMPLE:
//   Input:  [1, 2, 2, 3, 3, 3]
//   Output: 3
// ==========================================

function findMostFrequent(ids: number[]): number | null {
  // TODO
}

// ==========================================
// TEST
// ==========================================
function testFrequency() {
  console.log("--- TEST: Frequency Map Suite ---");

  const testCases = [
    { input: [1, 2, 2, 3, 3, 3], expected: 3,    desc: "Basic — element appearing most" },
    { input: [],                  expected: null,  desc: "Empty array → null" },
    { input: [7],                 expected: 7,     desc: "Single element → that element" },
    { input: [5, 5, 5, 5],        expected: 5,     desc: "All same → that element" },
    { input: [-1, -2, -2, -3],    expected: -2,    desc: "Negative numbers" },
  ];

  let passedAll = true;
  testCases.forEach(({ input, expected, desc }, index) => {
    const result = findMostFrequent(input);
    const passed = result === expected;
    if (!passed) passedAll = false;
    console.log(`${passed ? "✅" : "❌"} Case #${index + 1}: ${desc}`);
    if (!passed) console.log(`   Expected: ${expected} | Got: ${result}`);
  });

  console.log(passedAll ? "\nALL PASSED" : "\nSOME FAILED");
}

testFrequency();
