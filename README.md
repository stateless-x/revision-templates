# revision-templates

Personal DS&A practice templates for job interview prep. Each file is a self-contained problem — empty function stub, clear description of what to implement, and pre-written test cases to validate your solution.

---

## Structure

**`utils/`** — drills for specific syntax patterns (Map, Set, Stack, comparators). Practice these when you feel shaky on a particular API. Each util file is standalone and has its own test suite.

**`topics/`** — one problem per file. Each has a description, approach hints, and test cases. Solve, run, and move on.

Topics you can add later: `trees/`, `graphs/`, `dynamic-programming/`, `binary-search/`

---

## How to use

**1. Install dependencies (first time only)**
```bash
cd typescript
npm install
```

**2. Pick a problem and solve it**

Open any `.ts` file and fill in the `TODO` inside the function stub.

**3. Run your solution**
```bash
cd typescript
npx ts-node topics/arrays/two-sum.ts
```

The test suite at the bottom runs automatically and prints pass/fail for each case.

**Run a utils drill** (same pattern)
```bash
npx ts-node utils/map-utils.ts
npx ts-node utils/list-node.ts
npx ts-node utils/comparator.ts
npx ts-node utils/validation.ts
```

---

## How to add a new problem

**1. Pick the right topic folder** (or create one if it doesn't exist)
```
topics/arrays/       → array manipulation, hash maps, sliding window
topics/strings/      → string parsing, two pointers, pattern matching
topics/sorting/      → sorting algorithms
topics/linked-lists/ → singly/doubly linked list problems
topics/stacks/       → stack-based problems, monotonic stack
topics/trees/        → BST, DFS, BFS (create when needed)
topics/graphs/       → graph traversal, shortest path (create when needed)
topics/dynamic-programming/ → memoization, tabulation (create when needed)
```

**2. Create a new file using kebab-case**
```
topics/arrays/max-subarray.ts
topics/trees/inorder-traversal.ts
```

**3. Use this template inside the file**

```typescript
// ==========================================
// PROBLEM TITLE
// ==========================================
//
// PROBLEM:
//   Describe what the function should do in plain English.
//   Include input/output types and any constraints.
//
// APPROACH:
//   1. Step one of your intended approach
//   2. Step two
//   3. ...
//
// TIME:  O(?)  — explain why
// SPACE: O(?)  — explain why
//
// EXAMPLE:
//   Input:  ...
//   Output: ...
// ==========================================

function yourFunctionName(param: type): returnType {
  // TODO: implement
}

// ==========================================
// TEST
// ==========================================
function testYourFunction() {
  console.log("--- TEST: Problem Name Suite ---");

  const testCases = [
    { input: ..., expected: ..., desc: "Basic case" },
    { input: ..., expected: ..., desc: "Empty input" },
    { input: ..., expected: ..., desc: "Edge case" },
  ];

  let passedAll = true;

  testCases.forEach(({ input, expected, desc }, index) => {
    const result = yourFunctionName(input);
    const passed = JSON.stringify(result) === JSON.stringify(expected);
    if (!passed) passedAll = false;
    console.log(`${passed ? "✅" : "❌"} Case #${index + 1}: ${desc}`);
    if (!passed) {
      console.log(`   Expected: ${JSON.stringify(expected)} | Got: ${JSON.stringify(result)}`);
    }
  });

  console.log("---------------------------------");
  console.log(passedAll ? "ALL TESTS PASSED!" : "SOME TESTS FAILED");
  console.log("---------------------------------\n");
}

testYourFunction();
```

**Things to include in every problem file:**
- Clear PROBLEM description (no ambiguity)
- APPROACH hints — enough to guide you without giving it all away
- TIME and SPACE complexity targets
- At least one EXAMPLE in the header
- 3–5 test cases covering: basic, empty input, edge cases
- The function stub with a `// TODO` comment

---

## Contributing

This is a personal repo but if you want to add problems, follow the same structure above. A good problem to add should:

- Be a pattern that commonly shows up in interviews (not just a one-off trick)
- Have a clean O(n) or O(n log n) optimal solution
- Be solvable in under 30 minutes
- Fit into an existing topic folder (or justify a new one)

Keep the file self-contained — no imports from other files.
