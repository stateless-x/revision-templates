// ==========================================
// STACK — Generic LIFO Data Structure
// ==========================================
//
// PROBLEM:
//   Implement a generic Stack class that follows Last-In-First-Out (LIFO) order.
//   The class must support at minimum push and pop operations.
//
// METHODS TO IMPLEMENT:
//   push(item: T): void
//     — Add item to the top of the stack
//
//   pop(): T | undefined
//     — Remove and return the top item
//     — Return undefined if the stack is empty
//
//   peek(): T | undefined  (optional but good practice)
//     — Return the top item WITHOUT removing it
//     — Return undefined if the stack is empty
//
// APPROACH:
//   - Use a private internal array as the backing store
//   - push → Array.push
//   - pop  → Array.pop
//   - peek → array[array.length - 1]
//
// TIME:  O(1) for push, pop, peek
// SPACE: O(n) — grows with number of elements
// ==========================================

class MyStack<T> {
  // TODO: Add a private internal array to store elements

  push(item: T): void {
    // TODO: Add item to the top of the stack
  }

  pop(): T | undefined {
    // TODO: Remove and return the top item; return undefined if empty
    return undefined;
  }

  peek(): T | undefined {
    // TODO: (Optional) Return the top item without removing it
    return undefined;
  }
}

// ==========================================
// TEST
// ==========================================
function testStack() {
  console.log("--- TEST: Stack Suite ---");

  let passedAll = true;

  const check = (label: string, got: unknown, expected: unknown) => {
    const passed = got === expected;
    if (!passed) passedAll = false;
    console.log(`${passed ? "✅" : "❌"} ${label}`);
    if (!passed) console.log(`   Expected: ${expected} | Got: ${got}`);
  };

  // Basic LIFO order
  const s1 = new MyStack<number>();
  s1.push(1);
  s1.push(2);
  check("LIFO — pop returns last pushed (2)", s1.pop(), 2);
  check("LIFO — pop returns first pushed (1)", s1.pop(), 1);

  // Pop on empty stack
  const s2 = new MyStack<number>();
  check("Pop on empty stack → undefined", s2.pop(), undefined);

  // Pop after empty, push again
  const s3 = new MyStack<number>();
  s3.pop(); // should not throw
  s3.push(42);
  check("Push after empty pop still works", s3.pop(), 42);

  // Peek does not remove item
  const s4 = new MyStack<number>();
  s4.push(99);
  check("Peek returns top item (99)", s4.peek(), 99);
  check("Peek does not remove — pop still returns 99", s4.pop(), 99);

  // Peek on empty
  const s5 = new MyStack<number>();
  check("Peek on empty stack → undefined", s5.peek(), undefined);

  console.log("---------------------------------");
  console.log(passedAll ? "ALL STACK TESTS PASSED!" : "SOME TESTS FAILED");
  console.log("---------------------------------\n");
}

testStack();
