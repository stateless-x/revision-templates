// ==========================================
// REMOVE N-TH NODE FROM END
// ==========================================
//
// PROBLEM:
//   Given the head of a singly linked list and integer n,
//   remove the n-th node FROM THE END and return the head.
//
// TIME:  O(L)  — L = length of list
// SPACE: O(1)
//
// EXAMPLE:
//   List: 1 → 2 → 3 → 4 → 5,  n = 2
//   Output: 1 → 2 → 3 → 5
// ==========================================

class ListNode {
  val: number;
  next: ListNode | null = null;
  constructor(val: number) { this.val = val; }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // TODO
}

// ==========================================
// TEST HELPERS
// ==========================================
function buildList(vals: number[]): ListNode | null {
  if (vals.length === 0) return null;
  const head = new ListNode(vals[0]);
  let cur = head;
  for (let i = 1; i < vals.length; i++) { cur.next = new ListNode(vals[i]); cur = cur.next; }
  return head;
}

function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let cur = head;
  while (cur !== null) { result.push(cur.val); cur = cur.next; }
  return result;
}

// ==========================================
// TEST
// ==========================================
function testLinkedList() {
  console.log("--- TEST: Remove N-th Suite ---");

  const testCases = [
    { vals: [1, 2],          n: 1, expected: [1],          desc: "Two nodes — remove last" },
    { vals: [1, 2, 3, 4, 5], n: 2, expected: [1, 2, 3, 5], desc: "Remove 2nd from end" },
    { vals: [1, 2, 3, 4, 5], n: 5, expected: [2, 3, 4, 5], desc: "Remove head (n = length)" },
    { vals: [1],             n: 1, expected: [],            desc: "Single node → empty list" },
    { vals: [1, 2, 3],       n: 3, expected: [2, 3],        desc: "Three nodes — remove head" },
  ];

  let passedAll = true;
  testCases.forEach(({ vals, n, expected, desc }, index) => {
    const result = listToArray(removeNthFromEnd(buildList(vals), n));
    const passed = JSON.stringify(result) === JSON.stringify(expected);
    if (!passed) passedAll = false;
    console.log(`${passed ? "✅" : "❌"} Case #${index + 1}: ${desc}`);
    if (!passed) console.log(`   Expected: [${expected}] | Got: [${result}]`);
  });

  console.log(passedAll ? "\nALL PASSED" : "\nSOME FAILED");
}

testLinkedList();
