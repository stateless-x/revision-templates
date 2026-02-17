// ==========================================
// GROUP BY
// ==========================================
//
// DRILL:
//   Grouping items by a key — a Map where values are arrays.
//   Common in BI/data problems where you bucket records by a field.
//
// IMPLEMENT:
//   groupBy<T, K>(items: T[], keyGetter: (item: T) => K): Map<K, T[]>
//   — Group items by a derived key
//
// TIME:  O(n)
// SPACE: O(n)
//
// EXAMPLE:
//   groupBy([{city:"BKK",name:"H1"},{city:"NYC",name:"H2"},{city:"BKK",name:"H3"}], b => b.city)
//   → Map { "BKK" => [H1, H3], "NYC" => [H2] }
// ==========================================

export const groupBy = <T, K>(items: T[], keyGetter: (item: T) => K): Map<K, T[]> => {
  // TODO
};

// ==========================================
// TEST
// ==========================================
function test() {
  console.log("--- TEST: Group By ---");
  let pass = true;

  const check = (label: string, got: unknown, expected: unknown) => {
    const ok = JSON.stringify(got) === JSON.stringify(expected);
    if (!ok) pass = false;
    console.log(`${ok ? "✅" : "❌"} ${label}`);
    if (!ok) console.log(`   Expected: ${JSON.stringify(expected)} | Got: ${JSON.stringify(got)}`);
  };

  const bookings = [
    { city: "BKK", name: "H1" },
    { city: "NYC", name: "H2" },
    { city: "BKK", name: "H3" },
  ];
  const g = groupBy(bookings, (b) => b.city);
  check("BKK group size = 2", g.get("BKK")?.length, 2);
  check("NYC group size = 1", g.get("NYC")?.length, 1);
  check("total groups = 2",   g.size,               2);

  const empty = groupBy<{ city: string }, string>([], (b) => b.city);
  check("empty input → empty map", empty.size, 0);

  const allSame = [{ type: "X", v: 1 }, { type: "X", v: 2 }];
  check("all same key → 1 group of 2", groupBy(allSame, s => s.type).get("X")?.length, 2);

  console.log(pass ? "\nALL PASSED" : "\nSOME FAILED");
}

test();
