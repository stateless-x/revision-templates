// ==========================================
// CHEAPEST FLIGHT — Dijkstra's Algorithm
// ==========================================
//
// PROBLEM:
//   Given a weighted flight network where each edge has a price,
//   return the minimum total cost to travel from `start` to `target`.
//   Return -1 if no path exists.
//
//   In a real interview you would use a Min-Heap (Priority Queue).
//   Here, a sorted array simulates that behaviour — the logic is
//   identical, only the constant factor differs.
//
// APPROACH:
//   Greedy shortest-path search (Dijkstra):
//   1. Start at `start` with cost 0.
//   2. Always expand the city with the lowest accumulated cost first.
//   3. For each neighbour, compute newCost = currentCost + edgePrice.
//      If newCost is cheaper than any previously recorded cost, update
//      and enqueue.
//   4. First time you pop `target`, return its cost.
//
// TIME:  O((V + E) log V) — with a proper priority queue
// SPACE: O(V)             — minCosts map + queue
//
// EXAMPLE:
//   graph = {
//     BKK: [{ to: "SIN", price: 100 }, { to: "DXB", price: 500 }],
//     SIN: [{ to: "LHR", price: 200 }],
//     DXB: [{ to: "LHR", price: 50  }],
//     LHR: [],
//   }
//   findCheapestPrice(graph, "BKK", "LHR")  →  350  (BKK→DXB→LHR = 550, BKK→SIN→LHR = 300)
//   Correct answer: BKK→SIN→LHR = 100+200 = 300
// ==========================================

type WeightedGraph = Record<string, { to: string; price: number }[]>;

function findCheapestPrice(graph: WeightedGraph, start: string, target: string): number {
  // TODO: implement Dijkstra
  // Hint: track minCosts[city] and use a priority queue (sorted array) on { city, cost }
}

// ==========================================
// TEST
// ==========================================
function testFindCheapestPrice() {
  console.log("--- TEST: Cheapest Flight Dijkstra Suite ---");

  const graph: WeightedGraph = {
    BKK: [
      { to: "SIN", price: 100 },
      { to: "DXB", price: 500 },
    ],
    SIN: [{ to: "LHR", price: 200 }],
    DXB: [{ to: "LHR", price: 50  }],
    NRT: [{ to: "LAX", price: 300 }],
    LHR: [],
    LAX: [],
  };

  const testCases = [
    {
      start: "BKK", target: "LHR",
      expected: 300,
      desc: "Two routes — pick cheaper (BKK→SIN→LHR = 300)",
    },
    {
      start: "BKK", target: "DXB",
      expected: 500,
      desc: "Only one route available",
    },
    {
      start: "BKK", target: "BKK",
      expected: 0,
      desc: "Start equals target, cost 0",
    },
    {
      start: "BKK", target: "LAX",
      expected: -1,
      desc: "No path — disconnected component",
    },
    {
      start: "NRT", target: "LAX",
      expected: 300,
      desc: "Direct single edge",
    },
  ];

  let passedAll = true;

  testCases.forEach(({ start, target, expected, desc }, index) => {
    const result = findCheapestPrice(graph, start, target);
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

testFindCheapestPrice();
