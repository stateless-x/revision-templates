// ==========================================
// DE-DUPLICATION
// ==========================================
//
// PROBLEM:
//   Given an array of Booking objects, return a new array containing
//   only the FIRST occurrence of each unique booking by `id`.
//   All subsequent duplicates with the same `id` should be removed.
//
// APPROACH:
//   - Use a Set to track which IDs have already been seen
//   - Iterate through the array once (O(n))
//   - Only keep a booking if its ID has not been seen before
//
// TIME:  O(n)  — single pass through the array
// SPACE: O(n)  — Set grows with unique IDs
//
// EXAMPLE:
//   Input:  [{ id: "A", name: "H1" }, { id: "A", name: "H1" }, { id: "B", name: "H2" }]
//   Output: [{ id: "A", name: "H1" }, { id: "B", name: "H2" }]
// ==========================================

interface Booking {
  id: string;
  name: string;
}

function getUniqueBookings(bookings: Booking[]): Booking[] {
  // TODO: Implement using a Set to track seen IDs
}

// ==========================================
// TEST
// ==========================================
function testDedup() {
  console.log("--- TEST: De-duplication Suite ---");

  const testCases = [
    {
      input: [
        { id: "A", name: "H1" },
        { id: "A", name: "H1" },
        { id: "B", name: "H2" },
      ],
      expected: 2,
      desc: "Basic duplicates — keep first occurrence",
    },
    {
      input: [],
      expected: 0,
      desc: "Empty array → empty result",
    },
    {
      input: [
        { id: "X", name: "Hotel X" },
        { id: "Y", name: "Hotel Y" },
        { id: "Z", name: "Hotel Z" },
      ],
      expected: 3,
      desc: "All unique IDs → return all",
    },
    {
      input: [
        { id: "A", name: "H1" },
        { id: "A", name: "H1" },
        { id: "A", name: "H1" },
      ],
      expected: 1,
      desc: "All same ID → return only one",
    },
    {
      input: [{ id: "ONLY", name: "Solo" }],
      expected: 1,
      desc: "Single element → return as-is",
    },
  ];

  let passedAll = true;

  testCases.forEach(({ input, expected, desc }, index) => {
    const result = getUniqueBookings(input);
    const passed = result.length === expected;
    if (!passed) passedAll = false;
    console.log(`${passed ? "✅" : "❌"} Case #${index + 1}: ${desc}`);
    if (!passed) {
      console.log(`   Expected length: ${expected} | Got: ${result.length}`);
    }
  });

  console.log("---------------------------------");
  console.log(passedAll ? "ALL DEDUP TESTS PASSED!" : "SOME TESTS FAILED");
  console.log("---------------------------------\n");
}

testDedup();
