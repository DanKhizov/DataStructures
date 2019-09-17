import Queue from "./Queue";

describe("Queue creation", () => {
    test("should create Queue", () => {
        const queue: Queue<any> = new Queue();

        expect(queue).toBeDefined();
    });
});

describe("Queue size", () => {
    test("should be empty, when created", () => {
        const queue: Queue<any> = new Queue();
        expect(queue.isEmpty()).toBeTruthy();
    });

    test("should not be empty, when have some values", () => {
        const queue: Queue<any> = new Queue();
        queue.add(1);

        expect(queue.isEmpty()).toBeFalsy();
    });
});

describe("Adding values", () => {
    test("should return added value", () => {
        const queue: Queue<any> = new Queue();
        expect(queue.add(1)).toEqual(1);
    });

    test("should contains added values", () => {
        const queue: Queue<any> = new Queue();
        queue.add(1);
        queue.add(2);
        queue.add(3);
        queue.add(4);

        expect(queue.toArray()).toEqual([4, 3, 2, 1]);
    });
});

describe("Popping values", () => {
    test("should return removed value", () => {
        const queue: Queue<any> = new Queue();
        queue.add(1);
        queue.add(2);
        queue.add(3);

        expect(queue.remove()).toEqual(1);
    });

    test("should throw error if queue is empty", () => {
        const queue: Queue<any> = new Queue();

        expect(() => queue.remove()).toThrowError();
    });

    test("should removed element when it's popped", () => {
        const queue: Queue<any> = new Queue();
        queue.add(1);
        queue.add(2);
        queue.add(3);
        queue.remove();

        expect(queue.toArray()).toEqual([3, 2]);
    });
});

describe("Peeking values", () => {
    test("should return peecked value", () => {
        const queue: Queue<any> = new Queue();
        queue.add(1);

        expect(queue.peek()).toEqual(1);
    });

    test("should not change queue size", () => {
        const queue: Queue<any> = new Queue();
        queue.add(1);
        queue.add(2);
        queue.add(3);
        queue.peek();

        expect(queue.toArray()).toEqual([3, 2, 1]);
    });
});
