// ==========================================
// QUICK SORT
// ==========================================
//
// PROBLEM:
//   Given an unsorted array of numbers, return a new sorted array
//   in ascending order using the QuickSort algorithm.
//
// TIME:  O(n log n) average  |  O(n²) worst case
// SPACE: O(n)
//
// EXAMPLE:
//   Input:  [3, 1, 4, 2]
//   Output: [1, 2, 3, 4]
// ==========================================

function quickSort(arr: number[]): number[] {
  // TODO
}

// ==========================================
// TEST
// ==========================================
function testQuickSort() {
  console.log("--- TEST: Quick Sort Suite ---");

  const testCases = [
    { input: [3, 1, 4, 2],      expected: [1, 2, 3, 4],      desc: "Basic unsorted" },
    { input: [],                 expected: [],                 desc: "Empty array" },
    { input: [5],                expected: [5],                desc: "Single element" },
    { input: [1, 2, 3, 4],      expected: [1, 2, 3, 4],      desc: "Already sorted" },
    { input: [4, 3, 2, 1],      expected: [1, 2, 3, 4],      desc: "Reverse sorted" },
    { input: [3, 1, 2, 1, 3],   expected: [1, 1, 2, 3, 3],   desc: "Duplicates" },
    { input: [-3, 0, -1, 2, 1], expected: [-3, -1, 0, 1, 2], desc: "Negatives and zero" },
  ];

  let passedAll = true;
  testCases.forEach(({ input, expected, desc }, index) => {
    const result = quickSort([...input]);
    const passed = JSON.stringify(result) === JSON.stringify(expected);
    if (!passed) passedAll = false;
    console.log(`${passed ? "✅" : "❌"} Case #${index + 1}: ${desc}`);
    if (!passed) console.log(`   Expected: [${expected}] | Got: [${result}]`);
  });

  console.log(passedAll ? "\nALL PASSED" : "\nSOME FAILED");
}

testQuickSort();
