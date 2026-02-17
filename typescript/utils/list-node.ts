// ==========================================
// LIST NODE — Linked List Building Block
// ==========================================
//
// WHY THIS FILE EXISTS:
//   Every linked list problem starts with this class.
//   Building it from scratch drills OOP syntax, null safety,
//   and the pointer traversal pattern you'll use in every linked list problem.
//
//   fromArray and toArray are interview helpers — they let you set up
//   and verify lists quickly without manually wiring nodes.
//
// WHAT TO IMPLEMENT:
//
//   class ListNode
//     — val: number
//     — next: ListNode | null
//     — constructor(val: number = 0, next: ListNode | null = null)
//         assign both fields in the constructor body
//
//   static fromArray(arr: number[]): ListNode | null
//     — Convert [1, 2, 3] → 1 → 2 → 3 → null
//     — Return null for an empty array
//     — Create head, then loop from index 1 keeping a `current` pointer
//
//   toArray(): number[]
//     — Walk from `this` to the end, collecting .val into an array
//     — Use a while loop: while (cur !== null)
//
// EXAMPLE:
//   ListNode.fromArray([1, 2, 3]).toArray()  →  [1, 2, 3]
//   ListNode.fromArray([]).toArray()  — not valid (fromArray returns null for empty)
// ==========================================

export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number = 0, next: ListNode | null = null) {
    // TODO: assign val and next to this
  }

  static fromArray(arr: number[]): ListNode | null {
    // TODO: build a linked list from the array, return head (or null if empty)
  }

  toArray(): number[] {
    // TODO: traverse from this node to end, collect values into array and return it
  }
}

// ==========================================
// TEST
// ==========================================
function testListNode() {
  console.log("--- TEST: ListNode Suite ---");
  let passedAll = true;

  const check = (label: string, got: unknown, expected: unknown) => {
    const passed = JSON.stringify(got) === JSON.stringify(expected);
    if (!passed) passedAll = false;
    console.log(`${passed ? "✅" : "❌"} ${label}`);
    if (!passed) console.log(`   Expected: ${JSON.stringify(expected)} | Got: ${JSON.stringify(got)}`);
  };

  // --- constructor ---
  const node = new ListNode();
  check("Default constructor: val = 0",    node.val,  0);
  check("Default constructor: next = null", node.next, null);

  const node2 = new ListNode(5);
  check("Constructor with val: val = 5",    node2.val,  5);
  check("Constructor with val: next = null", node2.next, null);

  const node3 = new ListNode(1, new ListNode(2));
  check("Constructor with next: val = 1",       node3.val,       1);
  check("Constructor with next: next.val = 2",  node3.next?.val, 2);

  // --- fromArray ---
  check("fromArray([]) → null", ListNode.fromArray([]), null);

  const single = ListNode.fromArray([7]);
  check("fromArray([7]): val = 7",    single?.val,  7);
  check("fromArray([7]): next = null", single?.next, null);

  const list = ListNode.fromArray([1, 2, 3]);
  check("fromArray([1,2,3]): head.val = 1",             list?.val,              1);
  check("fromArray([1,2,3]): second.val = 2",           list?.next?.val,        2);
  check("fromArray([1,2,3]): third.val = 3",            list?.next?.next?.val,  3);
  check("fromArray([1,2,3]): end is null",              list?.next?.next?.next, null);

  // --- toArray ---
  check("toArray on [1,2,3]",    ListNode.fromArray([1, 2, 3])?.toArray(), [1, 2, 3]);
  check("toArray on [5]",        ListNode.fromArray([5])?.toArray(),       [5]);
  check("toArray on [1,2,3,4,5]", ListNode.fromArray([1,2,3,4,5])?.toArray(), [1,2,3,4,5]);

  // --- round-trip ---
  const original = [10, 20, 30, 40];
  check("fromArray → toArray round-trip", ListNode.fromArray(original)?.toArray(), original);

  console.log("---------------------------------");
  console.log(passedAll ? "ALL LIST NODE TESTS PASSED!" : "SOME TESTS FAILED");
  console.log("---------------------------------\n");
}

testListNode();
