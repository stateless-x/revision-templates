// ==========================================
// IS BALANCED
// ==========================================
//
// DRILL:
//   Generic bracket matching using Set + Stack + Map together.
//   The caller defines the pairs — not hardcoded to (){}[].
//
// IMPLEMENT:
//   isBalanced(str: string, pairMap: Map<string, string>): boolean
//   — pairMap maps CLOSING → OPENING  e.g. ")" → "("
//   — Return true only if all brackets are correctly matched and closed
//
// TIME:  O(n)
// SPACE: O(n)
//
// EXAMPLE:
//   const pairs = new Map([[")", "("], ["}", "{"], ["]", "["]])
//   isBalanced("()[]{}", pairs) → true
//   isBalanced("([)]",   pairs) → false
// ==========================================

export const isBalanced = (str: string, pairMap: Map<string, string>): boolean => {
  // TODO
};

// ==========================================
// TEST
// ==========================================
function test() {
  console.log("--- TEST: Is Balanced ---");
  let pass = true;

  const check = (label: string, got: unknown, expected: unknown) => {
    const ok = JSON.stringify(got) === JSON.stringify(expected);
    if (!ok) pass = false;
    console.log(`${ok ? "✅" : "❌"} ${label}`);
    if (!ok) console.log(`   Expected: ${JSON.stringify(expected)} | Got: ${JSON.stringify(got)}`);
  };

  const p = new Map([[")", "("], ["}", "{"], ["]", "["]]);
  check("'()[]{}'   → true",  isBalanced("()[]{}", p), true);
  check("'([{}])'   → true",  isBalanced("([{}])", p), true);
  check("'(]'       → false", isBalanced("(]",     p), false);
  check("'([)]'     → false", isBalanced("([)]",   p), false);
  check("'(('       → false", isBalanced("((",     p), false);
  check("']'        → false", isBalanced("]",      p), false);
  check("'' (empty) → true",  isBalanced("",       p), true);

  const custom = new Map([["!", "<"]]);
  check("custom '<!' → true",  isBalanced("<!", custom), true);
  check("custom '!<' → false", isBalanced("!<", custom), false);

  console.log(pass ? "\nALL PASSED" : "\nSOME FAILED");
}

test();
