// ==========================================
// PALINDROME CHECK
// ==========================================
//
// PROBLEM:
//   Return true if the string reads the same forwards and backwards.
//   Ignore spaces. Case insensitive.
//
// TIME:  O(n)
// SPACE: O(n)
//
// EXAMPLES:
//   "racecar"                      → true
//   "hello"                        → false
//   "A man a plan a canal Panama"  → true
// ==========================================

function isPalindrome(str: string): boolean {
  // TODO
}

// ==========================================
// TEST
// ==========================================
function testPalindrome() {
  console.log("--- TEST: Palindrome Suite ---");

  const testCases = [
    { input: "racecar",                       expected: true,  desc: "Standard lowercase" },
    { input: "hello",                         expected: false, desc: "Non-palindrome" },
    { input: "A man a plan a canal Panama",   expected: true,  desc: "Mixed case and spaces" },
    { input: "12321",                         expected: true,  desc: "Numbers" },
    { input: " ",                             expected: true,  desc: "Single space / empty after strip" },
    { input: "was it a car or a cat i saw",   expected: true,  desc: "Full sentence" },
    { input: "",                              expected: true,  desc: "Empty string" },
    { input: "a",                             expected: true,  desc: "Single character" },
    { input: "aa",                            expected: true,  desc: "Two same characters" },
    { input: "ab",                            expected: false, desc: "Two different characters" },
    { input: "AbBa",                          expected: true,  desc: "Case insensitive even pairs" },
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

  console.log(passedAll ? "\nALL PASSED" : "\nSOME FAILED");
}

testPalindrome();
