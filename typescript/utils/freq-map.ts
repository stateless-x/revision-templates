// ==========================================
// FREQ MAP
// ==========================================
//
// DRILL:
//   The get-or-default increment pattern using Map.
//   You will write this in almost every array/hash problem.
//
// IMPLEMENT:
//   createFrequencyMap<T>(items: T[]): Map<T, number>
//   — Count how many times each item appears
//
// TIME:  O(n)
// SPACE: O(k)  — k = number of unique items
//
// EXAMPLE:
//   createFrequencyMap(["a", "b", "a"])
//   → Map { "a" => 2, "b" => 1 }
// ==========================================

export const createFrequencyMap = <T>(items: T[]): Map<T, number> => {
  // TODO
};

// ==========================================
// TEST
// ==========================================
function test() {
  console.log("--- TEST: Frequency Map ---");
  let pass = true;

  const check = (label: string, got: unknown, expected: unknown) => {
    const ok = JSON.stringify(got) === JSON.stringify(expected);
    if (!ok) pass = false;
    console.log(`${ok ? "✅" : "❌"} ${label}`);
    if (!ok) console.log(`   Expected: ${JSON.stringify(expected)} | Got: ${JSON.stringify(got)}`);
  };

  const m = createFrequencyMap(["a", "b", "a", "c", "b", "a"]);
  check("'a' → 3",       m.get("a"), 3);
  check("'b' → 2",       m.get("b"), 2);
  check("'c' → 1",       m.get("c"), 1);
  check("3 unique keys", m.size,     3);

  const empty = createFrequencyMap<number>([]);
  check("empty input → size 0", empty.size, 0);

  const nums = createFrequencyMap([1, 1, 1]);
  check("all same → count 3", nums.get(1), 3);
  check("all same → 1 key",   nums.size,   1);

  console.log(pass ? "\nALL PASSED" : "\nSOME FAILED");
}

test();
