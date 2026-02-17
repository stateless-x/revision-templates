// ==========================================
// LIST NODE
// ==========================================
//
// DRILL:
//   Build this class from scratch before every linked list session.
//   fromArray and toArray are your setup/verify helpers.
//
// IMPLEMENT:
//   class ListNode
//   — constructor(val = 0, next = null)
//   — static fromArray(arr): ListNode | null
//   — toArray(): number[]
//
// EXAMPLE:
//   ListNode.fromArray([1, 2, 3]).toArray()  →  [1, 2, 3]
// ==========================================

export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number = 0, next: ListNode | null = null) {
    // TODO
  }

  static fromArray(arr: number[]): ListNode | null {
    // TODO
  }

  toArray(): number[] {
    // TODO
  }
}

// ==========================================
// TEST
// ==========================================
function test() {
  console.log("--- TEST: ListNode ---");
  let pass = true;

  const check = (label: string, got: unknown, expected: unknown) => {
    const ok = JSON.stringify(got) === JSON.stringify(expected);
    if (!ok) pass = false;
    console.log(`${ok ? "✅" : "❌"} ${label}`);
    if (!ok) console.log(`   Expected: ${JSON.stringify(expected)} | Got: ${JSON.stringify(got)}`);
  };

  const n = new ListNode(5);
  check("val = 5",     n.val,  5);
  check("next = null", n.next, null);

  check("fromArray([]) → null",    ListNode.fromArray([]),              null);
  check("fromArray([1,2,3]) head", ListNode.fromArray([1,2,3])?.val,    1);
  check("fromArray([1,2,3]) tail", ListNode.fromArray([1,2,3])?.next?.next?.val, 3);

  check("[1,2,3] round-trip", ListNode.fromArray([1,2,3])?.toArray(), [1,2,3]);
  check("[5] round-trip",     ListNode.fromArray([5])?.toArray(),     [5]);

  console.log(pass ? "\nALL PASSED" : "\nSOME FAILED");
}

test();
