// ==========================================
// REMOVE N-TH NODE FROM END OF LINKED LIST
// ==========================================
//
// PROBLEM:
//   Given the head of a singly linked list and an integer n,
//   remove the n-th node FROM THE END of the list and return the head.
//
// APPROACH (Two-Pointer / Fast & Slow):
//   1. Create a dummy/sentinel node pointing to head
//      — this handles the edge case of removing the head node cleanly
//   2. Place both pointers (p1, p2) at the dummy node
//   3. Advance p2 forward by (n + 1) steps to create a gap of n between p1 and p2
//   4. Move both pointers forward together until p2 reaches null
//   5. At this point, p1 is sitting just BEFORE the node to delete
//   6. Rewire: p1.next = p1.next.next  (skip the target node)
//   7. Return dummy.next as the new head
//
// TIME:  O(L)  — single pass, L = length of list
// SPACE: O(1)  — only pointer variables used
//
// EXAMPLE:
//   List: 1 → 2 → 3 → 4 → 5,  n = 2
//   Remove 4th node (2nd from end)
//   Result: 1 → 2 → 3 → 5
// ==========================================

class ListNode {
  val: number;
  next: ListNode | null = null;
  constructor(val: number) {
    this.val = val;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // TODO: Use a dummy node + two pointers with a gap of n to find and remove the target
}

// ==========================================
// TEST HELPERS
// ==========================================

/** Build a linked list from an array. e.g. [1,2,3] → 1→2→3 */
function buildList(vals: number[]): ListNode | null {
  if (vals.length === 0) return null;
  const head = new ListNode(vals[0]);
  let cur = head;
  for (let i = 1; i < vals.length; i++) {
    cur.next = new ListNode(vals[i]);
    cur = cur.next;
  }
  return head;
}

/** Flatten a linked list back to an array for easy comparison */
function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let cur = head;
  while (cur !== null) {
    result.push(cur.val);
    cur = cur.next;
  }
  return result;
}

// ==========================================
// TEST
// ==========================================
function testLinkedList() {
  console.log("--- TEST: Remove N-th Suite ---");

  const testCases = [
    {
      vals: [1, 2],       n: 1,
      expected: [1],
      desc: "Two nodes — remove last (n=1)",
    },
    {
      vals: [1, 2, 3, 4, 5],  n: 2,
      expected: [1, 2, 3, 5],
      desc: "Five nodes — remove 2nd from end",
    },
    {
      vals: [1, 2, 3, 4, 5],  n: 5,
      expected: [2, 3, 4, 5],
      desc: "Remove head (n = list length)",
    },
    {
      vals: [1],   n: 1,
      expected: [],
      desc: "Single node — result is empty list",
    },
    {
      vals: [1, 2, 3],  n: 3,
      expected: [2, 3],
      desc: "Three nodes — remove head (n = length)",
    },
  ];

  let passedAll = true;

  testCases.forEach(({ vals, n, expected, desc }, index) => {
    const head = buildList(vals);
    const result = listToArray(removeNthFromEnd(head, n));
    const passed = JSON.stringify(result) === JSON.stringify(expected);
    if (!passed) passedAll = false;
    console.log(`${passed ? "✅" : "❌"} Case #${index + 1}: ${desc}`);
    if (!passed) {
      console.log(`   Expected: [${expected}] | Got: [${result}]`);
    }
  });

  console.log("---------------------------------");
  console.log(passedAll ? "ALL LINKED LIST TESTS PASSED!" : "SOME TESTS FAILED");
  console.log("---------------------------------\n");
}

testLinkedList();
