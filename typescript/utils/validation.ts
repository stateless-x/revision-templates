// ==========================================
// VALIDATION UTILS — Set & Stack Patterns
// ==========================================
//
// WHY THIS FILE EXISTS:
//   Set and stack together power many validation and dedup problems.
//   This drills three patterns you'll reuse constantly:
//     1. Generic bracket matching (Set for openers, Map for pairs, Stack to track)
//     2. Duplicate detection with Set (size check trick)
//     3. First non-repeating item (freq map + second pass)
//
// WHAT TO IMPLEMENT:
//
//   isBalanced(str: string, pairMap: Map<string, string>): boolean
//     — pairMap maps CLOSING → OPENING  e.g. ")" → "("
//     — Build a Set of openers from pairMap.values()
//     — If char is an opener → push to stack
//     — If char is a closer  → pop from stack and check it matches pairMap.get(char)
//     — If stack empty when you try to pop → return false
//     — After loop, return true only if stack is empty
//
//   containsDuplicate<T>(items: T[]): boolean
//     — Return true if any value appears more than once
//     — Trick: put everything in a Set, then compare Set.size to items.length
//
//   firstNonRepeating<T>(items: T[]): T | null
//     — Return the FIRST item that appears exactly once
//     — Pass 1: build a frequency map
//     — Pass 2: iterate items again and return the first where map.get(item) === 1
//     — Return null if none found
//
// EXAMPLE (isBalanced):
//   pairMap = Map { ")" → "(", "}" → "{", "]" → "[" }
//   isBalanced("()[]{}", pairMap) → true
//   isBalanced("([)]",   pairMap) → false
//
// EXAMPLE (containsDuplicate):
//   containsDuplicate([1, 2, 3, 1]) → true
//   containsDuplicate([1, 2, 3])    → false
//
// EXAMPLE (firstNonRepeating):
//   firstNonRepeating(["a", "b", "a", "c"]) → "b"
//   firstNonRepeating([1, 1, 2, 2, 3])      → 3
// ==========================================

export const isBalanced = (str: string, pairMap: Map<string, string>): boolean => {
  // TODO: use new Set(pairMap.values()) for openers, then iterate str with a stack
};

export const containsDuplicate = <T>(items: T[]): boolean => {
  // TODO: put items in a Set, then compare Set.size !== items.length
};

export const firstNonRepeating = <T>(items: T[]): T | null => {
  // TODO: pass 1 — build frequency map; pass 2 — return first item with count === 1
};

// ==========================================
// TEST
// ==========================================
function testValidation() {
  console.log("--- TEST: Validation Utils Suite ---");
  let passedAll = true;

  const check = (label: string, got: unknown, expected: unknown) => {
    const passed = JSON.stringify(got) === JSON.stringify(expected);
    if (!passed) passedAll = false;
    console.log(`${passed ? "✅" : "❌"} ${label}`);
    if (!passed) console.log(`   Expected: ${JSON.stringify(expected)} | Got: ${JSON.stringify(got)}`);
  };

  const brackets = new Map([[")", "("], ["}", "{"], ["]", "["]]);

  // --- isBalanced ---
  check("isBalanced: '()[]{}'  → true",  isBalanced("()[]{}", brackets), true);
  check("isBalanced: '([{}])'  → true",  isBalanced("([{}])", brackets), true);
  check("isBalanced: '(]'      → false", isBalanced("(]",     brackets), false);
  check("isBalanced: '([)]'    → false", isBalanced("([)]",   brackets), false);
  check("isBalanced: '(('      → false", isBalanced("((",     brackets), false);
  check("isBalanced: ']'       → false", isBalanced("]",      brackets), false);
  check("isBalanced: '' (empty) → true", isBalanced("",       brackets), true);

  // custom pair map — tests that the function is truly generic, not hardcoded
  const custom = new Map([["!", "<"], ["|", "{"]]);
  check("isBalanced custom '<!' → true",  isBalanced("<!", custom), true);
  check("isBalanced custom '<|' → false", isBalanced("<|", custom), false);

  // --- containsDuplicate ---
  check("containsDuplicate: [1,2,3,1]     → true",  containsDuplicate([1, 2, 3, 1]),    true);
  check("containsDuplicate: [1,2,3]       → false", containsDuplicate([1, 2, 3]),        false);
  check("containsDuplicate: []            → false", containsDuplicate([]),               false);
  check("containsDuplicate: [1]           → false", containsDuplicate([1]),              false);
  check("containsDuplicate: ['a','b','a'] → true",  containsDuplicate(["a", "b", "a"]), true);
  check("containsDuplicate: all same [1,1,1] → true", containsDuplicate([1, 1, 1]),     true);

  // --- firstNonRepeating ---
  check("firstNonRepeating: ['a','b','a','c'] → 'b'", firstNonRepeating(["a", "b", "a", "c"]), "b");
  check("firstNonRepeating: [1,1,2,2,3]       → 3",   firstNonRepeating([1, 1, 2, 2, 3]),      3);
  check("firstNonRepeating: all dupes → null",         firstNonRepeating(["x", "x"]),           null);
  check("firstNonRepeating: []        → null",         firstNonRepeating([]),                   null);
  check("firstNonRepeating: [42] single → 42",         firstNonRepeating([42]),                 42);
  check("firstNonRepeating: first element is unique",  firstNonRepeating([5, 1, 1, 2, 2]),      5);

  console.log("---------------------------------");
  console.log(passedAll ? "ALL VALIDATION TESTS PASSED!" : "SOME TESTS FAILED");
  console.log("---------------------------------\n");
}

testValidation();
