// ==========================================
// SHORTEST PATH — BFS (Route Finder)
// ==========================================
//
// PROBLEM:
//   Given a flight network as an adjacency list and two city codes,
//   return the minimum number of stops (edges) to travel from `start`
//   to `target`. Return -1 if no path exists.
//
//   Each connection is one-directional (directed graph).
//
// APPROACH:
//   Use BFS — explore cities layer by layer (1 stop, 2 stops, …).
//   The first time you reach `target`, that distance is guaranteed
//   to be the shortest. Track visited cities to avoid cycles.
//
// TIME:  O(V + E)  — every vertex and edge is visited at most once
// SPACE: O(V)      — queue and visited set hold at most V cities
//
// EXAMPLE:
//   graph = {
//     "BKK": ["SIN", "HKG"],
//     "SIN": ["NRT"],
//     "HKG": ["NRT"],
//     "NRT": ["LAX"],
//   }
//   findShortestPath(graph, "BKK", "LAX")  →  2  (BKK → SIN → NRT → LAX = 3 edges… wait, re-count)
//   findShortestPath(graph, "BKK", "NRT")  →  2  (BKK → SIN → NRT)
//   findShortestPath(graph, "BKK", "NYC")  →  -1 (unreachable)
// ==========================================

type FlightGraph = Record<string, string[]>;

function findShortestPath(graph: FlightGraph, start: string, target: string): number {
  // TODO: implement BFS
  // Hint: queue entries should carry both the city and its current distance
}

// ==========================================
// TEST
// ==========================================
function testFindShortestPath() {
  console.log("--- TEST: Shortest Path BFS Suite ---");

  const graph: FlightGraph = {
    BKK: ["SIN", "HKG"],
    SIN: ["NRT"],
    HKG: ["NRT"],
    NRT: ["LAX"],
    LAX: [],
    DXB: ["LHR"], // isolated sub-graph
    LHR: [],
  };

  const testCases = [
    { start: "BKK", target: "NRT", expected: 2, desc: "Two hops via SIN or HKG" },
    { start: "BKK", target: "LAX", expected: 3, desc: "Three hops BKK→SIN→NRT→LAX" },
    { start: "BKK", target: "BKK", expected: 0, desc: "Start equals target" },
    { start: "BKK", target: "LHR", expected: -1, desc: "No path to isolated node" },
    { start: "DXB", target: "LHR", expected: 1, desc: "Direct connection" },
    { start: "LAX", target: "BKK", expected: -1, desc: "Reverse — directed graph, no path back" },
  ];

  let passedAll = true;

  testCases.forEach(({ start, target, expected, desc }, index) => {
    const result = findShortestPath(graph, start, target);
    const passed = result === expected;
    if (!passed) passedAll = false;
    console.log(`${passed ? "✅" : "❌"} Case #${index + 1}: ${desc}`);
    if (!passed) {
      console.log(`   Expected: ${expected} | Got: ${result}`);
    }
  });

  console.log("---------------------------------");
  console.log(passedAll ? "ALL TESTS PASSED!" : "SOME TESTS FAILED");
  console.log("---------------------------------\n");
}

testFindShortestPath();
