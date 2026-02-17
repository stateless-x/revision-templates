// ==========================================
// FREQUENCY MAP — Most Frequent Element
// ==========================================
//
// PROBLEM:
//   Given an array of numbers, return the element that appears
//   the MOST times. If the array is empty, return null.
//   Assume there is always a single clear winner (no ties to handle).
//
// APPROACH:
//   - Use a Map<number, number> to count occurrences of each value
//   - Do a second pass over the map to find the entry with the max count
//   - Track the current winner and update when a higher count is found
//
// TIME:  O(n)  — two passes (build map + scan for max)
// SPACE: O(k)  — map size equals number of unique values k
//
// EXAMPLE:
//   Input:  [1, 2, 2, 3, 3, 3]
//   Output: 3  (appears 3 times)
// ==========================================

function findMostFrequent(ids: number[]): number | null {
  // TODO: Build a frequency map, then find the key with the highest count
}

// ==========================================
// TEST
// ==========================================
function testFrequency() {
  console.log("--- TEST: Frequency Map Suite ---");

  const testCases = [
    {
      input: [1, 2, 2, 3, 3, 3],
      expected: 3,
      desc: "Basic — element appearing most",
    },
    {
      input: [],
      expected: null,
      desc: "Empty array → null",
    },
    {
      input: [7],
      expected: 7,
      desc: "Single element → that element",
    },
    {
      input: [5, 5, 5, 5],
      expected: 5,
      desc: "All same element → that element",
    },
    {
      input: [-1, -2, -2, -3],
      expected: -2,
      desc: "Negative numbers supported",
    },
  ];

  let passedAll = true;

  testCases.forEach(({ input, expected, desc }, index) => {
    const result = findMostFrequent(input);
    const passed = result === expected;
    if (!passed) passedAll = false;
    console.log(`${passed ? "✅" : "❌"} Case #${index + 1}: ${desc}`);
    if (!passed) {
      console.log(`   Expected: ${expected} | Got: ${result}`);
    }
  });

  console.log("---------------------------------");
  console.log(passedAll ? "ALL FREQUENCY TESTS PASSED!" : "SOME TESTS FAILED");
  console.log("---------------------------------\n");
}

testFrequency();
