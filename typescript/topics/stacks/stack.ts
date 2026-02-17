// ==========================================
// STACK — Generic LIFO Data Structure
// ==========================================
//
// PROBLEM:
//   Implement a generic Stack class (Last-In-First-Out).
//
// METHODS:
//   push(item: T): void        — add to top
//   pop(): T | undefined       — remove and return top; undefined if empty
//   peek(): T | undefined      — return top without removing; undefined if empty
//
// TIME:  O(1) for all operations
// SPACE: O(n)
// ==========================================

class MyStack<T> {
  // TODO

  push(item: T): void {
    // TODO
  }

  pop(): T | undefined {
    // TODO
    return undefined;
  }

  peek(): T | undefined {
    // TODO
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

  const s1 = new MyStack<number>();
  s1.push(1); s1.push(2);
  check("LIFO — pop returns 2",  s1.pop(), 2);
  check("LIFO — pop returns 1",  s1.pop(), 1);

  const s2 = new MyStack<number>();
  check("Pop on empty → undefined", s2.pop(), undefined);

  const s3 = new MyStack<number>();
  s3.pop();
  s3.push(42);
  check("Push after empty pop works", s3.pop(), 42);

  const s4 = new MyStack<number>();
  s4.push(99);
  check("Peek returns top (99)",             s4.peek(), 99);
  check("Peek does not remove — pop is 99",  s4.pop(),  99);

  const s5 = new MyStack<number>();
  check("Peek on empty → undefined", s5.peek(), undefined);

  console.log(passedAll ? "\nALL PASSED" : "\nSOME FAILED");
}

testStack();
