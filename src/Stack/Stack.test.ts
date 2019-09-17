import Stack from "./Stack";

describe("Stack creation", () => {
    test("should create Stack", () => {
        const stack: Stack<any> = new Stack();

        expect(stack).toBeDefined();
    });
});

describe("Stack size", () => {
    test("should be empty, when created", () => {
        const stack: Stack<any> = new Stack();
        expect(stack.isEmpty()).toBeTruthy();
    });

    test("should not be empty, when have some values", () => {
        const stack: Stack<any> = new Stack();
        stack.push(1);

        expect(stack.isEmpty()).toBeFalsy();
    });
});

describe("Pushing values", () => {
    test("should return pushed value", () => {
        const stack: Stack<any> = new Stack();
        stack.push(1);

        expect(stack.push(1)).toEqual(1);
    });

    test("should contains pushed elems", () => {
        const stack: Stack<any> = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);

        expect(stack.toArray()).toEqual([1, 2, 3, 4]);
    });
});

describe("Popping values", () => {
    test("should return popped value", () => {
        const stack: Stack<any> = new Stack();
        stack.push(1);
        stack.push(2);

        expect(stack.pop()).toEqual(2);
    });

    test("should throw error if stack is empty", () => {
        const stack: Stack<any> = new Stack();

        expect(() => stack.pop()).toThrowError();
    });

    test("should removed element when it's popped", () => {
        const stack: Stack<any> = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.pop();

        expect(stack.toArray()).toEqual([1, 2]);
    });
});

describe("Peeking values", () => {
    test("should return peecked value", () => {
        const stack: Stack<any> = new Stack();
        stack.push(1);

        expect(stack.peek()).toEqual(1);
    });

    test("should not change stack size", () => {
        const stack: Stack<any> = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.peek();

        expect(stack.toArray()).toEqual([1, 2, 3]);
    });
});
