// ==========================================
// CATEGORY EXPLORER — DFS (Hierarchy Traversal)
// ==========================================
//
// PROBLEM:
//   Agoda organises destinations in a tree: Region → Country → City.
//   Given a root CategoryNode, return the names of ALL nodes in the
//   tree (every level) using Depth-First Search.
//
//   The order of returned names should follow DFS pre-order:
//   process the current node first, then recurse into each child.
//
// APPROACH:
//   Use recursion (or an explicit stack) to go as deep as possible
//   before backtracking. Accumulate names in a shared array that is
//   passed through each recursive call.
//
// TIME:  O(N)  — every node is visited exactly once
// SPACE: O(H)  — call stack depth equals the height of the tree
//
// EXAMPLE:
//   Tree:
//     Asia
//     ├── Thailand
//     │   ├── Bangkok
//     │   └── Chiang Mai
//     └── Japan
//         └── Tokyo
//
//   getAllNames(root)
//   → ["Asia", "Thailand", "Bangkok", "Chiang Mai", "Japan", "Tokyo"]
// ==========================================

type CategoryNode = {
  name: string;
  subCategories: CategoryNode[];
};

function getAllNames(node: CategoryNode, names: string[] = []): string[] {
  // TODO: implement DFS pre-order traversal
  // Hint: push the current node's name, then recurse into each child
}

// ==========================================
// TEST
// ==========================================
function testGetAllNames() {
  console.log("--- TEST: Category Explorer DFS Suite ---");

  // Tree fixture
  const tree: CategoryNode = {
    name: "Asia",
    subCategories: [
      {
        name: "Thailand",
        subCategories: [
          { name: "Bangkok",    subCategories: [] },
          { name: "Chiang Mai", subCategories: [] },
        ],
      },
      {
        name: "Japan",
        subCategories: [
          { name: "Tokyo", subCategories: [] },
        ],
      },
    ],
  };

  const singleNode: CategoryNode = { name: "Europe", subCategories: [] };

  const deepTree: CategoryNode = {
    name: "World",
    subCategories: [
      {
        name: "APAC",
        subCategories: [
          {
            name: "Southeast Asia",
            subCategories: [
              { name: "Singapore", subCategories: [] },
            ],
          },
        ],
      },
    ],
  };

  const testCases = [
    {
      node: tree,
      expected: ["Asia", "Thailand", "Bangkok", "Chiang Mai", "Japan", "Tokyo"],
      desc: "Full 3-level tree, pre-order DFS",
    },
    {
      node: singleNode,
      expected: ["Europe"],
      desc: "Single root node with no children",
    },
    {
      node: deepTree,
      expected: ["World", "APAC", "Southeast Asia", "Singapore"],
      desc: "Deep linear tree (4 levels)",
    },
  ];

  let passedAll = true;

  testCases.forEach(({ node, expected, desc }, index) => {
    const result = getAllNames(node);
    const passed = JSON.stringify(result) === JSON.stringify(expected);
    if (!passed) passedAll = false;
    console.log(`${passed ? "✅" : "❌"} Case #${index + 1}: ${desc}`);
    if (!passed) {
      console.log(`   Expected: ${JSON.stringify(expected)}`);
      console.log(`   Got:      ${JSON.stringify(result)}`);
    }
  });

  console.log("---------------------------------");
  console.log(passedAll ? "ALL TESTS PASSED!" : "SOME TESTS FAILED");
  console.log("---------------------------------\n");
}

testGetAllNames();
