// ==========================================
// QUICK SORT
// ==========================================
//
// PROBLEM:
//   Given an unsorted array of numbers, return a new sorted array
//   in ascending order using the QuickSort algorithm.
//
// APPROACH:
//   1. Base case: if the array has 0 or 1 element, return it as-is
//   2. Choose a pivot (random index works well to avoid worst-case)
//   3. Partition the array into three buckets:
//        left  — elements LESS THAN pivot
//        equal — elements EQUAL TO pivot
//        right — elements GREATER THAN pivot
//   4. Recursively sort left and right, then combine:
//        [...quickSort(left), ...equal, ...quickSort(right)]
//
// TIME:  O(n log n) average  |  O(n²) worst case (sorted input + bad pivot)
// SPACE: O(n)  — new arrays created at each level of recursion
//
// EXAMPLE:
//   Input:  [3, 1, 4, 2]
//   Output: [1, 2, 3, 4]
// ==========================================

function quickSort(arr: number[]): number[] {
  // TODO: Implement recursive quicksort with random pivot selection
}

// ==========================================
// TEST
// ==========================================
function testQuickSort() {
  console.log("--- TEST: Quick Sort Suite ---");

  const testCases = [
    { input: [3, 1, 4, 2],       expected: [1, 2, 3, 4],       desc: "Basic unsorted array" },
    { input: [],                  expected: [],                  desc: "Empty array → empty result" },
    { input: [5],                 expected: [5],                 desc: "Single element → as-is" },
    { input: [1, 2, 3, 4],       expected: [1, 2, 3, 4],       desc: "Already sorted → no change" },
    { input: [4, 3, 2, 1],       expected: [1, 2, 3, 4],       desc: "Reverse sorted → still works" },
    { input: [3, 1, 2, 1, 3],    expected: [1, 1, 2, 3, 3],    desc: "Duplicates handled correctly" },
    { input: [-3, 0, -1, 2, 1],  expected: [-3, -1, 0, 1, 2],  desc: "Negative numbers and zero" },
  ];

  let passedAll = true;

  testCases.forEach(({ input, expected, desc }, index) => {
    const result = quickSort([...input]);
    const passed = JSON.stringify(result) === JSON.stringify(expected);
    if (!passed) passedAll = false;
    console.log(`${passed ? "✅" : "❌"} Case #${index + 1}: ${desc}`);
    if (!passed) {
      console.log(`   Expected: [${expected}] | Got: [${result}]`);
    }
  });

  console.log("---------------------------------");
  console.log(passedAll ? "ALL QUICKSORT TESTS PASSED!" : "SOME TESTS FAILED");
  console.log("---------------------------------\n");
}

testQuickSort();
