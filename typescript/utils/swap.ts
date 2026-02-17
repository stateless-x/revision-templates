// ==========================================
// SWAP
// ==========================================
//
// DRILL:
//   In-place swap is the core move in Quick Sort, Bubble Sort,
//   and selection problems.
//
// IMPLEMENT:
//   swap<T>(arr: T[], i: number, j: number): void
//   — Swap arr[i] and arr[j] in place
//   — Mutates the array, returns nothing
//
// EXAMPLE:
//   arr = [1, 2, 3],  swap(arr, 0, 2)  →  arr is now [3, 2, 1]
// ==========================================

export const swap = <T>(arr: T[], i: number, j: number): void => {
  // TODO
};

// ==========================================
// TEST
// ==========================================
function test() {
  console.log("--- TEST: Swap ---");
  let pass = true;

  const check = (label: string, got: unknown, expected: unknown) => {
    const ok = JSON.stringify(got) === JSON.stringify(expected);
    if (!ok) pass = false;
    console.log(`${ok ? "✅" : "❌"} ${label}`);
    if (!ok) console.log(`   Expected: ${JSON.stringify(expected)} | Got: ${JSON.stringify(got)}`);
  };

  const a = [1, 2, 3]; swap(a, 0, 2);
  check("swap first and last:  [1,2,3] → [3,2,1]",     a, [3, 2, 1]);

  const b = [5, 10]; swap(b, 0, 1);
  check("swap two elements:    [5,10]  → [10,5]",       b, [10, 5]);

  const c = [7]; swap(c, 0, 0);
  check("swap same index:      [7]     → [7]",           c, [7]);

  const d = [1, 2, 3, 4, 5]; swap(d, 1, 3);
  check("swap middle:  [1,2,3,4,5] → [1,4,3,2,5]",     d, [1, 4, 3, 2, 5]);

  console.log(pass ? "\nALL PASSED" : "\nSOME FAILED");
}

test();
