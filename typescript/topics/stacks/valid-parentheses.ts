// ==========================================
// VALID PARENTHESES
// ==========================================
//
// PROBLEM:
//   Given a string of brackets, return true if they are valid.
//   Every opening bracket must be closed in the correct order (LIFO).
//   An empty string is valid.
//
// TIME:  O(n)
// SPACE: O(n)
//
// EXAMPLES:
//   "()[]{}"  → true
//   "([{}])"  → true
//   "(]"      → false
//   "([)]"    → false
//   "(("      → false
// ==========================================

function isValidParentheses(s: string): boolean {
  // TODO
}

// ==========================================
// TEST
// ==========================================
function testParentheses() {
  console.log("--- TEST: Parenthesis Matching Suite ---");

  const testCases = [
    { input: "()[]{}", expected: true,  desc: "Multiple pairs" },
    { input: "([{}])", expected: true,  desc: "Deeply nested" },
    { input: "(]",     expected: false, desc: "Mismatched pair" },
    { input: "([)]",   expected: false, desc: "Wrong nesting order" },
    { input: "((", expected: false, desc: "Unclosed brackets" },
    { input: "]",      expected: false, desc: "Starts with closing" },
    { input: "",       expected: true,  desc: "Empty string" },
  ];

  let passedAll = true;
  testCases.forEach(({ input, expected, desc }, index) => {
    const result = isValidParentheses(input);
    const passed = result === expected;
    if (!passed) passedAll = false;
    console.log(`${passed ? "✅" : "❌"} Case #${index + 1}: ${desc}`);
    if (!passed) {
      console.log(`   Input: "${input}"`);
      console.log(`   Expected: ${expected} | Got: ${result}`);
    }
  });

  console.log(passedAll ? "\nALL PASSED" : "\nSOME FAILED");
}

testParentheses();
