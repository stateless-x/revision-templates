// ==========================================
// VALID PARENTHESES
// ==========================================
//
// PROBLEM:
//   Given a string containing only '(', ')', '{', '}', '[', ']',
//   return true if the brackets are valid — i.e. every opening bracket
//   has a matching closing bracket in the correct order.
//
// RULES:
//   - Every open bracket must be closed by the SAME type of bracket
//   - Open brackets must be closed in the CORRECT order (LIFO)
//   - An empty string is considered valid
//
// APPROACH (Stack):
//   1. Create a map of closing → opening bracket pairs:
//        ')' → '(',  '}' → '{',  ']' → '['
//   2. Iterate over each character:
//      - If it's an OPENING bracket → push onto stack
//      - If it's a CLOSING bracket  → pop from stack and check it matches
//        → If the stack is empty or the popped value doesn't match → return false
//   3. After the loop, return true ONLY if the stack is empty
//      (any remaining items mean unclosed brackets)
//
// TIME:  O(n)  — single pass through the string
// SPACE: O(n)  — stack can hold up to n/2 opening brackets
//
// EXAMPLES:
//   "()[]{}"  → true
//   "([{}])"  → true
//   "(]"      → false  (mismatched pair)
//   "([)]"    → false  (wrong nesting order)
//   "(("      → false  (unclosed)
//   "]"       → false  (starts with closing)
//   ""        → true   (empty is valid)
// ==========================================

function isValidParentheses(s: string): boolean {
  // TODO: Use a stack + closing→opening map to validate bracket pairs
}

// ==========================================
// TEST
// ==========================================
function testParentheses() {
  console.log("--- TEST: Parenthesis Matching Suite ---");

  const testCases = [
    { input: "()[]{}", expected: true, desc: "Standard multiple pairs" },
    { input: "([{}])", expected: true, desc: "Deeply nested brackets" },
    { input: "(]", expected: false, desc: "Mismatched pair" },
    { input: "([)]", expected: false, desc: "Incorrect nesting order" },
    { input: "((", expected: false, desc: "Unclosed brackets at end" },
    { input: "]", expected: false, desc: "Starts with closing bracket" },
    { input: "", expected: true, desc: "Empty string (valid)" },
  ];

  let passedAll = true;

  testCases.forEach(({ input, expected, desc }, index) => {
    const result = isValidParentheses(input);
    const passed = result === expected;
    if (!passed) passedAll = false;
    console.log(`${passed ? "✅" : "❌"} Case #${index + 1}: ${desc}`);
    if (!passed) {
      console.log(`   Input:    "${input}"`);
      console.log(`   Expected: ${expected} | Got: ${result}`);
    }
  });

  console.log("-----------------------------------------");
  console.log(passedAll ? "ALL TESTS PASSED!" : "SOME TESTS FAILED");
  console.log("-----------------------------------------");
}

testParentheses();
