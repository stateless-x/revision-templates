// ==========================================
// PALINDROME CHECK
// ==========================================
//
// PROBLEM:
//   Given a string, return true if it reads the same forwards and backwards.
//   Ignore spaces and treat uppercase/lowercase as equal.
//
// APPROACH:
//   1. Strip all spaces from the string and convert to lowercase
//   2. Use two pointers — one at the start, one at the end
//   3. Move both inward, comparing characters at each step
//   4. If any mismatch is found, return false immediately
//   5. If pointers meet without a mismatch, return true
//
// TIME:  O(n)  — single pass with two pointers
// SPACE: O(n)  — new string created after stripping spaces
//
// EXAMPLES:
//   "racecar"                      → true
//   "hello"                        → false
//   "A man a plan a canal Panama"  → true  (spaces + mixed case)
//   "12321"                        → true
// ==========================================

function isPalindrome(str: string): boolean {
  // TODO: Strip spaces, lowercase, then use two pointers to compare
}

// ==========================================
// TEST
// ==========================================
function testPalindrome() {
  console.log("--- TEST: Palindrome Suite ---");

  const testCases = [
    { input: "racecar", expected: true, desc: "Standard lowercase" },
    { input: "hello", expected: false, desc: "Standard non-palindrome" },
    { input: "A man a plan a canal Panama", expected: true, desc: "Mixed case and spaces" },
    { input: "12321", expected: true, desc: "Numbers" },
    { input: " ", expected: true, desc: "Single space / empty after strip" },
    { input: "was it a car or a cat i saw", expected: true, desc: "Full sentence" },
    // --- Edge cases ---
    { input: "", expected: true, desc: "Empty string → valid palindrome" },
    { input: "a", expected: true, desc: "Single character → always true" },
    { input: "aa", expected: true, desc: "Two same characters" },
    { input: "ab", expected: false, desc: "Two different characters" },
    { input: "AbBa", expected: true, desc: "Case insensitive even pairs" },
  ];

  let passedAll = true;

  testCases.forEach(({ input, expected, desc }, index) => {
    const result = isPalindrome(input);
    const passed = result === expected;
    if (!passed) passedAll = false;
    console.log(`${passed ? "✅" : "❌"} Case #${index + 1} [${desc}]`);
    if (!passed) {
      console.log(`   Input: "${input}"`);
      console.log(`   Expected: ${expected} | Got: ${result}`);
    }
  });

  console.log("---------------------------------");
  console.log(passedAll ? "ALL PALINDROME TESTS PASSED!" : "SOME TESTS FAILED");
  console.log("---------------------------------\n");
}

testPalindrome();
