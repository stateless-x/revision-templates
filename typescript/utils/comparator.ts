// ==========================================
// COMPARATOR — Sorting Logic
// ==========================================
//
// WHY THIS FILE EXISTS:
//   Custom sort logic shows up constantly. The comparator contract is
//   easy to forget under pressure. Drill it until the sign is intuitive.
//
// COMPARATOR CONTRACT:
//   (a, b) => number
//   Return NEGATIVE  →  a comes BEFORE b
//   Return ZERO      →  a and b are equal (order doesn't matter)
//   Return POSITIVE  →  a comes AFTER b
//
// WHAT TO IMPLEMENT:
//
//   numberComparator(a, b): number
//     — Ascending order
//     — Tip: return a - b  (negative when a < b → a goes first)
//
//   numberComparatorDesc(a, b): number
//     — Descending order
//     — Tip: return b - a  (flip it)
//
//   stringComparator(a, b): number
//     — Alphabetical order
//     — Tip: return a.localeCompare(b)
//
//   swap<T>(arr: T[], i: number, j: number): void
//     — Swap two elements in place using a temp variable
//     — Mutates the array, returns nothing
//     — This is the core move in Quick Sort, Bubble Sort, etc.
//
// EXAMPLE (swap):
//   arr = [1, 2, 3],  swap(arr, 0, 2)  →  arr is now [3, 2, 1]
// ==========================================

export type Comparator<T> = (a: T, b: T) => number;

export const numberComparator: Comparator<number> = (a, b) => {
  // TODO: return a - b
};

export const numberComparatorDesc: Comparator<number> = (a, b) => {
  // TODO: return b - a
};

export const stringComparator: Comparator<string> = (a, b) => {
  // TODO: use a.localeCompare(b)
};

export const swap = <T>(arr: T[], i: number, j: number): void => {
  // TODO: swap arr[i] and arr[j] using a temp variable
};

// ==========================================
// TEST
// ==========================================
function testComparator() {
  console.log("--- TEST: Comparator Suite ---");
  let passedAll = true;

  const checkSign = (label: string, got: number, sign: "negative" | "zero" | "positive") => {
    const passed =
      sign === "negative" ? got < 0 :
      sign === "zero"     ? got === 0 :
                            got > 0;
    if (!passed) passedAll = false;
    console.log(`${passed ? "✅" : "❌"} ${label}`);
    if (!passed) console.log(`   Expected ${sign} | Got: ${got}`);
  };

  const check = (label: string, got: unknown, expected: unknown) => {
    const passed = JSON.stringify(got) === JSON.stringify(expected);
    if (!passed) passedAll = false;
    console.log(`${passed ? "✅" : "❌"} ${label}`);
    if (!passed) console.log(`   Expected: ${JSON.stringify(expected)} | Got: ${JSON.stringify(got)}`);
  };

  // --- numberComparator (ascending) ---
  checkSign("numberComparator(1, 2) → negative  (1 before 2)", numberComparator(1, 2), "negative");
  checkSign("numberComparator(2, 1) → positive  (2 after 1)",  numberComparator(2, 1), "positive");
  checkSign("numberComparator(1, 1) → zero",                   numberComparator(1, 1), "zero");

  check("Array.sort ascending:  [3,1,4,2] → [1,2,3,4]",
    [...[3, 1, 4, 2]].sort(numberComparator), [1, 2, 3, 4]);
  check("Array.sort ascending with negatives: [-1,3,-3,0] → [-3,-1,0,3]",
    [...[-1, 3, -3, 0]].sort(numberComparator), [-3, -1, 0, 3]);

  // --- numberComparatorDesc (descending) ---
  checkSign("numberComparatorDesc(1, 2) → positive (1 after 2 in desc)",  numberComparatorDesc(1, 2), "positive");
  checkSign("numberComparatorDesc(2, 1) → negative (2 before 1 in desc)", numberComparatorDesc(2, 1), "negative");
  checkSign("numberComparatorDesc(1, 1) → zero",                          numberComparatorDesc(1, 1), "zero");

  check("Array.sort descending: [3,1,4,2] → [4,3,2,1]",
    [...[3, 1, 4, 2]].sort(numberComparatorDesc), [4, 3, 2, 1]);

  // --- stringComparator ---
  checkSign("stringComparator('a', 'b') → negative", stringComparator("a", "b"), "negative");
  checkSign("stringComparator('b', 'a') → positive", stringComparator("b", "a"), "positive");
  checkSign("stringComparator('a', 'a') → zero",     stringComparator("a", "a"), "zero");

  check("Array.sort strings: ['banana','apple','cherry'] → alphabetical",
    [...["banana", "apple", "cherry"]].sort(stringComparator), ["apple", "banana", "cherry"]);

  // --- swap ---
  const a = [1, 2, 3];
  swap(a, 0, 2);
  check("swap(arr, 0, 2) on [1,2,3] → [3,2,1]", a, [3, 2, 1]);

  const b = [5, 10];
  swap(b, 0, 1);
  check("swap(arr, 0, 1) on [5,10] → [10,5]", b, [10, 5]);

  const c = [7];
  swap(c, 0, 0);
  check("swap same index → no change", c, [7]);

  const d = [1, 2, 3, 4, 5];
  swap(d, 1, 3);
  check("swap(arr, 1, 3) on [1,2,3,4,5] → [1,4,3,2,5]", d, [1, 4, 3, 2, 5]);

  console.log("---------------------------------");
  console.log(passedAll ? "ALL COMPARATOR TESTS PASSED!" : "SOME TESTS FAILED");
  console.log("---------------------------------\n");
}

testComparator();
