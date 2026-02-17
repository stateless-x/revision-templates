// ==========================================
// MAP UTILS — Frequency & Grouping
// ==========================================
//
// WHY THIS FILE EXISTS:
//   Map syntax trips people up under pressure.
//   The pattern `map.get(key) || default` appears in almost every
//   array/hash problem. Drill it here until it's automatic.
//
// WHAT TO IMPLEMENT:
//
//   createFrequencyMap<T>(items: T[]): Map<T, number>
//     — Count how many times each item appears
//     — Key: the item   Value: its count
//     — Pattern to remember: map.set(item, (map.get(item) || 0) + 1)
//
//   groupBy<T, K>(items: T[], keyGetter: (item: T) => K): Map<K, T[]>
//     — Group items by a derived key (e.g. group bookings by city)
//     — Key: result of keyGetter(item)   Value: array of matching items
//     — Pattern to remember: const group = map.get(key) || []; group.push(item); map.set(key, group)
//
// TIME:  O(n) for both
// SPACE: O(n) for both
//
// EXAMPLE (createFrequencyMap):
//   Input:  ["a", "b", "a", "c", "b", "a"]
//   Output: Map { "a" => 3, "b" => 2, "c" => 1 }
//
// EXAMPLE (groupBy):
//   Input:  [{ city: "BKK", name: "H1" }, { city: "NYC", name: "H2" }, { city: "BKK", name: "H3" }]
//           keyGetter: item => item.city
//   Output: Map { "BKK" => [H1, H3], "NYC" => [H2] }
// ==========================================

export const createFrequencyMap = <T>(items: T[]): Map<T, number> => {
  // TODO: iterate items, use (map.get(item) || 0) + 1 to safely increment
};

export const groupBy = <T, K>(items: T[], keyGetter: (item: T) => K): Map<K, T[]> => {
  // TODO: derive key via keyGetter, get or create array, push item, re-set on map
};

// ==========================================
// TEST
// ==========================================
function testMapUtils() {
  console.log("--- TEST: Map Utils Suite ---");
  let passedAll = true;

  const check = (label: string, got: unknown, expected: unknown) => {
    const passed = JSON.stringify(got) === JSON.stringify(expected);
    if (!passed) passedAll = false;
    console.log(`${passed ? "✅" : "❌"} ${label}`);
    if (!passed) console.log(`   Expected: ${JSON.stringify(expected)} | Got: ${JSON.stringify(got)}`);
  };

  // --- createFrequencyMap ---
  const freq1 = createFrequencyMap(["a", "b", "a", "c", "b", "a"]);
  check("Frequency: 'a' appears 3 times", freq1.get("a"), 3);
  check("Frequency: 'b' appears 2 times", freq1.get("b"), 2);
  check("Frequency: 'c' appears 1 time",  freq1.get("c"), 1);

  const freq2 = createFrequencyMap<number>([]);
  check("Frequency: empty array → empty map (size 0)", freq2.size, 0);

  const freq3 = createFrequencyMap([1, 1, 1]);
  check("Frequency: all same → single key with count 3", freq3.get(1), 3);
  check("Frequency: all same → map has 1 unique key", freq3.size, 1);

  // --- groupBy ---
  const bookings = [
    { city: "BKK", name: "H1" },
    { city: "NYC", name: "H2" },
    { city: "BKK", name: "H3" },
  ];
  const grouped = groupBy(bookings, (b) => b.city);
  check("GroupBy: BKK group has 2 items",  grouped.get("BKK")?.length, 2);
  check("GroupBy: NYC group has 1 item",   grouped.get("NYC")?.length, 1);
  check("GroupBy: total unique groups = 2", grouped.size, 2);

  const emptyGrouped = groupBy<{ city: string }, string>([], (b) => b.city);
  check("GroupBy: empty input → empty map", emptyGrouped.size, 0);

  const singles = [{ type: "A", val: 1 }, { type: "B", val: 2 }, { type: "C", val: 3 }];
  const groupedSingles = groupBy(singles, (s) => s.type);
  check("GroupBy: all different keys → 3 groups each size 1", groupedSingles.size, 3);

  console.log("---------------------------------");
  console.log(passedAll ? "ALL MAP UTILS TESTS PASSED!" : "SOME TESTS FAILED");
  console.log("---------------------------------\n");
}

testMapUtils();
